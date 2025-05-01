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
    fontSize: 18,
    fontFamily: fonts.primary.semibold,
  },
  allowTextDescription: {
    fontSize: 22,
    textAlign: "center",
    width: "80%",
    alignSelf: "center",
    fontFamily: fonts.primary.semibold,
  },
  paraStyle: {
    fontSize: RFValue(11),
    color: "#8C919E",
    marginTop: 10,
  },
  footerPara: {
    width: "80%",
    marginHorizontal: "auto",
    fontSize: RFValue(12),
    color: "#8C919E",
    marginTop: 10,
    textAlign: "center",
  }
});
