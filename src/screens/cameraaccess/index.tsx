import { Colors } from "@/constants/Colors";
import { fonts } from "@/hooks/useCacheResources";
import { SafeAreaView, Text, Image, Alert } from "react-native";
import { Camera } from "expo-camera";

import { styles } from "./styles";
import { Spacer } from "@/components/Spacer";
import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { MotiView } from "moti";
import { useState } from "react";
import { globalstyles } from "@/src/styles/globalstyles";
import { router } from "expo-router";

export const CameraAccess = () => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);

  const handleClickAllow = async () => {
    try {
      const { status } = await Camera.requestCameraPermissionsAsync();

      if (status === "granted") {
        // Alert.alert("Permission Granted", "You can now access the camera.");
        setHasPermission(true);
        router.replace("/(auth)/welcome");
        // Navigate to camera or perform desired action
      } else {
        Alert.alert(
          "Permission Denied",
          "You have denied camera access. Please enable it from settings."
        );
        setHasPermission(false);
      }
    } catch (error) {
      console.error("Permission Request Error:", error);
    }
  };

  const handleClickSkip = () => {};

  return (
    <SafeAreaView style={globalstyles.mainWrap}>
      <MotiView
        style={globalstyles.innerWrap}
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 200, duration: 500 }}
      >
        <MotiView
          style={{ flex: 1, justifyContent: "center" }}
          from={{ translateY: -50, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 200, duration: 500 }}
        >
          <MotiView
            style={styles.tagAccessControl}
            from={{ scale: 0, rotate: "0deg" }}
            animate={{ scale: 1, rotate: "10deg" }}
            transition={{ delay: 300, type: "spring" }}
          >
            <Text style={styles.tagAccessControlText}>access control</Text>
          </MotiView>
          <Spacer marginTop={10} />
          <MotiView
            from={{ translateX: -50, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ delay: 400, duration: 500 }}
          >
            <Text style={globalstyles.description}>
              Allow access to camera to import and save photos.
            </Text>
          </MotiView>
          <Spacer marginTop={50} />
          <MotiView
            from={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 500, duration: 500 }}
          >
            <Image
              style={{
                alignSelf: "center",
              }}
              source={require("../../../assets/images/doodle.png")}
            />
          </MotiView>
        </MotiView>
        <MotiView
          style={{ gap: 10 }}
          from={{ translateY: 50, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 600, duration: 500 }}
        >
          <LabelButton
            title="Allow"
            handleClick={handleClickAllow}
            variation={ButtonVariation.default}
          />
          <LabelButton
            title="Skip for later"
            handleClick={handleClickSkip}
            variation={ButtonVariation.transparent}
          />
        </MotiView>
      </MotiView>
    </SafeAreaView>
  );
};
