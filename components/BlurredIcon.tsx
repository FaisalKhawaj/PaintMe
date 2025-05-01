import { StyleSheet, TouchableOpacity, View } from "react-native";
import { BlurView } from "expo-blur";
import * as SVGs from "../assets/svg";
import { IconName } from "@/assets/svg/types";

interface BlurredIconProps {
  icon: IconName;
  handleClick: () => void;
}

export const BlurredIcon: React.FC<BlurredIconProps> = ({
  icon = "LayerIcon",
  handleClick,
}) => {
  const Icon = SVGs[icon as keyof typeof SVGs];

  return (
    <View style={styles.container}>
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
    // No position, no top, no left
  },
  blurContainer: {
    borderRadius: 100,
    overflow: "hidden",
    width: 55,
    height: 55,
  },
  backButton: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
    justifyContent: "center",
  },
});
