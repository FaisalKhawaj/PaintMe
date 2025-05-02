import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { fonts } from "@/hooks/useCacheResources";
import * as SVGs from "../../../../assets/svg";
import * as Haptics from "expo-haptics";

type PaymentItemType = {
  title: string;
  subtitle: string;
  icon: string;
};

export const PaymentItem: React.FC<PaymentItemType> = ({
  title,
  subtitle,
  icon = "MasterCIcon",
}) => {
  const Icon = SVGs[icon as keyof typeof SVGs];

  return (
    <Pressable
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }}
      style={styles.mainWrap}
    >
      <Icon />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainWrap: {
    gap: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
    height: 70,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
  },
  title: {
    fontSize: RFValue(16),
    fontFamily: fonts.primary.medium,
    color: "#242424",
    lineHeight: RFValue(17),
  },
  subtitle: {
    fontSize: RFValue(12),
    lineHeight: RFValue(13),
    fontFamily: fonts.primary.medium,
    color: "#8C919E",
  },
});
