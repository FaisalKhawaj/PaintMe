import React, { Fragment, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ViewStyle,
  TextStyle,
} from "react-native";
import CountryPicker, {
  Country,
  CountryCode,
} from "react-native-country-picker-modal";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { fonts } from "@/hooks/useCacheResources";
import { RFValue } from "react-native-responsive-fontsize";
import { globalstyles } from "@/src/styles/globalstyles";

interface CountryPickerWithPhoneProps<T extends FieldValues = FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  phonePlaceholder?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  rules?: {
    countryRules?: Record<string, any>;
    phoneRules?: Record<string, any>;
  };
  error?: string;
}

export const CustomPhoneInput = <T extends FieldValues>({
  control,
  name,
  label,
  phonePlaceholder = "Enter your phone number",
  containerStyle,
  inputStyle,
  rules,
  error,
}: CountryPickerWithPhoneProps<T>) => {
  const [showCountryPicker, setShowCountryPicker] = useState<boolean>(false);
  const [selectedCountryCode, setSelectedCountryCode] =
    useState<CountryCode>("US"); // ✅ Use CountryCode type
  const [selectedCallingCode, setSelectedCallingCode] = useState<string>("1");

  return (
    <Fragment>
      <View style={[styles.wrapper, containerStyle]}>
        {label && <Text style={styles.labelText}>{label}</Text>}
        <View style={styles.inputRow}>
          {/* ✅ CountryPicker with correct types */}
          <CountryPicker
            onSelect={(country: Country) => {
              setSelectedCountryCode(country.cca2);
              setSelectedCallingCode(country.callingCode[0]);
              setShowCountryPicker(false);
            }}
            translation="common"
            visible={showCountryPicker}
            countryCode={selectedCountryCode}
            withCallingCode
            withFilter
            withFlag
            onClose={() => setShowCountryPicker(false)}
          />

          <TouchableOpacity
            style={styles.flagButton}
            onPress={() => setShowCountryPicker(true)}
          >
            <Text style={styles.flagText}>+{selectedCallingCode}</Text>
          </TouchableOpacity>

          <Controller
            control={control}
            name={name}
            rules={rules?.phoneRules}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <View style={globalstyles.fullScreen}>
                <TextInput
                  style={[
                    styles.phoneInput,
                    inputStyle,
                    error ? styles.errorContainer : {},
                  ]}
                  placeholder={phonePlaceholder}
                  keyboardType="phone-pad"
                  value={value}
                  onChangeText={onChange}
                />
              </View>
            )}
          />
        </View>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  labelText: {
    color: "#8C919E",
    marginBottom: 5,
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(14),
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EDEBEE",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 56,
    borderWidth: 1.5,
    borderColor: "#EDEBEE",
  },
  flagButton: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    height: "100%",
  },
  flagText: {
    color: "#000",
    fontSize: RFValue(14),
    fontFamily: fonts.primary.medium,
  },
  phoneInput: {
    flex: 1,
    backgroundColor: "#EDEBEE",
    borderRadius: 8,
    fontFamily: fonts.primary.medium,
    paddingHorizontal: 10,
    height: "100%",
    fontSize: RFValue(14),
    color: "#000",
  },
  errorContainer: {
    borderColor: "#FF4D4D",
  },
  errorText: {
    color: "#FF4D4D",
    fontSize: RFValue(12),
  },
});
