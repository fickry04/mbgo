import { prisma } from "@/app/lib/prisma";
import { requireSession } from "@/app/lib/require-session";
import { PropertyTemplatesGrid } from "./ui";

export default async function PropertyTemplatesPage() {
  await requireSession();

  const templates = await prisma.propertyTemplate.findMany({
    orderBy: [{ boardIndex: "asc" }, { name: "asc" }],
    include: {
      templates: {
        select: {
          id: true,
          name: true,
          direction: true,
          defaultAmount: true,
          transactionType: { select: { code: true, label: true } },
        },
        orderBy: { name: "asc" },
      },
    },
  });

  const forUi = templates.map((t) => ({
    id: t.id,
    name: t.name,
    propertyGroup: t.propertyGroup,
    kind: t.kind,
    propertySet: t.propertySet,
    country: t.country,
    landmark: t.landmark,
    icon: t.icon,
    price: t.price,
    rentBase: t.rentBase,
    rent1House: t.rent1House,
    rent2Houses: t.rent2Houses,
    rent3Houses: t.rent3Houses,
    rent4Houses: t.rent4Houses,
    rentHotel: t.rentHotel,
    housePrice: t.housePrice,
    hotelPrice: t.hotelPrice,
    mortgageValue: t.mortgageValue,
    txTemplates: t.templates.map((x) => ({
      id: x.id,
      name: x.name,
      direction: x.direction,
      defaultAmount: x.defaultAmount,
      typeCode: x.transactionType.code,
      typeLabel: x.transactionType.label,
    })),
  }));

  return <PropertyTemplatesGrid templates={forUi} />;
}
