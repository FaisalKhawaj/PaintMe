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
  description: {
    marginTop: 10,
    fontSize: RFValue(22),
    textAlign: 'center',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  pinCodeContainer: {
    backgroundColor: '#EDEBEE',
    width: 52,
    height: 52,
    borderRadius: 8,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activePinCodeContainer: {
    borderWidth: 2,
    borderColor: '#E2FE52',
    borderRadius: 8, // make sure this matches the box
    backgroundColor: 'white'
  },
  filledPinCodeContainer: {
    backgroundColor: '#EDEBEE',
  },
  disabledPinCodeContainer: {
    backgroundColor: '#F2F2F2',
  },
  pinCodeText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  placeholderText: {
    color: '#C4C4C4',
    fontSize: 20,
    textAlign: 'center',
  },
  focusStick: {
    backgroundColor: '#000',
    width: 2,
    height: 20,
  },
});
