import { globalstyles } from "@/src/styles/globalstyles";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MotiView } from "moti";
import { router } from "expo-router";
import { fonts } from "@/hooks/useCacheResources";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";

export const Collections = () => {
  const collections = [
    { title: "pixel parade", images: 28, color: '#F7FEF9', tagColor: '#D4F8E1' },
    { title: "frame & focus", images: 14, color: '#ECFAFA', tagColor: '#9FE7E5' },
    { title: "color theory", images: 22, color: '#FFF4F8', tagColor: '#FFC8DD' },
    { title: "dreamscape depot", images: 36, color: '#F2F9FF', tagColor: '#BDE0FE' },
  ];

  const handleContinue = (title: string, color: string) => {
    router.push({
      pathname: '/(main)/tabs/collection/opened-collections',
      params: { title, color }
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={globalstyles.mainWrap}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <TouchableOpacity
            style={styles.circleButton}
            onPress={() => { }}
          >
            <Ionicons
              name={'add'}
              size={40}
              color="white"
            />
          </TouchableOpacity>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            {collections.map((item, index) => (
              <Pressable key={index} onPress={() => handleContinue(item.title, item.tagColor)}>
                <MotiView
                  key={index}
                  style={[styles.card, { backgroundColor: item.color }]}
                  from={{ scale: 0, rotate: index % 2 === 0 ? "-10deg" : "10deg" }}
                  animate={{ scale: 1, rotate: index % 2 === 0 ? "10deg" : "-10deg" }}
                  transition={{ delay: 300, type: "spring" }}
                >
                  <MotiView
                    style={styles.cardInner}
                    from={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ delay: 200, duration: 500 }}
                  >
                    <MotiView
                      style={[styles.tagContainer, { backgroundColor: item.tagColor }]}
                      from={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 300, type: "spring" }}
                    >
                      <Text style={styles.tagText}>{item.title}</Text>
                    </MotiView>

                    <Text style={styles.imageCount}>
                      {item.images} images
                    </Text>
                  </MotiView>
                </MotiView>
              </Pressable>
            ))}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 80,
    paddingTop: 40,
  },
  card: {
    backgroundColor: '#D3F8E2',
    padding: 25,
    paddingVertical: 50,
    borderRadius: 30,
    marginVertical: 40,
    // shadowColor: "#000",
    // shadowOpacity: 0.1,
    // shadowOffset: { width: 0, height: 4 },
    // shadowRadius: 10,
    // elevation: 5,
  },
  cardInner: {
    flex: 1,
    justifyContent: "center",
  },
  tagContainer: {
    borderRadius: 14,
    backgroundColor: "#CAF7E3",
    paddingVertical: 8,
    paddingHorizontal: 22,
    alignSelf: "center",
    transform: [{ rotate: "10deg" }],
  },
  tagText: {
    color: "#3E4E50",
    fontSize: RFValue(16),
    fontFamily: fonts.primary.semibold,
    textAlign: "center",
  },
  imageCount: {
    fontFamily: fonts.primary.medium,
    textAlign: 'center',
    marginTop: 12,
    fontSize: RFValue(16),
    color: '#8C919E',
  },
  circleButton: {
    width: 55,
    height: 55,
    borderRadius: 10,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    top: 30,
    right: 30,
    zIndex: 1000
  },
});
