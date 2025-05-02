import React from "react";
import {
  StyleSheet,
  Pressable,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";
import { fonts } from "@/hooks/useCacheResources";
import * as Haptics from "expo-haptics";
import { Text } from "react-native";

export enum ButtonVariation {
  default = "default",
  secondary = "secondary",
  destructive = "destructive",
  success = "success",
  transparent = "transparent",
  disabled = "disabled",
  outline = "outline",
}

type IconElement = React.ReactElement<{
  width?: number;
  height?: number;
  fill?: string;
  color?: string;
  size?: number;
}>;

type IconButtonProps = {
  title?: string;
  handleClick: () => void;
  textSize?: number;
  disabled?: boolean;
  btnWidth?: number | string;
  borderColor?: string;
  variation?: ButtonVariation;
  style?: StyleProp<ViewStyle>;
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  paddingHorizontal?: number;
  leftIcon?: IconElement | React.ReactNode;
  rightIcon?: IconElement | React.ReactNode;
  iconGap?: number;
  iconSize?: number;
  testID?: string;
  justifyBetween?: boolean; // New prop to enable space-between layout
};

export const IconButton = ({
  title,
  handleClick = () => {},
  textSize = 16,
  disabled = false,
  btnWidth = "100%",
  borderColor,
  variation = ButtonVariation.default,
  alignItems = "center",
  paddingHorizontal = 16,
  leftIcon,
  rightIcon,
  iconGap = 8,
  iconSize = 24,
  testID,
  justifyBetween = false,
}: IconButtonProps) => {
  const buttonBackgroundColor = buttonColors[variation];
  const textColor = textColors[variation];
  const hasIcons = Boolean(leftIcon || rightIcon);

  const renderIcon = (
    icon: IconElement | React.ReactNode,
    position: "left" | "right"
  ) => {
    if (!icon) return null;

    if (React.isValidElement(icon)) {
      const iconProps = {
        width: iconSize,
        height: iconSize,
        fill: textColor,
        color: textColor,
        size: iconSize,
      };

      return (
        <View
          style={[
            styles.iconContainer,
            position === "left" ? styles.leftIcon : styles.rightIcon,
            justifyBetween && styles.justifyBetweenIcon,
          ]}
        >
          {React.cloneElement(icon, iconProps)}
        </View>
      );
    }

    return (
      <View
        style={[
          styles.iconContainer,
          position === "left" ? styles.leftIcon : styles.rightIcon,
          justifyBetween && styles.justifyBetweenIcon,
        ]}
      >
        {icon}
      </View>
    );
  };

  const pressableStyle = ({ pressed }: { pressed: boolean }): ViewStyle => ({
    ...StyleSheet.flatten(styles.buttonWrapper),
    paddingHorizontal,
    alignItems,
    borderColor: borderColor ?? Colors.light.primaryButton,
    width: btnWidth,
    backgroundColor: disabled
      ? buttonColors[ButtonVariation.disabled]
      : buttonBackgroundColor,
    borderWidth: variation === ButtonVariation.outline ? 1 : 0,
    opacity: pressed ? 0.8 : 1,
  });

  return (
    <Pressable
      disabled={disabled}
      onPress={() => {
        if (!disabled) {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          handleClick();
        }
      }}
      style={pressableStyle}
      testID={testID}
    >
      {justifyBetween ? (
        // Space-between layout
        <View style={styles.justifyBetweenContainer}>
          {leftIcon && renderIcon(leftIcon, "left")}
          {title && (
            <Text
              style={[
                styles.textStyle,
                {
                  fontSize: textSize,
                  color: disabled
                    ? textColors[ButtonVariation.disabled]
                    : textColor,
                },
              ]}
            >
              {title}
            </Text>
          )}
          {rightIcon && renderIcon(rightIcon, "right")}
        </View>
      ) : (
        // Original centered layout with absolute positioned icons
        <>
          {leftIcon && renderIcon(leftIcon, "left")}
          <View style={styles.buttonContent}>
            <Text
              style={[
                styles.textStyle,
                hasIcons && styles.textWithIcons,
                {
                  fontSize: textSize,
                  color: disabled
                    ? textColors[ButtonVariation.disabled]
                    : textColor,
                },
              ]}
            >
              {title}
            </Text>
          </View>
          {rightIcon && renderIcon(rightIcon, "right")}
        </>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 12,
    paddingVertical: 14,
    minHeight: 56,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  justifyBetweenContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 26,
    paddingHorizontal: 16,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  leftIcon: {
    position: "absolute",
    left: 16,
  },
  rightIcon: {
    position: "absolute",
    right: 16,
  },
  justifyBetweenIcon: {
    position: "relative",
    left: undefined,
    right: undefined,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: fonts.primary.medium,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  textWithIcons: {
    flex: 0,
  },
});

const buttonColors: { [key in ButtonVariation]: string } = {
  [ButtonVariation.default]: "#000000",
  [ButtonVariation.secondary]: "#EDEBEE",
  [ButtonVariation.disabled]: "#D3D3D3",
  [ButtonVariation.destructive]: "rgba(255, 59, 48, 0.12)",
  [ButtonVariation.success]: "rgba(52, 199, 89, 0.12)",
  [ButtonVariation.transparent]: "transparent",
  [ButtonVariation.outline]: "transparent",
};

const textColors: { [key in ButtonVariation]: string } = {
  [ButtonVariation.default]: "#FFFFFF",
  [ButtonVariation.secondary]: "#242424",
  [ButtonVariation.disabled]: "#AEAEB2",
  [ButtonVariation.destructive]: "#FF3B30",
  [ButtonVariation.success]: "#34C759",
  [ButtonVariation.transparent]: "#242424",
  [ButtonVariation.outline]: "#000000",
};
