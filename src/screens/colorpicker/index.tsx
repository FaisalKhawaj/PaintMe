import { AppleIcon, GoogleIcon } from "@/assets/svg";
import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { Row } from "@/components/Row";
import { Spacer } from "@/components/Spacer";
import { globalstyles } from "@/src/styles/globalstyles";
import { RFValue } from "react-native-responsive-fontsize";

import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { MotiView } from "moti";
import { useRef, useState } from "react";
import PhoneInput from "react-native-phone-number-input";
import { router, useRouter } from "expo-router";
import Input from "@/components/Input";
import { EmailIcon } from "@/assets/svg/EmailIcon";
import ColorPicker, { PreviewText, HueSlider, OpacitySlider, Panel1, Swatches } from 'reanimated-color-picker';
import { runOnJS } from "react-native-reanimated";

export const ColorPick = () => {
  const [presetColors, setPresetColors] = useState([
    "#C7F8D8",
    "#B2E4E6",
    "#F8CAD0",
    "#D0E2FA",
    "#AEB5C3",
    "#C8A2C8",
  ]);
  const [selectedColor, setSelectedColor] = useState("#C7F8D8");
  const [showPicker, setShowPicker] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleColorPicker = () => {
    router.push('/(main)/tabs/collection/all-collections')
  };

  const handleColorCirclePress = (color: string, index: number) => {
    setSelectedColor(color);
    setEditingIndex(index); // Store which color we're editing
    setShowPicker(true);
  };

  const onSelectColor = ({ hex }: { hex: string }) => {
    'worklet';
    runOnJS(setSelectedColor)(hex);

    // Only update the preset colors if we're editing an existing one
    // setTimeout(() => {
    //   if (editingIndex !== null) {
    //     runOnJS(setPresetColors)(prevColors => {
    //       const newColors = [...prevColors];
    //       newColors[editingIndex] = hex;
    //       return newColors;
    //     });
    //   }
    // }, 1000);
  };

  // When closing the picker, reset the editing index
  const handleClosePicker = () => {
    setShowPicker(false);
    setEditingIndex(null);
  };



  const handleClickEmail = () => { };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
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
                style={[styles.tagAccessControl, { backgroundColor: selectedColor }]}
                from={{ scale: 0, rotate: "10deg" }}
                animate={{ scale: 1, rotate: "-10deg" }}
                transition={{ delay: 300, type: "spring" }}
              >
                <Text style={styles.tagAccessControlText}>dreamscape depot</Text>
              </MotiView>
              <Spacer marginTop={10} />
              <MotiView
                from={{ translateX: -50, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ delay: 400, duration: 500 }}
              >
                <Text style={globalstyles.headingText}>
                  Choose a color tag
                </Text>
              </MotiView>
              <Spacer marginTop={50} />

              <View style={styles.colorOptions}>
                {presetColors.map((color, index) => (
                  <TouchableOpacity
                    key={color}
                    style={[
                      styles.colorCircle,
                      { backgroundColor: color },
                      selectedColor === color && styles.selectedCircle,
                    ]}
                    onPress={() => handleColorCirclePress(color, index)}
                  />
                ))}
                {/* <TouchableOpacity
                  style={[styles.colorCircle, { backgroundColor: selectedColor }]}
                  onPress={() => setShowPicker(true)}
                >
                  <Text style={{ fontSize: 24 }}>+</Text>
                </TouchableOpacity> */}
              </View>

              {/* Color Picker Modal */}
              <Modal visible={showPicker} animationType="slide" transparent>
                <View style={styles.modalContainer}>
                  <View style={styles.pickerContainer}>
                    <ColorPicker
                      value={selectedColor}
                      sliderThickness={25}
                      thumbSize={30}
                      thumbShape="circle"
                      onComplete={onSelectColor}
                      style={{ width: '100%' }}
                    >
                      <Panel1 style={{ marginBottom: 20 }} />
                      <HueSlider style={{ marginBottom: 20 }} />
                      <OpacitySlider style={{ marginBottom: 20 }} />
                      <Swatches
                        colors={presetColors}
                        swatchStyle={{ width: 30, height: 30, borderRadius: 15, marginHorizontal: 5 }}
                        style={{ marginBottom: 20 }}
                      />
                      <PreviewText style={{ color: '#000', fontSize: 16 }} />
                    </ColorPicker>
                    <TouchableOpacity
                      style={styles.closeButton}
                      onPress={handleClosePicker}
                    >
                      <Text style={styles.closeButtonText}>Done</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </MotiView>
            <MotiView
              style={{ gap: 10 }}
              from={{ translateY: 50, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 600, duration: 500 }}
            >
              <LabelButton
                title="Continue"
                handleClick={handleColorPicker}
                variation={ButtonVariation.default}
              />
            </MotiView>
          </MotiView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};