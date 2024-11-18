import SplitView from "@/components/SplitView";
import { ThemedView } from "@/components/ThemedView";
import { useSuggestedWallpapers } from "@/hooks/useWallpapers";
import { Text, View } from "react-native";

export default function Suggested() {
  const wallpapers = useSuggestedWallpapers();
  return (
    <ThemedView style={{flex:1}}>
      <SplitView wallpapers={wallpapers}/>
    </ThemedView>
  );
}
