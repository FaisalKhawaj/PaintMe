import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { Spacer } from "@/components/Spacer";
import { globalstyles } from "@/src/styles/globalstyles";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ColorPicker, {
  Swatches,
  OpacitySlider,
  Panel5,
} from "reanimated-color-picker";

import { styles as localStyles, styles } from "./styles";
import { MotiView } from "moti";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { runOnJS } from "react-native-reanimated";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import ColorPicker from "react-native-wheel-color-picker";

export const ColorPick = () => {
  const [presetColors, setPresetColors] = useState([
    "#C7F8D8",
    "#B2E4E6",
    "#F8CAD0",
    "#D0E2FA",
    "#303030",
  ]);
  const [selectedColor, setSelectedColor] = useState("#C7F8D8");
  const [editingIndex, setEditingIndex] = useState<number | null>(0);
  const router = useRouter();

  console.log(editingIndex, selectedColor);

  const handleColorPicker = () => {
    router.push("/(main)/tabs/collection/all-collections");
  };

  const handleColorCirclePress = (color: string, index: number) => {
    setSelectedColor(color);
    setEditingIndex(index);
  };

  const [showColorPicker, setShowColorPicker] = useState(false);

  // Note: use `onCompleteJS` and `onChangeJS` for non-worklet functions
  const onSelectColor = ({ hex }) => {
    "worklet";
    runOnJS(setSelectedColor)(hex);
    console.log(hex);
  };
  return (
    <SafeAreaView style={globalstyles.mainWrap}>
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <MotiView
          style={globalstyles.innerWrap}
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 200, duration: 500 }}
        >
          <MotiView
            style={styles.flexCenter}
            from={{ translateY: -50, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 200, duration: 500 }}
          >
            <MotiView
              style={[
                localStyles.tagAccessControl,
                { backgroundColor: selectedColor },
              ]}
              from={{ scale: 0, rotate: "10deg" }}
              animate={{ scale: 1, rotate: "-10deg" }}
              transition={{ delay: 300, type: "spring" }}
            >
              <Text style={localStyles.tagAccessControlText}>
                dreamscape depot
              </Text>
            </MotiView>

            <Spacer marginTop={10} />

            <MotiView
              from={{ translateX: -50, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ delay: 400, duration: 500 }}
            >
              <Text style={globalstyles.headingText}>Choose a color tag</Text>
            </MotiView>

            <Spacer marginTop={50} />

            <View style={localStyles.colorOptions}>
              {presetColors.map((color, index) => (
                <TouchableOpacity
                  key={`${color}-${index}`}
                  style={[
                    localStyles.colorCircle,
                    { backgroundColor: color },
                    selectedColor === color && localStyles.selectedCircle,
                  ]}
                  onPress={() => handleColorCirclePress(color, index)}
                />
              ))}
              <TouchableOpacity
                onPress={() => setShowColorPicker(!showColorPicker)}
                // key={`${color}-${index}`}
                style={[
                  localStyles.colorCircle,
                  {
                    width: 42,
                    height: 42,
                  },
                ]}
                // onPress={() => {}}
              >
                <Image
                  source={require("../../../assets/images/rgb.png")}
                  style={{ width: "100%", height: "100%" }}
                />
              </TouchableOpacity>
            </View>
            {showColorPicker && (
              <View style={styles.pickerWrap}>
                <TouchableOpacity
                  onPress={() => setShowColorPicker(false)}
                  style={styles.closeRoundedButton}
                >
                  <Ionicons name="close" size={25} color={"grey"} />
                </TouchableOpacity>
                <ColorPicker
                  thumbStyle={{
                    backgroundColor: "#fff",
                    borderColor: "#fff",
                  }}
                  thumbInnerStyle={{
                    backgroundColor: "orange",
                  }}
                  style={{
                    width: "60%",
                    alignSelf: "flex-end",
                    marginRight: 50,
                  }}
                  value="red"
                  onComplete={onSelectColor}
                >
                  <Panel5 />
                  <OpacitySlider />
                  <Swatches />
                </ColorPicker>
              </View>
            )}
          </MotiView>

          <MotiView
            style={styles.buttonWrap}
            from={{ translateY: 50, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 600, duration: 500 }}
          >
            <LabelButton
              title="Create Collection"
              handleClick={handleColorPicker}
              variation={ButtonVariation.default}
            />
          </MotiView>
        </MotiView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
