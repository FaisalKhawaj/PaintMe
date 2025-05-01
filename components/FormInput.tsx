import { fonts } from "@/hooks/useCacheResources";
import React, { Fragment, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

interface InputProps<T extends FieldValues = FieldValues>
  extends TextInputProps {
  icon?: React.ReactNode; // Can be either an icon or image component
  placeholder: string;
  containerStyle?: ViewStyle; // Custom style for the container
  inputStyle?: TextStyle; // Custom style for the TextInput
  label?: string;
  name: Path<T>; // Field name for react-hook-form, now uses Path<T>
  control: Control<T>; // Control object from react-hook-form
  rules?: Record<string, any>; // Validation rules for react-hook-form
}

const FormInput = <T extends FieldValues>({
  icon,
  placeholder,
  label,
  containerStyle,
  inputStyle,
  name,
  control,
  rules,
  ...rest
}: InputProps<T>): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View style={[styles.wrapper, containerStyle]}>
      {label && <Text style={styles.labelText}>{label}</Text>}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <Fragment>
            <View
              style={[
                styles.inputContainer,
                isFocused ? styles.focusedContainer : {},
                error ? styles.errorContainer : {},
              ]}
            >
              {icon && <View style={styles.iconWrapper}>{icon}</View>}
              <TextInput
                style={[
                  styles.input,
                  inputStyle,
                  isFocused ? { backgroundColor: "white" } : {},
                ]}
                placeholder={placeholder}
                placeholderTextColor="#888"
                onFocus={() => {
                  handleFocus();
                  onBlur();
                }}
                onBlur={() => {
                  handleBlur();
                  onBlur();
                }}
                value={value}
                onChangeText={onChange}
                {...rest}
              />
            </View>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </Fragment>
        )}
      />
    </View>
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EDEBEE",
    borderRadius: 8,
    paddingHorizontal: 20,
    width: "100%",
    height: 56,
    borderWidth: 1.5, // Default border width
    borderColor: "#EDEBEE", // Default border color
  },
  focusedContainer: {
    borderColor: "#E2FE52", // Change the container border color on focus
    backgroundColor: "white",
  },
  errorContainer: {
    borderColor: "#FF4D4D", // Error border color
  },
  iconWrapper: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    color: "#000",
    backgroundColor: "#EDEBEE", // Default background color
    borderRadius: 8,
    paddingLeft: 10,
  },
  errorText: {
    color: "#FF4D4D",
    fontSize: RFValue(12),
    marginTop: 5,
  },
});

export default FormInput;
