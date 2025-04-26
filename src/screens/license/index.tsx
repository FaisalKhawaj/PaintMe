import { globalstyles } from "@/src/styles/globalstyles";
import { MotiView } from "moti";
import { SafeAreaView } from "react-native-safe-area-context";

export const License = () => {
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
      ></MotiView>
    </SafeAreaView>
  );
};
