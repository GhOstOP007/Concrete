import SplitView from "@/components/SplitView";
import { ThemedView } from "@/components/ThemedView";
import { useLikedWallpapers } from "@/hooks/useWallpapers";
import { Text, View } from "react-native";

export default function Liked() {
  const wallpapers = useLikedWallpapers();
  return (
    <ThemedView style={{flex:1}}>
      <SplitView wallpapers={wallpapers}/>
    </ThemedView>
  );
}
