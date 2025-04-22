import { Colors } from "@/constants/Colors";
import { fonts } from "@/hooks/useCacheResources";
import { StyleSheet } from "react-native";

export const globalstyles = StyleSheet.create({
  mainWrap: {
    flex: 1,
    backgroundColor: Colors.light.screenBg,
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
});
