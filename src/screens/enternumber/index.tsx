import { AppleIcon, GoogleIcon } from "@/assets/svg";
import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { Row } from "@/components/Row";
import { Spacer } from "@/components/Spacer";
import { globalstyles } from "@/src/styles/globalstyles";
import { Dimensions, Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, Text, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles"
import { MotiView } from "moti";
import { useRef, useState } from "react";
import PhoneInput from "react-native-phone-number-input";
import { router } from "expo-router";

export const EnterNumber = () => {
  const { height } = Dimensions.get("screen");
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  const handlePhone = () => {
    router.replace("/(auth)/enter-otp");
  };
  const handleClickEmail = () => { };
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}>
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
                <Text style={[globalstyles.description, { fontSize: 26 }]}>
                  What’s your number?
                </Text>
              </MotiView>
              <Spacer marginTop={50} />
              <PhoneInput
                ref={phoneInput}
                value={value}
                // defaultCode="DM"
                layout="first"
                defaultCode="US"
                onChangeText={(text) => {
                  setValue(text);
                }}
                containerStyle={{
                  width: '100%',
                  backgroundColor: '#EDEBEE',
                  borderRadius: 12
                }}
                textContainerStyle={{
                  paddingLeft: 4,
                  backgroundColor: '#EDEBEE',
                  borderTopRightRadius: 12,
                  borderBottomRightRadius: 12
                }}
                onChangeFormattedText={(text) => {
                  setFormattedValue(text);
                }}
                disableArrowIcon={true}
              />
              <Text style={{ fontSize: 11, color: '#8C919E', marginTop: 10 }}>No spam. Just a quick verification</Text>

            </MotiView>
            <MotiView
              style={{ gap: 10 }}
              from={{ translateY: 50, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 600, duration: 500 }}
            >
              <Text style={{ width: '80%', marginHorizontal: 'auto', fontSize: 12, color: '#8C919E', marginTop: 10, textAlign: 'center' }}>
                By tapping Continue, you are agreeing to our
                <Text style={{ fontWeight: 'bold' }}> Terms of Service</Text> and <Text style={{ fontWeight: 'bold' }}>Privacy Policy</Text>
              </Text>

              <LabelButton
                title="Continue"
                handleClick={handlePhone}
                variation={ButtonVariation.default}
                disabled={value === ""}
              />

            </MotiView>
          </MotiView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
