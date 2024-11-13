import { StyleSheet, View } from "react-native";
import { ThemedView } from "./ThemedView";
import { FlatList } from "react-native-gesture-handler";
import { Wallpaper } from "@/hooks/useWallpapers";
import ImageCard from "./ImageCard";
import { useState } from "react";
import { DownloadClick } from "./BottomSheet";

export default function ({ wallpapers }: { wallpapers: Wallpaper[] }) {
  const [selectedWall, setIsSelectedWall] = useState<null | Wallpaper>(null);
  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.innerContainer}>
          <FlatList
            data={wallpapers.filter((_, index) => index % 2 === 0)}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <ImageCard
                  wallpaper={item}
                  onPress={() => {
                    setIsSelectedWall(item);
                  }}
                />
              </View>
            )}
            keyExtractor={(item) => item.name}
          />
        </ThemedView>
        <ThemedView style={styles.innerContainer}>
          <FlatList
            data={wallpapers.filter((_, index) => index % 2 === 1)}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <ImageCard
                  wallpaper={item}
                  onPress={() => {
                    setIsSelectedWall(item);
                  }}
                />
              </View>
            )}
            keyExtractor={(item) => item.name}
          />
        </ThemedView>
      </ThemedView>
      {selectedWall && (
        <DownloadClick
          wallpaper={selectedWall}
          onClose={() => setIsSelectedWall(null)}
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
