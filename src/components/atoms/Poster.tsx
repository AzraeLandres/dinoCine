import { Image } from "react-native";

export default function Poster({ path }: { path: string }) {
  return (
    <Image
      className="w-36 h-52 rounded-xl"
      source={{ uri: `https://image.tmdb.org/t/p/w500${path}` }}
    />
  );
}
