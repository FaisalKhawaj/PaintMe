import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable } from "react-native";
import * as Haptics from "expo-haptics";

export const HeaderRoundedBack = () => {
  return (
    <Pressable
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        router.back();
      }}
      style={{
        backgroundColor: "#242424",
        width: 45,
        height: 45,
        overflow: "visible",
        zIndex: 100,
        borderRadius: 80,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons name="arrow-back" size={25} color={"#fff"} />
    </Pressable>
  );
};
