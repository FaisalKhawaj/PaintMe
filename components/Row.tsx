import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

type RowProps = {
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline";
  display?: "flex" | "none";
  flex?: number;
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  gap?: number; // Optional gap between child elements
  style?: StyleProp<ViewStyle>; // To allow additional custom styles
  children: React.ReactNode;
  background?: string | any;
};

export const Row: React.FC<RowProps> = ({
  alignItems = "stretch",
  justifyContent = "flex-start",
  alignSelf = "auto",
  display = "flex",
  flex,
  flexWrap = "nowrap",
  gap,
  style,
  children,
  background,
  ...props
}) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems,
          justifyContent,
          alignSelf,
          display,
          flex,
          flexWrap,
          gap,
          backgroundColor: background,
        },
        style, // Allow additional styles to be passed
        { ...props },
      ]}
    >
      {children}
    </View>
  );
};
