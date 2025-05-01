import React, { useState } from "react";
import { MotiView } from "moti";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet } from "react-native";
import { fonts } from "@/hooks/useCacheResources";
import { router } from "expo-router";

export const EditProfile = () => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleConfirm = () => {
    router.push("/(main)/tabs");
  };

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: "#fff" }}>
      <MotiView
        from={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 600 }}
        style={styles.mainView}
      ></MotiView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexGrow: 1,
    backgroundColor: "#fff",
    gap: 10,
    padding: 10,
  },
  imageStyle: {
    borderRadius: 40,
    width: "100%",
    justifyContent: "space-between",
  },
  img: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
  },
  username: {
    color: "#fff",
    textAlign: "center",
    fontFamily: fonts.primary.semibold,
    fontSize: RFValue(18),
    marginBottom: 15,
  },
  bottomMainRowWrap: {
    flex: 1,
    width: "100%",
    height: "100%",
    gap: 10,
    flexDirection: "row",
  },
  bottomLeftButton: {
    flex: 1,
    borderRadius: 40,
    backgroundColor: "#F4F4F4",
    gap: 5,
    padding: 20,
    justifyContent: "flex-end",
  },
  bottomRightLgButton: {
    flex: 0.7,
    gap: 5,
    padding: 20,
    borderRadius: 40,
    justifyContent: "center",
    backgroundColor: "#F4F4F4",
  },
});
