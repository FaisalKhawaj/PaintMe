import { Spacer } from "@/components/Spacer";
import { globalstyles } from "@/src/styles/globalstyles";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { MotiView } from "moti";
import { useEffect, useRef, useState } from "react";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { OtpInput } from "react-native-otp-entry";
import { useAuth } from "@/src/context/AuthProvider";
import { fonts } from "@/hooks/useCacheResources";

export const ImageProgress = () => {

  useEffect(() => {
    setTimeout(() => {
      router.replace("/tabs/create/image-created");
    }, 3000)
  },[])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={globalstyles.mainWrap}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
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
                  from={{ scale: 0, rotate: "10deg" }}
                  animate={{ scale: 1, rotate: "0deg" }}
                  transition={{ delay: 300, type: "spring" }}
                >
                  <Text style={styles.tagAccessControlText}>image creation</Text>
                </MotiView>
                <Text style={styles.description}>
                  Allow access to camera to import and save photos <Text style={{ fontFamily: fonts.primary.semibold, color: 'black' }}>10 mins</Text>
                </Text>
                <Spacer marginTop={10} />
                <Image
                  style={{
                    alignSelf: "center",
                    marginBottom: 20,
                  }}
                  source={require("../../../assets/images/image-creation.png")}
                />
              </MotiView>
            </MotiView>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
