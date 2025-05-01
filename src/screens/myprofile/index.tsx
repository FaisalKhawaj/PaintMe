import { EmailIcon } from "@/assets/svg/EmailIcon";
import { Row } from "@/components/Row";
import { Spacer } from "@/components/Spacer";
import { globalstyles } from "@/src/styles/globalstyles";
import { MotiView } from "moti";
import { useForm } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useValidations } from "@/src/validations/useValidations";
import FormInput from "@/components/FormInput";
import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { z } from "zod";
import { router } from "expo-router";
import { CustomPhoneInput } from "@/components/CustomPhoneInput";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const MyProfile = () => {
  const { editProfileScheme } = useValidations();
  const {
    handleSubmit,
    control,

    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      bio: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(editProfileScheme),
    mode: "onChange",
  });
  type LoginType = z.infer<typeof editProfileScheme>;
  const handleForm = (data: LoginType) => {
    console.log(data);
    router.back();
  };
  console.log("isValid", isValid);
  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        extraScrollHeight={100} // Optional: space between keyboard and input
      >
        <MotiView
          from={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 600 }}
          style={[globalstyles.mainView, { padding: 30 }]}
        >
          <Row gap={10} alignItems="center">
            <FormInput
              control={control}
              name="firstName"
              label="First name"
              placeholder="Faisal"
              keyboardType="default"
              containerStyle={{ width: "50%" }}
            />

            <FormInput
              control={control}
              name="lastName"
              label="Last Name"
              placeholder="Khawaj"
              keyboardType="default"
              containerStyle={{ width: "50%" }}
            />
          </Row>
          <Spacer marginTop={10} />
          <FormInput
            control={control}
            name="email"
            icon={<EmailIcon />}
            label="Email"
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          <Spacer marginTop={10} />
          <CustomPhoneInput<LoginType>
            control={control}
            name="phoneNumber"
            error={errors.phoneNumber?.message}
            label="Phone number"
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

          <FormInput
            label="Password"
            control={control}
            name="password"
            secureTextEntry={true}
            placeholder="Your Password"
            keyboardType="default"
          />
          <Spacer marginTop={10} />

          <FormInput
            control={control}
            label="Bio"
            name="bio"
            placeholder="Your Bio"
            keyboardType="default"
          />
          <Spacer marginTop={10} />
          <LabelButton
            title="Continue"
            handleClick={handleSubmit(handleForm)}
            variation={
              isValid ? ButtonVariation.default : ButtonVariation.disabled
            }
            disabled={!isValid}
          />
        </MotiView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
