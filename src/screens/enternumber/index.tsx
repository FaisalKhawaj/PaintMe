import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { Spacer } from "@/components/Spacer";
import { globalstyles } from "@/src/styles/globalstyles";
import { RFValue } from "react-native-responsive-fontsize";

import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { MotiView } from "moti";
import { router } from "expo-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useValidations } from "@/src/validations/useValidations";
import { z } from "zod";
import { CustomPhoneInput } from "@/components/CustomPhoneInput";

export const EnterNumber = () => {
  const { createNumber } = useValidations();
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      phoneNumber: "",
      countryCode: "US", // default country
    },
    resolver: zodResolver(createNumber),
    mode: "onChange",
  });

  type SignUpType = z.infer<typeof createNumber>;
  const handleForm = (data: SignUpType) => {
    console.log(data);
    router.replace("/(auth)/enter-otp");
  };
  const { height } = Dimensions.get("screen");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={globalstyles.fullScreen}
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
                  What’s your number?
                </Text>
              </MotiView>
              <Spacer marginTop={50} />
              <CustomPhoneInput<SignUpType>
                control={control}
                name="phoneNumber"
                error={errors.phoneNumber?.message}
                // label="Phone number"
                phonePlaceholder="Enter your phone number"
                containerStyle={{ marginBottom: 20 }}
                rules={{
                  countryRules: { required: "Please select a country." },
                  phoneRules: {
                    required: "Phone number is required.",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only numeric values are allowed.",
                    },
                  },
                }}
              />
              {/* <PhoneInput
                ref={phoneInput}
                value={value}
                // defaultCode="DM"
                layout="first"
                defaultCode="US"
                onChangeText={(text) => {
                  setValue(text);
                }}
                containerStyle={{
                  width: "100%",
                  backgroundColor: "#EDEBEE",
                  borderRadius: 12,
                }}
                textContainerStyle={{
                  paddingLeft: 4,
                  flex: 1,
                  backgroundColor: "#EDEBEE",
                  borderTopRightRadius: 12,
                  borderBottomRightRadius: 12,
                }}
                onChangeFormattedText={(text) => {
                  setFormattedValue(text);
                }}
                disableArrowIcon={true}
              /> */}
              <Text
                style={{
                  fontSize: RFValue(11),
                  color: "#8C919E",
                  // marginTop: 10,
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
                handleClick={handleSubmit(handleForm)}
                variation={
                  isValid ? ButtonVariation.default : ButtonVariation.disabled
                }
                disabled={!isValid}
              />
              <Spacer marginBottom={Platform.OS === 'ios' ? 0 : 10} />
            </MotiView>
          </MotiView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
