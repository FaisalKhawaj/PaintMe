import { globalstyles } from "@/src/styles/globalstyles";
import { MotiView } from "moti";
import { SafeAreaView } from "react-native-safe-area-context";
import { RowButtonTextIcon } from "./components/RowButtonTextIcon";
import { router } from "expo-router";

export const Settings = () => {
  const handlePaymentMethods = () => {
    router.push("/payment-methods");
  };
  const handleConnectedMethods = () => {
    router.push("/connected-accounts");
  };
  const handleContactSupport = () => {};
  const handleAccount = () => {
    router.push("/account");
  };
  const handlePrivacy = () => {
    router.push("/privacy-policy");
  };
  const handleLicense = () => {
    router.push("/license");
  };
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <MotiView
        from={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 600 }}
        style={[globalstyles.mainView, { padding: 30 }]}
      >
        <RowButtonTextIcon
          icon="CreditCardIcon"
          title="Payment methods"
          handlePress={handlePaymentMethods}
        />
        <RowButtonTextIcon
          title="Connected accounts"
          icon="ConnectedCardIcon"
          handlePress={handleConnectedMethods}
        />
        <RowButtonTextIcon
          title="Contact support"
          icon="SupportIcon"
          handlePress={handleContactSupport}
        />
        <RowButtonTextIcon
          title="Account"
          icon="PersonIcon"
          handlePress={handleAccount}
        />
        <RowButtonTextIcon
          title="Privacy policy"
          icon="PrivacyIcon"
          handlePress={handlePrivacy}
        />
        <RowButtonTextIcon
          title="License"
          icon="LicenseIcon"
          handlePress={handleLicense}
        />
      </MotiView>
    </SafeAreaView>
  );
};
