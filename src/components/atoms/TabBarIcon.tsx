import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Poster({
  name,
  color,
}: {
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  color: string;
}) {
  return (
    <MaterialCommunityIcons
      size={24}
      style={{ marginBottom: -3 }}
      name={name}
      color={color}
    />
  );
}
