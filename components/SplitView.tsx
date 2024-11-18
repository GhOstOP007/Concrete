import { StyleSheet, View } from "react-native";
import { ThemedView } from "./ThemedView";
import { FlatList } from "react-native-gesture-handler";
import { Wallpaper } from "@/hooks/useWallpapers";
import ImageCard from "./ImageCard";
import { useState } from "react";
import { DownloadClick } from "./BottomSheet";

export default function ({
  wallpapers,
  onScroll,
}: {
  wallpapers: Wallpaper[];
  onScroll: (yOffset: number) => void;
}) {
  const [selectedWall, setSelectedWall] = useState<null | Wallpaper>(null);
  return (
    <>
      <FlatList
      onScroll={(e)=>{
        let yOffset=e.nativeEvent.contentOffset.y/1;
        onScroll?.(yOffset);
      }}
        data={wallpapers
          .map((_, index) =>
            index % 2 === 0 ? [wallpapers[index], wallpapers[index + 1]] : null
          )
          .filter(Boolean)}
        renderItem={({ item: [first, second] }) => (
          <ThemedView style={styles.container}>
            <ThemedView style={styles.innerContainer}>
              {first && (
                <View style={styles.imageContainer}>
                  <ImageCard
                    wallpaper={first}
                    onPress={() => {
                      setSelectedWall(first);
                    }}
                  />
                </View>
              )}
            </ThemedView>
            <ThemedView style={styles.innerContainer}>
              {second && (
                <View style={styles.imageContainer}>
                  <ImageCard
                    wallpaper={second}
                    onPress={() => {
                      setSelectedWall(second);
                    }}
                  />
                </View>
              )}
            </ThemedView>
          </ThemedView>
        )}
        keyExtractor={(item) => item[0]?.name || Math.random().toString()}
      />
      {selectedWall && (
        <DownloadClick
          wallpaper={selectedWall}
          onClose={() => setSelectedWall(null)}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 4,
  },
  imageContainer: {
    paddingVertical: 10,
  },
});
