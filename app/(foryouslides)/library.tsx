import SplitView from "@/components/SplitView";
import { useLibraryWallpapers } from "@/hooks/useWallpapers";
import { Text, View } from "react-native";

export default function Library() {
  const wallpapers = useLibraryWallpapers();
  return (
    <View style={{flex:1}}>
      <SplitView wallpapers={wallpapers}/>
    </View>
  );
}
