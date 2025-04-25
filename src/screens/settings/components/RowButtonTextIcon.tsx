import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { fonts } from "@/hooks/useCacheResources";
import * as SVGs from "../../../../assets/svg";

type RowButtonTextIconProps = {
  title: string;
  icon: string;
  handlePress: () => void;
};

export const RowButtonTextIcon: React.FC<RowButtonTextIconProps> = ({
  title,
  icon = "CreditCardIcon",
  handlePress,
}) => {
  const Icon = SVGs[icon as keyof typeof SVGs];

  return (
    <Pressable onPress={handlePress} style={styles.buttonStyle}>
      <Icon />
      <Text style={styles.buttonTextStyle}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
    height: 65,
    borderRadius: 12,
    backgroundColor: "#F4F4F4",
  },
  buttonTextStyle: {
    fontSize: RFValue(16),
    fontFamily: fonts.primary.medium,
    color: "#242424",
  },
});
