import { fonts } from "@/hooks/useCacheResources";
import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  tagStyles: {
    borderRadius: 10,
    backgroundColor: "#F8D4B2",
    alignSelf: "center",
    transform: [{ rotate: "10deg" }],
  },
  tagStylesModal: {
    borderRadius: 10,
    backgroundColor: "#D1F2EB",
    alignSelf: "center",
  },
  backButton: {
    position: "absolute",
    top: 30,
    left: 30,
    zIndex: 10,
    backgroundColor: "black",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 33,
    width: 55,
    height: 55,
  },
  imageContainer: {
    position: "relative", // NEW - so buttons stay inside the image
  },
  mainImage: {
    width: width,
    height: height * 0.6,
    borderRadius: 32,
    resizeMode: "cover",
    paddingHorizontal: 10,
  },
  fullscreenImageContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: "100%",
    height: height * 0.4,
    borderRadius: 32,
    resizeMode: "cover",
    // paddingHorizontal: 10
  },
  addedImage: {
    borderRadius: 32,
    resizeMode: "cover",
    alignSelf: "center",
    // paddingHorizontal: 10
  },
  floatingButtons: {
    position: "absolute",
    bottom: 30,
    left: 30,
    flexDirection: "row",
    gap: 12,
  },
  circleButton: {
    width: 55,
    height: 55,
    borderRadius: 33,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  detailsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: RFValue(20),
    width: "100%",
    alignSelf: "center",
    fontFamily: fonts.primary.semibold,
  },
  description: {
    marginTop: 10,
    fontSize: RFValue(12),
    fontFamily: fonts.primary.medium,
    color: "#8C919E",
  },
  tag: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    color: "#4A403A",
    fontSize: 18,
    fontFamily: fonts.primary.semibold,
  },
  tagText: {
    fontSize: 18,
    fontFamily: fonts.primary.semibold,
    transform: [{ rotate: "10deg" }],
  },
  tagTextNormal: {
    fontSize: 18,
    fontFamily: fonts.primary.semibold,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 24,
    paddingTop: 48,
    borderRadius: 20,
    flex: 1,
    marginBottom: 20,
  },
  fullscreenContainer: {
    flex: 1,
    // backgroundColor: "#000",
  },
  fullscreenImage: {
    width: width,
    height: height,
    resizeMode: "cover",
  },
  expandIcon: { position: "absolute", top: 48, right: 40 },
});
