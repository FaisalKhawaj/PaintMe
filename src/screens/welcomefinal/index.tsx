import { AppleIcon, GoogleIcon } from "@/assets/svg";
import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { Row } from "@/components/Row";
import { Spacer } from "@/components/Spacer";
import { globalstyles } from "@/src/styles/globalstyles";
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { MotiView } from "moti";
import { useRef, useState } from "react";
import PhoneInput from "react-native-phone-number-input";
import { router } from "expo-router";
import { OtpInput } from "react-native-otp-entry";

export const WelcomeFinal = () => {
  const { height } = Dimensions.get("screen");
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  const handlePhone = () => {
    router.replace("/(auth)/enter-otp");
  };
  const handleSplash = () => {
    router.replace("/(auth)/splash");
  };

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
                <Image
                  style={{
                    alignSelf: "center",
                    marginBottom: 20,
                  }}
                  source={require("../../../assets/images/heart.png")}
                />
                <MotiView
                  style={styles.tagAccessControl}
                  from={{ scale: 0, rotate: "10deg" }}
                  animate={{ scale: 1, rotate: "0deg" }}
                  transition={{ delay: 300, type: "spring" }}
                >
                  <Text style={styles.tagAccessControlText}>hurray!!</Text>
                </MotiView>
                <Spacer marginTop={10} />
                <MotiView
                  from={{ translateX: -50, opacity: 0 }}
                  animate={{ translateX: 0, opacity: 1 }}
                  transition={{ delay: 400, duration: 500 }}
                >
                  <Text style={[globalstyles.description, { fontSize: 26 }]}>
                    Welcome to Pixura.
                  </Text>
                </MotiView>
                <Spacer marginTop={20} />
                <LabelButton
                  title="Get Cracking ✨"
                  handleClick={handleSplash}
                  variation={ButtonVariation.default}
                  // disabled={value === ""}
                />
              </MotiView>
            </MotiView>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
