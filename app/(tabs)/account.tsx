import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function account() {
    return (
        <SafeAreaView>
            <Text>Account!</Text>
            <Link href={"/accountInfo"}>
                <Text>Take to ACcount page!</Text>
            </Link>
        </SafeAreaView>
    )
}