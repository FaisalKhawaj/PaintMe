import { LogoutIcon, ShieldIcon } from "@/assets/svg";
import { fonts } from "@/hooks/useCacheResources";
import { globalstyles } from "@/src/styles/globalstyles";
import { MotiView } from "moti";
import { Pressable, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import { RowIconTitle } from "./components/RowIconTitle";
import { ButtonVariation, LabelButton } from "@/components/LabelButton";

export const Account = () => {
  const handleDisable = () => {};
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
        <RowIconTitle title="Log out" icon="LogoutIcon" />
        <RowIconTitle title="Disable account" icon="LockIcon" />

        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <View
            style={{
              position: "relative",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ position: "absolute", left: 20 }}>
              <ShieldIcon />
            </View>

            <LabelButton
              paddingHorizontal={50}
              title="Disable account"
              handleClick={handleDisable}
              alignItems="flex-start"
              variation={ButtonVariation.destructive}
            />
          </View>
        </View>
      </MotiView>
    </SafeAreaView>
  );
};
