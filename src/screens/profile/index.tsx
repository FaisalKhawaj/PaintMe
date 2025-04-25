import { View as MotiView } from "moti";
import { EditIcon } from "@/assets/svg/EditIcon";
import { TagText } from "@/components/TagText";
import { fonts } from "@/hooks/useCacheResources";
import { globalstyles } from "@/src/styles/globalstyles";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const { height, width } = Dimensions.get("screen");
export const Profile = () => {
  return (
    <SafeAreaView edges={["bottom", "top"]} style={{ flex: 1 }}>
      <MotiView
        from={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 600 }}
        style={styles.mainView}
      >
        <ImageBackground
          imageStyle={styles.imageStyle}
          style={styles.img}
          source={{ uri: "https://picsum.photos/200" }}
        >
          <Pressable
            style={globalstyles.roundedIconButton}
            onPress={() => router.push("/(main)/edit-pic")}
          >
            <MotiView
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                type: "timing",
                duration: 200,
                repeat: Infinity,
                repeatReverse: true,
                // repeatReverse: "repeat",
                // repeatType: "reverse",
              }}
            >
              <EditIcon />
            </MotiView>
          </Pressable>

          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "timing", duration: 800, delay: 200 }}
          >
            <Text style={styles.username}>Jason Teague</Text>
          </MotiView>
        </ImageBackground>
        <MotiView
          from={{ translateY: 50, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ type: "timing", duration: 600, delay: 300 }}
          style={{ flexGrow: 1 }}
        >
          <View style={styles.bottomMainRowWrap}>
            <MotiView
              style={{ flex: 1.7, gap: 10 }}
              from={{ translateX: -50, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ type: "timing", duration: 500 }}
            >
              <Pressable style={styles.bottomLeftButton} onPress={() => {}}>
                <FontAwesome5 name="user-alt" size={25} color={"#242424"} />
                <TagText
                  title="my profile"
                  tagBgColor="#FDE2E4"
                  tagTextColor="#3A3335"
                />
              </Pressable>
              <Pressable
                style={styles.bottomLeftButton}
                onPress={() => router.push("/settings")}
              >
                <MaterialIcons name="settings" color={"#242424"} size={25} />
                <TagText
                  title="settings"
                  tagBgColor="#FBE7C6"
                  tagTextColor="#3B302A"
                />
              </Pressable>
            </MotiView>

            <Pressable style={styles.bottomRightLgButton} onPress={() => {}}>
              <Ionicons name="notifications" size={25} color={"#242424"} />
              <TagText
                title="alert"
                tagBgColor="#C8B6FF"
                tagTextColor="#2B2D42"
              />
            </Pressable>
          </View>
        </MotiView>
        <View style={{ height: 50 }} />
      </MotiView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexGrow: 1,
    backgroundColor: "#fff",
    gap: 10,
    padding: 10,
  },
  imageStyle: {
    borderRadius: 40,
    width: "100%",
    justifyContent: "space-between",
  },
  img: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
  },
  username: {
    color: "#fff",
    textAlign: "center",
    fontFamily: fonts.primary.semibold,
    fontSize: RFValue(18),
    marginBottom: 15,
  },
  bottomMainRowWrap: {
    flex: 1,
    width: "100%",
    height: "100%",
    gap: 10,
    flexDirection: "row",
  },
  bottomLeftButton: {
    flex: 1,
    borderRadius: 40,
    backgroundColor: "#F4F4F4",
    gap: 5,
    padding: 20,
    justifyContent: "flex-end",
  },
  bottomRightLgButton: {
    flex: 0.7,
    gap: 5,
    padding: 20,
    borderRadius: 40,
    justifyContent: "center",
    backgroundColor: "#F4F4F4",
  },
});
