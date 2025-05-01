import { MotiView } from "moti";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import { globalstyles } from "@/src/styles/globalstyles";
import { Entypo } from "@expo/vector-icons";
import { PaymentItem } from "./components/PaymentItem";
import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { router } from "expo-router";

export const PaymentMethods = () => {
  const handleAddCard = () => {
    router.push("/add-payment-method");
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
        <PaymentItem
          title="Mastercard"
          subtitle="card ending in 4966"
          icon="MasterCIcon"
        />
        <PaymentItem
          title="Visa"
          subtitle="card ending in 8492"
          icon="VisaCIcon"
        />
        <View style={globalstyles.fullScreen} />
        <View style={styles.bottomWrap}>
          <View style={styles.plusIconWrap}>
            <Entypo name="plus" size={25} color={"#fff"} />
          </View>

          <LabelButton
            title="Add new card "
            handleClick={handleAddCard}
            variation={ButtonVariation.default}
          />
        </View>
      </MotiView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomWrap: {
    position: "relative",
    width: "100%",
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },
  plusIconWrap: {
    position: "absolute",
    left: 20,
    zIndex: 1000,
  },
});
