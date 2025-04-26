import Input from "@/components/Input";
import { Row } from "@/components/Row";
import { globalstyles } from "@/src/styles/globalstyles";
import { MotiView } from "moti";
import { SafeAreaView } from "react-native-safe-area-context";

export const MyProfile = () => {
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
        <Row gap={10} alignItems="center">
          <Input
            label="First name"
            placeholder="MM//YY"
            keyboardType="default"
            containerStyle={{ width: "50%" }}
          />
          {/* <Input
            label="Last name"
            placeholder="CVV"
            keyboardType="number-pad"
            containerStyle={{ width: "50%" }}
          /> */}
        </Row>
      </MotiView>
    </SafeAreaView>
  );
};
