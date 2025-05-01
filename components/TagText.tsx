import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { fonts } from "@/hooks/useCacheResources";

type TagTextProps = {
  title: string;
  tagBgColor?: string;
  tagTextColor?: string;
  rotate?: string;
};

export const TagText: React.FC<TagTextProps> = ({
  title,
  tagBgColor = "#C8B6FF",
  tagTextColor = "#2B2D42",
  rotate = "-20deg",
}) => {
  return (
    <View
      style={[
        styles.tagContainer,
        {
          transform: [{ rotate: rotate }],
          backgroundColor: tagBgColor,
        },
      ]}
    >
      <Text
        style={[
          styles.tagText,
          {
            color: tagTextColor,
          },
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    borderRadius: 16,
    backgroundColor: "#C8B6FF",
    paddingVertical: 8,
    alignSelf: "flex-start",
    //   paddingVertical: 6,
    paddingHorizontal: 14,
    transform: [{ rotate: "-20deg" }],
  },
  tagText: {
    color: "#2B2D42",
    fontSize: 18,
    fontFamily: fonts.primary.semibold,
  },
});
