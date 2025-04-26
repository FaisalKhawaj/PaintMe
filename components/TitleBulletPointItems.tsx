import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { fonts } from "@/hooks/useCacheResources";

type TitleBulletPointItemsProps = {
  title: string;
  data: string[];
};

export const TitleBulletPointItems: React.FC<TitleBulletPointItemsProps> = ({
  title,
  data,
}) => {
  return (
    <View>
      <Text style={styles.subtitle}>{title}</Text>
      {data?.map((item: string, index: number) => {
        return (
          <View
            key={index}
            style={{ flexDirection: "row", paddingHorizontal: 20 }}
          >
            <Text style={styles.subtitle}>• {"  "}</Text>
            <Text style={styles.subtitle}>{item}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: RFValue(16),
    color: "#242424",
    fontFamily: fonts.primary.medium,
  },
});
