import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { BlurView } from "expo-blur";
import * as SVGs from "../assets/svg";
import { SVGIcon } from "@/assets/svg/types";
import { IconName } from "@/assets/svg/types";

interface BlurredRoundedIconProps {
  icon: IconName; // The icon prop should now be of type IconName
  handleClick: () => void;
  position: "absolute" | "relative";
}

export const BlurredRoundedIcon: React.FC<BlurredRoundedIconProps> = ({
  icon = "LayerIcon",
  handleClick,
  position = "relative",
}) => {
  const Icon = SVGs[icon as keyof typeof SVGs]; // TypeScript automatically knows the type of this component

  return (
    <View
      style={[
        styles.container,
        {
          position: position,
        },
      ]}
    >
      <BlurView intensity={40} style={styles.blurContainer} tint="light">
        <TouchableOpacity style={styles.backButton} onPress={handleClick}>
          <Icon />
        </TouchableOpacity>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 30,
    // backgroundColor: "transparent",
    left: 30,
    zIndex: 100,
  },
  blurContainer: {
    borderRadius: 100,
    overflow: "hidden", // Ensures the blur doesn't extend outside the border radius
    width: 55,
    height: 55,
  },
  backButton: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
    // backgroundColor: "transparent",
    justifyContent: "center",
  },
});
