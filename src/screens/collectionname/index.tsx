import { AppleIcon, GoogleIcon } from "@/assets/svg";
import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { Row } from "@/components/Row";
import { Spacer } from "@/components/Spacer";
import { globalstyles } from "@/src/styles/globalstyles";
import { RFValue } from "react-native-responsive-fontsize";

import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { MotiView } from "moti";
import { useRef, useState } from "react";
import PhoneInput from "react-native-phone-number-input";
import { router, useRouter } from "expo-router";
import Input from "@/components/Input";
import { EmailIcon } from "@/assets/svg/EmailIcon";

export const CollectionName = () => {
  const { height } = Dimensions.get("screen");
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  const router = useRouter();
  const handleColorPicker = () => {
    router.push(`/color-picker`);
  };
  const handleClickEmail = () => { };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
                from={{ scale: 0, rotate: "10deg" }}
                animate={{ scale: 1, rotate: "-10deg" }}
                transition={{ delay: 300, type: "spring" }}
              >
                <Text style={styles.tagAccessControlText}>my collection</Text>
              </MotiView>
              <Spacer marginTop={10} />
              <MotiView
                from={{ translateX: -50, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ delay: 400, duration: 500 }}
              >
                <Text
                  style={globalstyles.headingText}
                >
                  Give your collection a name
                </Text>
              </MotiView>
              <Spacer marginTop={50} />
              {/* <View style={{ width:'100%',borderWidth:1,borderColor:'red' }}> */}

              <Input
                // icon={<EmailIcon />}
                placeholder="e.g The Aesthetic Arc"
                keyboardType="default"
              />
              {/* </View> */}

            </MotiView>
            <MotiView
              style={{ gap: 10 }}
              from={{ translateY: 50, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 600, duration: 500 }}
            >
              <LabelButton
                title="Continue"
                handleClick={handleColorPicker}
                variation={ButtonVariation.default}
                // disabled={value === ""}
              />
            </MotiView>
          </MotiView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
