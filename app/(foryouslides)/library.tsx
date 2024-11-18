import SplitView from "@/components/SplitView";
import { ThemedView } from "@/components/ThemedView";
import { useLibraryWallpapers } from "@/hooks/useWallpapers";
import { Text, View } from "react-native";

export default function Library() {
  const wallpapers = useLibraryWallpapers();
  return (
    <ThemedView style={{flex:1}}>
      <SplitView wallpapers={wallpapers}/>
    </ThemedView>
  );
}
