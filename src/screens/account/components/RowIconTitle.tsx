import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { LogoutIcon } from "@/assets/svg";
import { fonts } from "@/hooks/useCacheResources";
import * as SVGs from "../../../../assets/svg";

type RowIconTitleProps = {
  title: string;
  icon: string;
  handlePress: () => void;
};

export const RowIconTitle: React.FC<RowIconTitleProps> = ({
  title,
  icon = "LogoutIcon",
  handlePress,
}) => {
  const Icon = SVGs[icon as keyof typeof SVGs];

  return (
    <Pressable onPress={handlePress} style={styles.buttonWrap}>
      <Icon />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonWrap: {
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
  title: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(16),
    color: "#242424",
    lineHeight: RFValue(17),
  },
});
