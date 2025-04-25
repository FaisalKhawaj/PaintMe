import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";
import { fonts } from "@/hooks/useCacheResources";
import * as Haptics from "expo-haptics";

export enum ButtonVariation {
  default = "default",
  secondary = "secondary",
  destructive = "destructive",
  success = "success",
  transparent = "transparent",
}

type ButtonProps = {
  title?: string;
  handleClick: any;
  textSize?: number;
  textColor?: string | any;
  disabled?: boolean;
  btnWidth?: any;
  borderColor?: any;
  variation?: ButtonVariation;
  style?: any;
};

export const LabelButton = ({
  title,
  handleClick = () => {},
  textSize = 16,
  disabled = false,
  // btnBg = ,
  btnWidth = "100%",
  borderColor,
  variation = ButtonVariation.default,
}: ButtonProps) => {
  // const Icon = SVGs[iconName];
  let buttonBackgroundColor = disabled
    ? Colors.light.disabled
    : buttonColors[variation];

  let textColor = textColors[variation];

  return (
    <>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          handleClick();
        }}
        style={[
          styles.buttonWrapper,
          {
            borderColor: borderColor ? borderColor : Colors.light.primaryButton,
            width: btnWidth,
            backgroundColor: buttonBackgroundColor,
          },
        ]}
      >
        <ThemedText
          type="default"
          lightColor={textColor}
          style={styles.textStyle}
        >
          {title}
        </ThemedText>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 12,
    paddingVertical: 13,
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    fontFamily: fonts.primary.medium,
  },
  simpleTextStyle: {
    textAlign: "center",
    marginLeft: 10,
    color: Colors.light.background,
    fontFamily: fonts.primary.medium,
  },
  rightIconButton: {
    height: 35,
    width: 35,
    position: "absolute",
    right: 10,
    borderRadius: 12,
    backgroundColor: Colors.light.background,
    justifyContent: "center",
    alignItems: "center",
  },
  socialBtn: {
    backgroundColor: Colors.light.inputBg,
    flex: 1,
    borderRadius: 10,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

const buttonColors: { [key in ButtonVariation]: string } = {
  default: "#000000",
  secondary: "#EDEBEE",
  destructive: "red",
  success: "green",
  transparent: "transparent",
};

const textColors: { [key in ButtonVariation]: string } = {
  default: "#fff",
  secondary: "#242424",
  destructive: "red",
  success: "green",
  transparent: "#242424",
};
