import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpapers";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

const theme = useColorScheme();
export const DownloadClick = ({
  onClose,
  wallpaper,
}: {
  wallpaper: Wallpaper;
  onClose: () => void;
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheet
      snapPoints={["95%"]}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      onClose={onClose}
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
    >
        <BottomSheetView style={styles.contentContainer}>
      <ThemedView style={{flex:1 ,borderTopLeftRadius:15, borderTopRightRadius:15}}>
          <Image style={styles.image} source={{ uri: wallpaper.url }} />
          <View style={styles.topbar}>
            <Pressable onPress={onClose}>
              <Ionicons
                name={"close"}
                size={24}
                color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
              />
            </Pressable>
            <View style={styles.rightTopbar}>
              <Ionicons
                name={"heart"}
                size={24}
                color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
              />
              <Ionicons
                name={"share"}
                size={24}
                color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
                style={{ paddingRight: 5 }}
              />
            </View>
          </View>
          <ThemedView style={styles.textContainer}>
            <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
          </ThemedView>
          <DownloadButton />
      </ThemedView>
        </BottomSheetView>
    </BottomSheet>
  );
};

function DownloadButton() {
  return (
    <Pressable
      style={{
        backgroundColor: "black",
        padding: 10,
        margin: 20,
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 10,
      }}
    >
      <Ionicons
        name={"download"}
        size={24}
        color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
        style={{ paddingRight: 5 }}
      />
      <Text
        style={{
          fontSize: 20,
          color: "white",
          fontWeight: "600",
        }}
      >
        Download
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  image: {
    height: "70%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  topbar: {
    position: "absolute",
    padding: 10,
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
  },
  rightTopbar: {
    flexDirection: "row",
    justifyContent: "center",
    gap: "5",
  },
  textContainer: {
    width: "100%",
  },
  text: {
    paddingTop: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
  },
});
