import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";
import {
  PrismaClient,
  PropertyGroup,
  PropertyKind,
  TransactionDirection,
  TransactionKind,
} from "@prisma/client";
import bcrypt from "bcryptjs";
import { readFileSync } from "node:fs";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

function envOrDefault(name: string, fallback: string) {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value : fallback;
}

async function upsertAdminUser() {
  const email = envOrDefault("ADMIN_EMAIL", "admin@example.com");
  const legacyUsername = envOrDefault("ADMIN_USERNAME", "admin");
  const password = envOrDefault("ADMIN_PASSWORD", "admin123");

  const passwordHash = await bcrypt.hash(password, 12);

  const verifiedAt = new Date();

  const byEmail = await prisma.user.findUnique({ where: { email } });
  const byUsername = await prisma.user.findUnique({ where: { username: legacyUsername } });

  if (byEmail) {
    await prisma.user.update({
      where: { id: byEmail.id },
      data: { passwordHash, emailVerified: verifiedAt },
    });
  } else if (byUsername) {
    await prisma.user.update({
      where: { id: byUsername.id },
      data: { email, passwordHash, emailVerified: verifiedAt },
    });
  } else {
    await prisma.user.create({
      data: { email, username: legacyUsername, passwordHash, emailVerified: verifiedAt },
    });
  }

  // eslint-disable-next-line no-console
  console.log(`Seeded admin user: ${email}`);
}

async function upsertTransactionTypesAndTemplates() {
  const types: Array<{ code: TransactionKind; label: string }> = [
    { code: "BALANCE_UPDATE", label: "Update Saldo" },
    { code: "TRANSFER", label: "Transfer" },
    { code: "BUY_PROPERTY", label: "Beli Properti" },
    { code: "PAY_RENT", label: "Bayar Sewa" },
    { code: "MORTGAGE_PROPERTY", label: "Hipotik Properti" },
    { code: "COMMUNITY_CHEST", label: "Dana Umum" },
    { code: "CHANCE", label: "Kesempatan" },
    { code: "TAX", label: "Pajak" },
  ];

  for (const t of types) {
    await prisma.transactionType.upsert({
      where: { code: t.code },
      update: { label: t.label },
      create: { code: t.code, label: t.label },
    });
  }

  const typeMap = await prisma.transactionType.findMany();
  const idByCode = new Map(typeMap.map((t) => [t.code, t.id] as const));

  type PropertySeed = {
    name: string;
    kind?: keyof typeof PropertyKind;
    propertyGroup: keyof typeof PropertyGroup;
    propertySet: string;
    country: string;
    landmark: string;
    icon?: string;
    price: number;
    rentBase: number;
    rent1House: number;
    rent2Houses: number;
    rent3Houses: number;
    rent4Houses: number;
    rentHotel: number;
    housePrice: number;
    hotelPrice: number;
    mortgageValue: number;
    boardIndex: number;
  };

  const propertySeedJson = JSON.parse(
    readFileSync(new URL("./property-templates.json", import.meta.url), "utf8")
  ) as PropertySeed[];

  for (const p of propertySeedJson) {
    const kind = (p.kind ?? "RESIDENTIAL") as PropertyKind;

    await prisma.propertyTemplate.upsert({
      where: { name: p.name },
      update: {
        kind,
        propertyGroup: p.propertyGroup as PropertyGroup,
        propertySet: p.propertySet,
        country: p.country,
        landmark: p.landmark,
        icon: p.icon ?? null,
        price: p.price,
        rentBase: p.rentBase,
        rent1House: p.rent1House,
        rent2Houses: p.rent2Houses,
        rent3Houses: p.rent3Houses,
        rent4Houses: p.rent4Houses,
        rentHotel: p.rentHotel,
        housePrice: p.housePrice,
        hotelPrice: p.hotelPrice,
        mortgageValue: p.mortgageValue,
        boardIndex: p.boardIndex,
      },
      create: {
        name: p.name,
        kind,
        propertyGroup: p.propertyGroup as PropertyGroup,
        propertySet: p.propertySet,
        country: p.country,
        landmark: p.landmark,
        icon: p.icon ?? null,
        price: p.price,
        rentBase: p.rentBase,
        rent1House: p.rent1House,
        rent2Houses: p.rent2Houses,
        rent3Houses: p.rent3Houses,
        rent4Houses: p.rent4Houses,
        rentHotel: p.rentHotel,
        housePrice: p.housePrice,
        hotelPrice: p.hotelPrice,
        mortgageValue: p.mortgageValue,
        boardIndex: p.boardIndex,
      },
    });
  }

  const propertyMap = await prisma.propertyTemplate.findMany();
  const propertyIdByName = new Map(propertyMap.map((p) => [p.name, p.id] as const));

  type TemplateSeed = {
    name: string;
    direction: TransactionDirection;
    defaultAmount?: number;
    description?: string;
    code: TransactionKind;
    propertyName?: string;
  };

  // Minimal, production-friendly templates (amounts are optional; can be overridden).
  const templates: TemplateSeed[] = [
    {
      name: "Tambah saldo (Bank memberi)",
      direction: TransactionDirection.CREDIT,
      defaultAmount: 200,
      description: "Contoh: lewat GO, bonus, hadiah.",
      code: TransactionKind.BALANCE_UPDATE,
    },
    {
      name: "Kurangi saldo (Bank menerima)",
      direction: TransactionDirection.DEBIT,
      defaultAmount: 200,
      description: "Contoh: denda, pembayaran ke bank.",
      code: TransactionKind.BALANCE_UPDATE,
    },
    {
      name: "Transfer antar pemain",
      direction: TransactionDirection.TRANSFER,
      defaultAmount: 50,
      description: "Transfer dari pemain A ke pemain B.",
      code: TransactionKind.TRANSFER,
    },
    {
      name: "Beli Properti",
      direction: TransactionDirection.DEBIT,
      defaultAmount: 100,
      description: "Bayar ke bank untuk membeli properti.",
      code: TransactionKind.BUY_PROPERTY,
    },
    {
      name: "Bayar Sewa",
      direction: TransactionDirection.TRANSFER,
      defaultAmount: 25,
      description: "Bayar sewa ke pemilik properti.",
      code: TransactionKind.PAY_RENT,
    },
    {
      name: "Hipotik Properti (Bank memberi uang)",
      direction: TransactionDirection.CREDIT,
      defaultAmount: 50,
      description: "Bank membayar hipotik ke pemain.",
      code: TransactionKind.MORTGAGE_PROPERTY,
    },
    {
      name: "Dana Umum (contoh)",
      direction: TransactionDirection.CREDIT,
      defaultAmount: 50,
      description: "Tarik kartu Dana Umum.",
      code: TransactionKind.COMMUNITY_CHEST,
    },
    {
      name: "Kesempatan (contoh)",
      direction: TransactionDirection.CREDIT,
      defaultAmount: 50,
      description: "Tarik kartu Kesempatan.",
      code: TransactionKind.CHANCE,
    },
    {
      name: "Pajak",
      direction: TransactionDirection.DEBIT,
      defaultAmount: 100,
      description: "Bayar pajak ke bank.",
      code: TransactionKind.TAX,
    },
    {
      name: "Pajak Istimewa",
      direction: TransactionDirection.DEBIT,
      defaultAmount: 200,
      description: "Pajak istimewa ke bank.",
      code: TransactionKind.TAX,
    },
  ];

  for (const tpl of templates) {
    const transactionTypeId = idByCode.get(tpl.code);
    if (!transactionTypeId) continue;

    const propertyTemplateId = tpl.propertyName
      ? (propertyIdByName.get(tpl.propertyName) ?? null)
      : null;

    await prisma.transactionTemplate.upsert({
      where: { name: tpl.name },
      update: {
        direction: tpl.direction,
        defaultAmount: tpl.defaultAmount,
        description: tpl.description,
        transactionTypeId,
        propertyTemplateId,
      },
      create: {
        name: tpl.name,
        direction: tpl.direction,
        defaultAmount: tpl.defaultAmount,
        description: tpl.description,
        transactionTypeId,
        propertyTemplateId,
      },
    });
  }

  // Create per-property templates so user can pick specific property in UI.
  const buyTypeId = idByCode.get(TransactionKind.BUY_PROPERTY);
  const rentTypeId = idByCode.get(TransactionKind.PAY_RENT);
  const mortgageTypeId = idByCode.get(TransactionKind.MORTGAGE_PROPERTY);

  for (const p of propertySeedJson) {
    const kind = (p.kind ?? "RESIDENTIAL") as PropertyKind;
    const propertyTemplateId = propertyIdByName.get(p.name) ?? null;
    if (!propertyTemplateId) continue;

    if (buyTypeId) {
      await prisma.transactionTemplate.upsert({
        where: { name: `Beli Properti — ${p.name}` },
        update: {
          direction: TransactionDirection.DEBIT,
          defaultAmount: p.price,
          description: `Bayar ke bank untuk membeli ${p.name}.`,
          transactionTypeId: buyTypeId,
          propertyTemplateId,
        },
        create: {
          name: `Beli Properti — ${p.name}`,
          direction: TransactionDirection.DEBIT,
          defaultAmount: p.price,
          description: `Bayar ke bank untuk membeli ${p.name}.`,
          transactionTypeId: buyTypeId,
          propertyTemplateId,
        },
      });
    }

    if (rentTypeId) {
      if (kind === "RESIDENTIAL") {
        const rentRows = [
          { key: "dasar", label: "dasar", amount: p.rentBase },
          { key: "1 rumah", label: "1 rumah", amount: p.rent1House },
          { key: "2 rumah", label: "2 rumah", amount: p.rent2Houses },
          { key: "3 rumah", label: "3 rumah", amount: p.rent3Houses },
          { key: "4 rumah", label: "4 rumah", amount: p.rent4Houses },
          { key: "hotel", label: "hotel", amount: p.rentHotel },
        ] as const;

        for (const r of rentRows) {
          await prisma.transactionTemplate.upsert({
            where: { name: `Bayar Sewa (${r.label}) — ${p.name}` },
            update: {
              direction: TransactionDirection.TRANSFER,
              defaultAmount: r.amount,
              description: `Bayar sewa (${r.label}) untuk ${p.name}.`,
              transactionTypeId: rentTypeId,
              propertyTemplateId,
            },
            create: {
              name: `Bayar Sewa (${r.label}) — ${p.name}`,
              direction: TransactionDirection.TRANSFER,
              defaultAmount: r.amount,
              description: `Bayar sewa (${r.label}) untuk ${p.name}.`,
              transactionTypeId: rentTypeId,
              propertyTemplateId,
            },
          });
        }
      } else if (kind === "TRANSPORT") {
        const tiers = [
          { label: "1 transport", amount: p.rentBase },
          { label: "2 transport", amount: p.rent1House },
          { label: "3 transport", amount: p.rent2Houses },
          { label: "4 transport", amount: p.rent3Houses },
        ] as const;
        for (const t of tiers) {
          if (!t.amount || t.amount <= 0) continue;
          await prisma.transactionTemplate.upsert({
            where: { name: `Bayar Sewa (${t.label}) — ${p.name}` },
            update: {
              direction: TransactionDirection.TRANSFER,
              defaultAmount: t.amount,
              description: `Bayar sewa (${t.label}) untuk ${p.name}.`,
              transactionTypeId: rentTypeId,
              propertyTemplateId,
            },
            create: {
              name: `Bayar Sewa (${t.label}) — ${p.name}`,
              direction: TransactionDirection.TRANSFER,
              defaultAmount: t.amount,
              description: `Bayar sewa (${t.label}) untuk ${p.name}.`,
              transactionTypeId: rentTypeId,
              propertyTemplateId,
            },
          });
        }
      } else if (kind === "UTILITY") {
        const tiers = [
          { label: "1 util", amount: p.rentBase },
          { label: "2 util", amount: p.rent1House },
        ] as const;
        for (const t of tiers) {
          if (!t.amount || t.amount <= 0) continue;
          await prisma.transactionTemplate.upsert({
            where: { name: `Bayar Utilitas (${t.label}) — ${p.name}` },
            update: {
              direction: TransactionDirection.TRANSFER,
              defaultAmount: t.amount,
              description: `Bayar utilitas (${t.label}) untuk ${p.name}.`,
              transactionTypeId: rentTypeId,
              propertyTemplateId,
            },
            create: {
              name: `Bayar Utilitas (${t.label}) — ${p.name}`,
              direction: TransactionDirection.TRANSFER,
              defaultAmount: t.amount,
              description: `Bayar utilitas (${t.label}) untuk ${p.name}.`,
              transactionTypeId: rentTypeId,
              propertyTemplateId,
            },
          });
        }
      }
    }

    if (mortgageTypeId) {
      await prisma.transactionTemplate.upsert({
        where: { name: `Hipotik — ${p.name}` },
        update: {
          direction: TransactionDirection.CREDIT,
          defaultAmount: p.mortgageValue,
          description: `Bank membayar hipotik untuk ${p.name}.`,
          transactionTypeId: mortgageTypeId,
          propertyTemplateId,
        },
        create: {
          name: `Hipotik — ${p.name}`,
          direction: TransactionDirection.CREDIT,
          defaultAmount: p.mortgageValue,
          description: `Bank membayar hipotik untuk ${p.name}.`,
          transactionTypeId: mortgageTypeId,
          propertyTemplateId,
        },
      });

      await prisma.transactionTemplate.upsert({
        where: { name: `Tebus Hipotik — ${p.name}` },
        update: {
          direction: TransactionDirection.DEBIT,
          defaultAmount: p.mortgageValue,
          description: `Pemain membayar ke bank untuk menebus hipotik ${p.name}.`,
          transactionTypeId: mortgageTypeId,
          propertyTemplateId,
        },
        create: {
          name: `Tebus Hipotik — ${p.name}`,
          direction: TransactionDirection.DEBIT,
          defaultAmount: p.mortgageValue,
          description: `Pemain membayar ke bank untuk menebus hipotik ${p.name}.`,
          transactionTypeId: mortgageTypeId,
          propertyTemplateId,
        },
      });
    }
  }

  // eslint-disable-next-line no-console
  console.log("Seeded transaction types & templates");
}

async function main() {
  await upsertAdminUser();
  await upsertTransactionTypesAndTemplates();
}

main()
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
