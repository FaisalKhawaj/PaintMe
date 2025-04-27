import { fonts } from '@/hooks/useCacheResources';
import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width,
    height,
    justifyContent: "center",
  },
  tag: {
    marginTop: 50,
    backgroundColor: '#E5F7DF',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'flex-start', // Align tag to left
  },
  tagTextNormal: {
    fontSize: 18,
    fontFamily: fonts.primary.semibold,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)", // Darken the background slightly
  },
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  topSection: {
    marginTop: 50,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#E2FE52",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 12,
    fontFamily: fonts.primary.semibold,
    color: "#000",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.primary.bold,
    color: "white",
  },
  buttonGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
    marginVertical: 20,
  },
  optionButton: {
    backgroundColor: "#706F79",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    marginRight: 8,
    marginBottom: 8,
  },
  selectedButton: {
    backgroundColor: "white",
  },
  optionText: {
    color: "#333",
    fontSize: 14,
    fontFamily: fonts.primary.semibold,
  },
  continueButton: {
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 20,
    alignItems: "center",
  },
  continueButtonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
});
