import { Row } from "@/components/Row";
import { fonts } from "@/hooks/useCacheResources";
import { globalstyles } from "@/src/styles/globalstyles";
import { MotiView } from "moti";
import { useState } from "react";
import { Pressable, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import ToggleSwitch from "toggle-switch-react-native";
import { RowTitleSwitch } from "./components/RowTitleSwitch";

export const Alert = () => {
  const [isNotification, setIsNotification] = useState(true);
  const [isEmailNotification, setIsEmailNotification] = useState(false);
  const [isActivityAlert, setIsActivityAlert] = useState(true);
  const [isPersonalized, setIsPersonalized] = useState(false);
  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <MotiView
        from={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 600 }}
        style={[globalstyles.mainView, { padding: 30 }]}
      >
        <RowTitleSwitch
          title="Push notifications"
          isOn={isNotification}
          setIsOn={setIsNotification}
        />
        <RowTitleSwitch
          title="Email notifications"
          isOn={isEmailNotification}
          setIsOn={setIsEmailNotification}
        />
        <RowTitleSwitch
          title="Activity alerts"
          isOn={isActivityAlert}
          setIsOn={setIsActivityAlert}
        />
        <RowTitleSwitch
          title="Personalized suggestions"
          isOn={isPersonalized}
          setIsOn={setIsPersonalized}
        />
      </MotiView>
    </SafeAreaView>
  );
};
