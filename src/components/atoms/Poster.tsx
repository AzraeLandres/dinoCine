import { Image } from "react-native";

export default function Poster({ path }: { path: string }) {
  return (
    <Image
      className="w-40 h-60 rounded-lg"
      source={{ uri: `https://image.tmdb.org/t/p/w500${path}` }}
    />
  );
}
