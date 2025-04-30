import { fonts } from "@/hooks/useCacheResources";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  tagAccessControl: {
    borderRadius: 14,
    backgroundColor: "#CAF7E3",
    paddingVertical: 6,
    alignSelf: "center",
    paddingHorizontal: 20,
    transform: [{ rotate: "10deg" }],
  },
  tagAccessControlText: {
    color: "#3E4E50",
    fontSize: 18,
    fontFamily: fonts.primary.semibold,
  },
  colorOptions: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 20,
    marginHorizontal:'auto',
    gap: 10,
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    borderWidth: 1.5,
    borderColor: "transparent",
  },
  selectedCircle: {
    borderColor: "#000",
  },
  description: {
    marginTop: 10,
    fontSize: RFValue(22),
    textAlign: "center",
    fontFamily: fonts.primary.semibold,
    color: "#555",
  },
  allowTextDescription: {
    fontSize: 22,
    textAlign: "center",
    width: "80%",
    alignSelf: "center",
    fontFamily: fonts.primary.semibold,
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  pinCodeContainer: {
    backgroundColor: "#EDEBEE",
    width: 52,
    height: 52,
    borderRadius: 8,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  activePinCodeContainer: {
    borderWidth: 2,
    borderColor: "#E2FE52",
    borderRadius: 8, // make sure this matches the box
    backgroundColor: "white",
  },
  filledPinCodeContainer: {
    backgroundColor: "#EDEBEE",
  },
  disabledPinCodeContainer: {
    backgroundColor: "#F2F2F2",
  },
  pinCodeText: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
  placeholderText: {
    color: "#C4C4C4",
    fontSize: 20,
    textAlign: "center",
  },
  focusStick: {
    backgroundColor: "#000",
    width: 2,
    height: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  pickerContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "85%",
    maxWidth: 400,
    alignItems: "center",
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  flex: {
    flex: 1,
  },
  flexCenter: {
    flex: 1,
    justifyContent: "center",
  },
  pickerWrap: {
    marginTop: 20,
  },
  buttonWrap: {
    gap: 10,
  },
  closeRoundedButton: {
    alignSelf: "flex-end",
    marginVertical: 10,
    marginRight: 50,
    backgroundColor: "#d6d6d6",
    borderRadius: 30,
    padding: 3,
  },
});
