import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { fonts } from "@/hooks/useCacheResources";

type HeaderTitleProps = {
  title: string;
};

export const HeaderTitle: React.FC<HeaderTitleProps> = ({ title }) => {
  return (
    <View style={{ backgroundColor: "#fff", paddingVertical: 10 }}>
      <Text style={[styles.tagText, {}]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tagText: {
    color: "#2B2D42",
    fontSize: 18,
    fontFamily: fonts.primary.semibold,
  },
});
