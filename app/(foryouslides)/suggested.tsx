import SplitView from "@/components/SplitView";
import { useSuggestedWallpapers } from "@/hooks/useWallpapers";
import { Text, View } from "react-native";

export default function Suggested() {
  const wallpapers = useSuggestedWallpapers();
  return (
    <View style={{flex:1}}>
      <SplitView wallpapers={wallpapers}/>
    </View>
  );
}
