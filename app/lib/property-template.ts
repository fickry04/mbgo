export type PropertyGroup =
  | "BROWN"
  | "LIGHT_BLUE"
  | "PINK"
  | "ORANGE"
  | "RED"
  | "YELLOW"
  | "GREEN"
  | "DARK_BLUE";

export type PropertyKind = "RESIDENTIAL" | "TRANSPORT" | "UTILITY";

export type PropertyTemplateCardData = {
  id: string;
  name: string;
  propertyGroup: PropertyGroup;
  kind: PropertyKind;
  propertySet: string;
  country: string;
  landmark: string;
  icon: string | null;
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
};

type MantineColorName =
  | "red"
  | "pink"
  | "grape"
  | "violet"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "green"
  | "lime"
  | "yellow"
  | "orange"
  | "gray"
  | "dark";

export const propertyGroupMeta: Record<
  PropertyGroup,
  { label: string; mantineColor: MantineColorName; headerShade: number }
> = {
  BROWN: { label: "Coklat", mantineColor: "orange", headerShade: 9 },
  LIGHT_BLUE: { label: "Biru muda", mantineColor: "cyan", headerShade: 6 },
  PINK: { label: "Pink", mantineColor: "pink", headerShade: 6 },
  ORANGE: { label: "Oranye", mantineColor: "orange", headerShade: 6 },
  RED: { label: "Merah", mantineColor: "red", headerShade: 6 },
  YELLOW: { label: "Kuning", mantineColor: "yellow", headerShade: 6 },
  GREEN: { label: "Hijau", mantineColor: "green", headerShade: 6 },
  DARK_BLUE: { label: "Biru tua", mantineColor: "blue", headerShade: 9 },
};

export function headerBgVar(group: PropertyGroup) {
  const meta = propertyGroupMeta[group];
  return `var(--mantine-color-${meta.mantineColor}-${meta.headerShade})`;
}

export function headerTextVar(group: PropertyGroup) {
  const meta = propertyGroupMeta[group];
  // Use contrasting text for very dark shades.
  if (meta.headerShade >= 8) return "var(--mantine-color-white)";
  return "var(--mantine-color-white)";
}
