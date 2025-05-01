import { styles } from "@/src/screens/enterotp/styles";
import React from "react";
import { Controller, Control, FieldError } from "react-hook-form";
import { Text, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";

type CustomOtpInputProps = {
  name: string;
  control: Control<any>;
  numberOfDigits?: number;
  label?: string;
  error?: FieldError;
};

export const CustomOtpInput = ({
  name,
  control,
  numberOfDigits = 5,
  label,
  error,
}: CustomOtpInputProps) => {
  return (
    <View>
      {label && <Text style={{ marginBottom: 8 }}>{label}</Text>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <OtpInput
            numberOfDigits={numberOfDigits}
            value={value}
            onTextChange={onChange}
            blurOnFilled={true}
            focusColor="green"
            type="numeric"
            secureTextEntry={false}
            hideStick = {false}
            autoFocus={false}
            textInputProps={{ accessibilityLabel: "One-Time Password" }}
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
        )}
      />
      {error && (
        <Text style={{ color: "red", marginTop: 10 }}>{error.message}</Text>
      )}
    </View>
  );
};
