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
  rounedIconButton: {
    backgroundColor: "#9ea0a4",
    opacity: 0.8,
    height: 55,
    margin: 15,
    width: 55,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
});
