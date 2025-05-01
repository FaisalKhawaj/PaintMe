import { fonts } from "@/hooks/useCacheResources";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  tagAccessControl: {
    borderRadius: 30,
    backgroundColor: "#E2FE52",
    paddingVertical: 6,
    alignSelf: "center",
    paddingHorizontal: 10,
    transform: [{ rotate: "10deg" }],
  },
  tagAccessControlText: {
    color: "#3E4E50",
    fontSize: RFValue(18),
    fontFamily: fonts.primary.semibold,
  },
  allowTextDescription: {
    fontSize: RFValue(22),
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
    backgroundColor: '#F6F5F7',
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
    backgroundColor: 'white'
  },
  filledPinCodeContainer: {
    backgroundColor: "#EDEBEE",
  },
  disabledPinCodeContainer: {
    backgroundColor: '#F6F5F7',
  },
  pinCodeText: {
    color: 'black',
    fontSize: RFValue(16),
    textAlign: 'center',
    fontFamily: fonts.primary.semibold
  },
  placeholderText: {
    color: '#C4C4C4',
    fontSize: RFValue(16),
    textAlign: 'center',
    fontFamily: fonts.primary.semibold
  },
  focusStick: {
    backgroundColor: "#000",
    width: 2,
    height: 20,
  },
});
