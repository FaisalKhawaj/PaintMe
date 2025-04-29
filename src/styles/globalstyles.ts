import { Colors } from "@/constants/Colors";
import { fonts } from "@/hooks/useCacheResources";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const globalstyles = StyleSheet.create({
  mainWrap: {
    flex: 1,
    backgroundColor: Colors.light.screenBg,
  },
  mainView: {
    flexGrow: 1,
    backgroundColor: "#fff",
    gap: 10,
    padding: 10,
  },
  innerWrap: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 22,
    textAlign: "center",
    width: "80%",
    alignSelf: "center",
    fontFamily: fonts.primary.semibold,
  },
  roundedIconButton: {
    backgroundColor: "#EDEBEE33",
    opacity: 0.3,
    height: 55,
    margin: 15,
    width: 55,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  headingText: {
    marginTop: 10,
    fontSize: RFValue(22),
    textAlign: 'center',
    fontFamily: fonts.primary.semibold,
    color: "#242424",
  },
});
