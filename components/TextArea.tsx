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
  icon?: React.ReactNode;
  placeholder: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  label?: string;
  numberOfLines?: number;
  isCenter?: boolean;
}

const TextArea: React.FC<InputProps> = ({
  icon,
  placeholder,
  label,
  containerStyle,
  inputStyle,
  numberOfLines = 4,
  isCenter = false,
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
          isCenter && styles.centerContainer, // Apply center container styles
        ]}
      >
        {icon && !isCenter && <View style={styles.iconWrapper}>{icon}</View>}
        <TextInput
          style={[
            styles.input,
            isCenter && styles.centeredText,
            inputStyle,
            isFocused ? { backgroundColor: "white" } : {},
          ]}
          placeholder={placeholder}
          placeholderTextColor="#888"
          onFocus={handleFocus}
          onBlur={handleBlur}
          multiline={!isCenter} // Disable multiline when centered
          numberOfLines={isCenter ? 1 : numberOfLines}
          textAlign={isCenter ? 'center' : 'left'}
          {...rest}
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
    alignItems: "flex-start",
    backgroundColor: "#F6F5F7",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingLeft: 4,
    width: "100%",
    height: 56,
    borderWidth: 1.5,
    borderColor: "#F6F5F7",
  },
  centerContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0, // Remove side padding when centered
  },
  focusedContainer: {
    borderColor: "#E2FE52",
    backgroundColor: "white",
  },
  iconWrapper: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    backgroundColor: "#F6F5F7",
    borderRadius: 8,
    paddingLeft: 10,
    paddingTop: 10,
    minHeight: 56,
    maxHeight: 200,
    textAlignVertical: "top",
  },
  centeredText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    width: '100%',
    fontSize: RFValue(18),
    fontFamily: fonts.primary.semibold,
    padding: 0,
    margin: 0,
  },
});

export default TextArea;