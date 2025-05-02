import React from "react";
import { Pressable, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import ToggleSwitch from "toggle-switch-react-native";
import { fonts } from "@/hooks/useCacheResources";
import * as Haptics from "expo-haptics";

interface RowTitleSwitchProp {
  title: string;
  isOn: boolean;
  setIsOn: (value: boolean) => void; // Function to update the state
}

export const RowTitleSwitch: React.FC<RowTitleSwitchProp> = ({
  title,
  isOn,
  setIsOn,
}) => {
  return (
    <Pressable
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }}
      style={{
        flexDirection: "row",
        paddingVertical: 20,
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          color: "#242424",
          fontFamily: fonts.primary.medium,
          fontSize: RFValue(16),
        }}
      >
        {title}
      </Text>

      <ToggleSwitch
        isOn={isOn}
        onColor="#000000"
        offColor="#EDEBEE"
        thumbOnStyle={{
          backgroundColor: "#fff",
        }}
        thumbOffStyle={{
          backgroundColor: "#fff",
        }}
        size="large"
        onToggle={(value) => setIsOn(value)}
      />
    </Pressable>
  );
};
