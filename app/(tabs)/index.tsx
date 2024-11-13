import { DownloadClick } from "@/components/BottomSheet";
import ImageCard from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { useCallback, useRef, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function explore() {
  const [selectedWall, setIsSelectedWall] = useState<null|Wallpaper>(null);
  const wallpapers = useWallpapers();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{
              uri: wallpapers[Math.floor(Math.random() * 10)].url ?? "",
            }}
          />
        }
        headerBackgroundColor={{ dark: "black", light: "white" }}
      >
        <ThemedView style={styles.container}>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_,index)=> index%2===0)}
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <ImageCard wallpaper={item} onPress={()=>{
                    setIsSelectedWall(item)
                  }}/>
                </View>
              )}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_,index)=> index%2===1)}
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <ImageCard wallpaper={item} onPress={()=>{
                    setIsSelectedWall(item)
                  }}/>
                </View>
              )}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
        </ThemedView>
      </ParallaxScrollView>
      {selectedWall && <DownloadClick wallpaper={selectedWall} onClose={()=>setIsSelectedWall(null)}/>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding:4,
  },
  imageContainer:{
    paddingVertical:10
  }
});
