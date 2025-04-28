import { LogoutIcon, ShieldIcon } from "@/assets/svg";
import { fonts } from "@/hooks/useCacheResources";
import { globalstyles } from "@/src/styles/globalstyles";
import { MotiView } from "moti";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import { RowIconTitle } from "./components/RowIconTitle";
import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import Modal from "react-native-modal";
import { useState } from "react";
import { CustomModal } from "@/components/ui/CustomModal";

export const Account = () => {
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);
  const handleDisable = () => {
    setShowDeleteAccountModal(!showDeleteAccountModal);
  };
  const handleDelete = () => {
    setShowDeleteAccountModal(!showDeleteAccountModal);
  };
  const handleLogout = () => {};
  console.log("showDeleteAccountModal>", showDeleteAccountModal);
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
        <RowIconTitle
          title="Log out"
          handlePress={handleLogout}
          icon="LogoutIcon"
        />
        <RowIconTitle
          handlePress={handleDisable}
          title="Disable account"
          icon="LockIcon"
        />

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

        <CustomModal
          isVisible={showDeleteAccountModal}
          setIsVisble={setShowDeleteAccountModal}
        >
          <Text style={styles.modalText}>
            Are you sure you want to delete your account? Maybe disable it
            instead.
          </Text>
          <Image
            style={{
              alignSelf: "center",
              marginVertical: 45,
            }}
            source={require("../../../assets/images/delete.png")}
          />
          <View style={{ gap: 20 }}>
            <LabelButton
              title="Delete account"
              handleClick={handleDelete}
              variation={ButtonVariation.secondary}
              // disabled={value === ""}
            />
            <LabelButton
              title="Disable account"
              handleClick={handleDisable}
              variation={ButtonVariation.default}
              // disabled={value === ""}
            />
          </View>
        </CustomModal>
      </MotiView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end", // Align modal to the bottom
    margin: 0, // Remove default margin to span full width
    marginBottom: 20,
    marginHorizontal: 20,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    paddingVertical: 40,
    paddingBottom: 20,
    borderRadius: 20,
  },
  modalText: {
    fontSize: RFValue(14),
    textAlign: "center",
    fontFamily: fonts.primary.medium,
    color: "#8C919E",
  },
});
