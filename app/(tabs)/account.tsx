import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { ThemedText } from "@/components/ThemedText";
import { Appearance } from "react-native";
import { ThemedView } from "@/components/ThemedView";

const theme = useColorScheme() ?? "light";
export default function account() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <Header />
      <ThemedView style={{ flex: 1 }}>
        <LoginButtons />
        <ThemeSelector />
      </ThemedView>
    </SafeAreaView>
  );
}

function ThemeSelector() {
  return (
    <View style={styles.themeMargin}>
      <ThemedText style={styles.mainText}>Settings</ThemedText>
      <ThemedText style={styles.subText}>Theme</ThemedText>
      <View style={styles.themeSelectorView}>
        <ThemeButton title="Dark" selected={false} colorScheme="dark" />
        <ThemeButton title="Light" selected={false} colorScheme="light" />
        <ThemeButton title="System" selected={false} colorScheme={null} />
      </View>
    </View>
  );
}

function ThemeButton({
  title,
  selected,
  colorScheme,
}: {
  title: string;
  selected: boolean;
  colorScheme: "light" | "dark" | null;
}) {
  return (
    <Pressable
      style={{
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        flex: 0.3,
      }}
      onPress={()=>{Appearance.setColorScheme(colorScheme)}}
    >
      <ThemedText style={{ width: "100%", textAlign: "center" }}>
        {title}
      </ThemedText>
    </Pressable>
  );
}

function LoginButtons() {
  return (
    <>
      <AuthButton
        label={"Sign in"}
        icon={
          <Ionicons
            name={"logo-google"}
            size={24}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            style={{ paddingRight: 5 }}
          />
        }
      />
      <AuthButton
        label={"Sign in"}
        icon={
          <Ionicons
            name={"logo-apple"}
            size={24}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            style={{ paddingRight: 5 }}
          />
        }
      />
    </>
  );
}

function Header() {
  return (
    <ThemedView style={styles.textContainer}>
      <ThemedText style={styles.mainText}>Concrete</ThemedText>
      <ThemedText style={styles.subText}>Sign in to save your data!</ThemedText>
    </ThemedView>
  );
}

function AuthButton({ icon, label }: { label: string; icon: any }) {
  return (
    <Pressable
      style={{
        backgroundColor: "black",
        padding: 10,
        margin: 10,
        marginHorizontal: 40,
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 10,
      }}
    >
      {icon}
      <ThemedText
        style={{
          fontSize: 20,
          color: "white",
          fontWeight: "600",
        }}
      >
        {label}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 15,
    paddingBottom: 15,

  },
  mainText: {
    fontWeight: "700",
    fontSize: 25,
    paddingLeft: 10,
  },
  subText: {
    paddingLeft: 10,
  },
  themeSelectorView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  themeMargin: {
    padding: 10,
  },
});
