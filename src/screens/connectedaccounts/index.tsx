import Input from "@/components/Input";
import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { globalstyles } from "@/src/styles/globalstyles";
import { router } from "expo-router";
import { MotiView } from "moti";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ConnectedAccounts = () => {
  const handleConfirmChanges = () => {
    router.back();
  };
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
        <Input
          label="X handle"
          placeholder="Name on card"
          keyboardType="default"
        />
        <Input
          label="Instagram"
          placeholder="4242 4242 4242 4242 4242"
          keyboardType="email-address"
        />

        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <LabelButton
            title="Confirm Changes"
            handleClick={handleConfirmChanges}
            variation={ButtonVariation.default}
          />
        </View>
      </MotiView>
    </SafeAreaView>
  );
};
