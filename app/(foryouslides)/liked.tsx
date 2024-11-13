import SplitView from "@/components/SplitView";
import { useLikedWallpapers } from "@/hooks/useWallpapers";
import { Text, View } from "react-native";

export default function Liked() {
  const wallpapers = useLikedWallpapers();
  return (
    <View style={{flex:1}}>
      <SplitView wallpapers={wallpapers}/>
    </View>
  );
}
