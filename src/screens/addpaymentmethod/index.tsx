import Input from "@/components/Input";
import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { Row } from "@/components/Row";
import { globalstyles } from "@/src/styles/globalstyles";
import { router } from "expo-router";
import { MotiView } from "moti";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const AddPaymentMethod = () => {
  const handleAddCard = () => {
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
        <View
          style={{
            gap: 20,
          }}
        >
          <Input placeholder="Name on card" keyboardType="default" />
          <Input
            placeholder="4242 4242 4242 4242 4242"
            keyboardType="email-address"
          />
          <Row gap={10} alignItems="center">
            <Input
              placeholder="MM//YY"
              keyboardType="default"
              style={{ width: "50%" }}
            />
            <Input
              placeholder="CVV"
              keyboardType="number-pad"
              style={{ width: "50%" }}
            />
          </Row>
        </View>

        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <LabelButton
            title="Add Card"
            handleClick={handleAddCard}
            variation={ButtonVariation.default}
          />
        </View>
      </MotiView>
    </SafeAreaView>
  );
};
