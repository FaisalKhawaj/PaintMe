import { IconButton } from "@/components/IconButton";
import { Spacer } from "@/components/Spacer";
import TextArea from "@/components/TextArea";
import { fonts } from "@/hooks/useCacheResources";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { MotiView } from "moti";
import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as ImagePicker from "expo-image-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const CreateImage = () => {
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
  const handleChooseStyle = () => {
    router.push("/choose-style");
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
          {/* Tag */}
          <MotiView
            style={styles.tag}
            from={{ scale: 0, rotate: "0deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            transition={{ delay: 300, type: "spring" }}
          >
            <Text style={styles.tagTextNormal}>image creation</Text>
          </MotiView>

          {/* Add an Image Button */}
          <IconButton
            title="Add an Image"
            handleClick={pickImage}
            rightIcon={<Ionicons name="image" />}
            justifyBetween={true}
            style={styles.button}
          />

          {/* Small description */}
          <Text style={styles.descriptionText}>
            Not sure the direction to take? Add an image as a reference and
            describe edits.
          </Text>

          {/* Big Box */}
          <TextArea
            containerStyle={{ height: 286, borderRadius: 20 }}
            placeholder="What do you imagine?"
            keyboardType="default"
            isCenter
            multiline
          />
          <Spacer marginBottom={10} marginTop={10} />
          {/* Choose Style Button */}
          <IconButton
            title="Choose Style"
            handleClick={handleChooseStyle}
            rightIcon={<Ionicons name="arrow-forward" />}
            style={styles.button}
          />

          {/* Optional: Add more content here that will be scrollable */}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tagStylesModal: {
    borderRadius: 10,
    backgroundColor: "#D1F2EB",
    alignSelf: "center",
  },
  tagTextNormal: {
    fontSize: 18,
    fontFamily: fonts.primary.semibold,
    color: "#4A4E4D",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20, // Extra padding at bottom
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 40,
  },
  tag: {
    backgroundColor: "#E5F7DF",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: "center", // Align tag to left
  },
  tagText: {
    color: "#3c6e47",
    fontWeight: "600",
    fontSize: 14,
    textTransform: "capitalize",
  },
  button: {
    width: "100%", // Make buttons full width
    marginBottom: 10,
  },
  descriptionText: {
    marginVertical: 16,
    fontSize: RFValue(12),
    fontFamily: fonts.primary.medium,
    color: "#9398A4",
    textAlign: "center",
  },
  imagineBox: {
    backgroundColor: "#f3f3f3",
    width: "100%",
    height: 180,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  imagineBoxText: {
    color: "#b0b0b0",
    fontSize: 16,
  },
});
