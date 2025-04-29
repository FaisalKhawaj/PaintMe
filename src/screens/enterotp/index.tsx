import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { MotiView } from "moti";
import { Spacer } from "@/components/Spacer";
import { globalstyles } from "@/src/styles/globalstyles";
import { styles } from "./styles";
import { OtpInput } from "react-native-otp-entry";
import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { router, useLocalSearchParams } from "expo-router";
import { useValidations } from "@/src/validations/useValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CustomOtpInput } from "@/components/CustomOtpInput";

export const EnterOtp = () => {
  const { isEmail = false } = useLocalSearchParams();
  const { otpSchema } = useValidations();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof otpSchema>>({
    defaultValues: { otp: "" },
    resolver: zodResolver(otpSchema),
    mode: "onChange",
  });

  const onSubmit = (data: { otp: string }) => {
    console.log("OTP Submitted: ", data.otp);
    router.replace({
      pathname: "/(auth)/welcome-final",
      params: { isEmail },
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
              contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
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
                    style={{ alignSelf: "center", marginBottom: 20 }}
                    source={
                      isEmail
                        ? require("../../../assets/images/MailScreen.png")
                        : require("../../../assets/images/heart.png")
                    }
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
                      We’ve sent a 5-digit code to your {isEmail ? "email" : "number"}
                    </Text>
                  </MotiView>
                  <Spacer marginTop={50} />
                  <CustomOtpInput
                    name="otp"
                    control={control}
                    numberOfDigits={5}
                    error={errors.otp}
                  />
                </MotiView>
              </MotiView>
            </ScrollView>

            <View style={{ padding: 16 }}>
              <LabelButton
                title="Resend Code"
                handleClick={() => {
                  Alert.alert("Code Resent");
                }}
                variation={ButtonVariation.secondary}
              />
              <Spacer marginTop={10} />
              <LabelButton
                title="Confirm Code"
                handleClick={handleSubmit(onSubmit)}
                variation={isValid ? ButtonVariation.default : ButtonVariation.disabled}
                disabled={!isValid}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
