import ParallaxScrollView from "@/components/ParallaxScrollView";
import SplitView from "@/components/SplitView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";
import { Dimensions, Text, View } from "react-native";
import useCarousel from "@/hooks/useCarousel";
import Animated from "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ThemedText } from "@/components/ThemedText";

const HEADER_HEIGHT = 250;
const theme = useColorScheme() ?? "light";

export default function explore() {
  const wallpapers = useWallpapers();
  const width = Dimensions.get("window").width;
  const Carouselwallpapers = useCarousel();
  const [yOffset, setScrollY] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1 }}>
        <Animated.View style={{ height: Math.floor(HEADER_HEIGHT - yOffset) }}>
          <Carousel
            loop
            width={width}
            height={Math.floor(HEADER_HEIGHT - yOffset)}
            autoPlay={true}
            data={Carouselwallpapers}
            scrollAnimationDuration={1500}
            onSnapToItem={(index) => console.log("current index:", index)}
            renderItem={({ index }) => (
              <>
                <ThemedView
                  style={{
                    flex: 1,
                    justifyContent: "center",
                  }}
                >
                  <Image
                    style={{ height: HEADER_HEIGHT }}
                    source={{ uri: Carouselwallpapers[index].image }}
                  />
                </ThemedView>
                <LinearGradient
                  colors={["rgba(0,0,0,0.8)", "transparent"]}
                  style={styles.background}
                >
                  <ThemedText style={{transform:[{rotate:'180deg'}],textAlign:'center',padding:20,fontSize:30,fontStyle: 'italic'}}>{Carouselwallpapers[index].title}</ThemedText>
                </LinearGradient>
              </>
            )}
          />
        </Animated.View>
        <SplitView
          onScroll={(yOffset) => {
            setScrollY(yOffset);
          }}
          wallpapers={wallpapers}
        />
      </ThemedView>
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
    padding: 4,
  },
  imageContainer: {
    paddingVertical: 10,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
  },
  background: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: 150,
    bottom: 0,
    transform: [{ rotate: "180deg" }],
    touchAction: "none",
  },
});
