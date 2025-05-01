import { Platform, SafeAreaView, View } from "react-native";

export const Container = Platform.OS === "android" ? SafeAreaView : View;
