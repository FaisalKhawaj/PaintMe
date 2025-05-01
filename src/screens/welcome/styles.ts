import { Dimensions, StyleSheet } from "react-native";
const { height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  iconButton: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 13,
    height: 52,
    alignItems: "center",
    backgroundColor: "#EDEBEE",
  },
  gap: {
    gap: 16,
  },
  imageStyles: {
    height: height / 2,
    width: "100%",
    borderRadius: 20,
  }
});
