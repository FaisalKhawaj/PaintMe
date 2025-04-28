import React, { ReactNode } from "react";
import Modal from "react-native-modal";
import { View, StyleSheet } from "react-native";

interface CustomModalProps {
  isVisible: boolean;
  setIsVisble: (visible: boolean) => void;
  children: ReactNode;
}

export const CustomModal: React.FC<CustomModalProps> = ({
  isVisible,
  setIsVisble,
  children,
}) => {
  return (
    <Modal
      style={styles.modal}
      backdropColor="#000"
      coverScreen={true} // Set to true if you want it to cover the screen
      onBackdropPress={() => setIsVisble(false)} // Dismiss on tap outside
      isVisible={isVisible}
    >
      <View style={styles.modalContent}>{children}</View>
    </Modal>
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
});
