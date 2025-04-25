import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  icon: React.ReactNode; // Can be either an icon or image component
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ icon, placeholder, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View style={[styles.inputContainer, isFocused ? styles.focusedContainer : {}]}>
      <View style={styles.iconWrapper}>{icon}</View>
      <TextInput
        style={[styles.input, isFocused ? { backgroundColor: 'white' } : {}]}
        placeholder={placeholder}
        placeholderTextColor="#888"
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest} // Spread the other props to the TextInput
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDEBEE',
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '100%',
    height: 50,
    borderWidth: 1.5, // Default border width
    borderColor: '#EDEBEE', // Default border color
  },
  focusedContainer: {
    borderColor: '#E2FE52', // Change the container border color on focus
    backgroundColor: 'white', // Change the container border color on focus
  },
  iconWrapper: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#EDEBEE', // Default background color
    borderRadius: 8,
    paddingLeft: 10,
  },
});

export default Input;
