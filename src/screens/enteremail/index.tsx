import { AppleIcon, GoogleIcon } from "@/assets/svg";
import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { Row } from "@/components/Row";
import { Spacer } from "@/components/Spacer";
import { globalstyles } from "@/src/styles/globalstyles";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/MaterialIcons";

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

export const EnterEmail = () => {
  const { height } = Dimensions.get("screen");
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  const router = useRouter();
  const handleEmailOtp = () => {
    router.push({ pathname: "/(auth)/enter-otp", params: { isEmail: true } });
    // router.replace(`/(auth)/${updatedUserData.email}/verify-otp`);
  };
  const handleClickEmail = () => {};
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
                <Text style={styles.tagAccessControlText}>step 01</Text>
              </MotiView>
              <Spacer marginTop={10} />
              <MotiView
                from={{ translateX: -50, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ delay: 400, duration: 500 }}
              >
                <Text
                  style={[globalstyles.description, { fontSize: RFValue(22) }]}
                >
                  What’s your email?
                </Text>
              </MotiView>
              <Spacer marginTop={50} />
              {/* <View style={{ width:'100%',borderWidth:1,borderColor:'red' }}> */}

              <Input
                icon={<EmailIcon />}
                placeholder="Enter your email"
                keyboardType="email-address"
              />
              {/* </View> */}
              <Text
                style={{
                  fontSize: RFValue(11),
                  color: "#8C919E",
                  marginTop: 10,
                }}
              >
                No spam. Just a quick verification
              </Text>
            </MotiView>
            <MotiView
              style={{ gap: 10 }}
              from={{ translateY: 50, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 600, duration: 500 }}
            >
              <Text
                style={{
                  width: "80%",
                  marginHorizontal: "auto",
                  fontSize: RFValue(12),
                  color: "#8C919E",
                  marginTop: 10,
                  textAlign: "center",
                }}
              >
                By tapping Continue, you are agreeing to our
                <Text style={{ fontWeight: "bold" }}>
                  {" "}
                  Terms of Service
                </Text>{" "}
                and <Text style={{ fontWeight: "bold" }}>Privacy Policy</Text>
              </Text>

              <LabelButton
                title="Continue"
                handleClick={handleEmailOtp}
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
