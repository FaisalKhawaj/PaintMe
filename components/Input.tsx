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

interface InputProps extends TextInputProps {
  icon?: React.ReactNode; // Can be either an icon or image component
  placeholder: string;
  containerStyle?: ViewStyle; // Custom style for the container
  inputStyle?: TextStyle; // Custom style for the TextInput
  label?: string;
}

const Input: React.FC<InputProps> = ({
  icon,
  placeholder,
  label,
  containerStyle,
  inputStyle,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <Fragment>
      {label && <Text style={styles.labelText}>{label}</Text>}
      <View
        style={[
          styles.inputContainer,
          isFocused ? styles.focusedContainer : {},
          containerStyle,
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
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest} // Spread the other props to the TextInput
        />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  labelText: {
    color: "#8C919E",
    marginTop: 5,
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
    backgroundColor: "white", // Change the container border color on focus
  },
  iconWrapper: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#000",
    backgroundColor: "#EDEBEE", // Default background color
    borderRadius: 8,
    paddingLeft: 10,
  },
});

export default Input;
