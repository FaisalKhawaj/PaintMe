import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { Spacer } from "@/components/Spacer";
import { globalstyles } from "@/src/styles/globalstyles";
import { RFValue } from "react-native-responsive-fontsize";

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { MotiView } from "moti";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { EmailIcon } from "@/assets/svg/EmailIcon";
import { useValidations } from "@/src/validations/useValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormInput from "@/components/FormInput";

export const EnterEmail = () => {
  const { createEmail } = useValidations();
  const router = useRouter();

  const {
    handleSubmit,
    control,

    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(createEmail),
    mode: "onChange",
  });
  const handleEmailOtp = () => {
    router.replace({
      pathname: "/(auth)/enter-otp",
      params: { isEmail: true },
    });
    // router.replace(`/(auth)/${updatedUserData.email}/verify-otp`);
  };

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showListener = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    const hideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);
  console.log("isValid", isValid);
  const handleClickEmail = () => {};
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView edges={["bottom"]} style={globalstyles.mainWrap}>
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

              <FormInput
                control={control}
                name="email"
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
              style={{ gap: 10, bottom: !isKeyboardVisible ? 20 : 0 }}
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
                handleClick={handleSubmit(handleEmailOtp)}
                variation={
                  isValid ? ButtonVariation.default : ButtonVariation.disabled
                }
                disabled={!isValid ? true : false}
              />
            </MotiView>
          </MotiView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
