import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { Spacer } from "@/components/Spacer";
import { globalstyles } from "@/src/styles/globalstyles";
import { Dimensions, Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles"
import { MotiView } from "moti";
import { useRef, useState } from "react";
import PhoneInput from "react-native-phone-number-input";
import { router, useLocalSearchParams, useRouter } from "expo-router";
import { OtpInput } from "react-native-otp-entry";

export const EnterOtp = () => {
  const { height } = Dimensions.get("screen");
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  const { isEmail = false } = useLocalSearchParams();
  const handleOtp = () => {
    router.replace({
      pathname: "/(auth)/welcome-final",
      params: { isEmail: isEmail }
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={globalstyles.mainWrap}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View style={{ flex: 1 }}>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }} // add padding to avoid overlap
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
                      marginBottom: 20
                    }}
                    source={isEmail ? require("../../../assets/images/MailScreen.png") : require("../../../assets/images/heart.png")}
                  />
                  <MotiView
                    style={styles.tagAccessControl}
                    from={{ scale: 0, rotate: "10deg" }}
                    animate={{ scale: 1, rotate: "-10deg" }}
                    transition={{ delay: 300, type: "spring" }}
                  >
                    <Text style={styles.tagAccessControlText}>step 02</Text>
                  </MotiView>
                  <Spacer marginTop={10} />
                  <MotiView
                    from={{ translateX: -50, opacity: 0 }}
                    animate={{ translateX: 0, opacity: 1 }}
                    transition={{ delay: 400, duration: 500 }}
                  >
                    <Text style={[globalstyles.description, { fontSize: 26 }]}>
                      We’ve sent a 5-digit code to your {isEmail ? 'email' : 'number'}
                    </Text>
                  </MotiView>
                  <Spacer marginTop={50} />
                  <OtpInput
                    numberOfDigits={5}
                    focusColor="green"
                    autoFocus={false}
                    hideStick={true}
                    blurOnFilled={true}
                    disabled={false}
                    type="numeric"
                    secureTextEntry={false}
                    focusStickBlinkingDuration={500}
                    onFocus={() => console.log("Focused")}
                    onBlur={() => console.log("Blurred")}
                    onTextChange={(text) => console.log(text)}
                    onFilled={(text) => console.log(`OTP is ${text}`)}
                    textInputProps={{
                      accessibilityLabel: "One-Time Password",
                    }}
                    textProps={{
                      accessibilityRole: "text",
                      accessibilityLabel: "OTP digit",
                      allowFontScaling: false,
                    }}
                    theme={{
                      containerStyle: styles.container,
                      pinCodeContainerStyle: styles.pinCodeContainer,
                      pinCodeTextStyle: styles.pinCodeText,
                      focusStickStyle: styles.focusStick,
                      focusedPinCodeContainerStyle: styles.activePinCodeContainer,
                      placeholderTextStyle: styles.placeholderText,
                      filledPinCodeContainerStyle: styles.filledPinCodeContainer,
                      disabledPinCodeContainerStyle: styles.disabledPinCodeContainer,
                    }}
                  />
                </MotiView>
              </MotiView>
            </ScrollView>

            {/* Fixed Bottom Button */}
            <View style={{ padding: 16 }}>
              <LabelButton
                title="Resend Code"
                handleClick={() => { }}
                variation={ButtonVariation.secondary}
              />
              <Spacer marginTop={10} />
              <LabelButton
                title="Confirm Code"
                handleClick={handleOtp}
                variation={ButtonVariation.default}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );

}
