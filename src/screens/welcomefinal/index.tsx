import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { Spacer } from "@/components/Spacer";
import { globalstyles } from "@/src/styles/globalstyles";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { MotiView } from "moti";
import { Redirect, useLocalSearchParams } from "expo-router";
import { useAuth } from "@/src/context/AuthProvider";

export const WelcomeFinal = () => {
  const { isEmail = 'false' } = useLocalSearchParams();
  const { isLoggedin, setIsLoggedin }: any = useAuth();
  const handleSplash = () => {
    setIsLoggedin(true);
  };
  console.log("isLoggedin>>", isLoggedin);
  if (isLoggedin) {
    return <Redirect href="/(main)/tabs" />;
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={globalstyles.mainWrap}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={globalstyles.fullScreen}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <MotiView
              style={globalstyles.innerWrap}
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 200, duration: 500 }}
            >
              <MotiView
                style={{ flex: 1, justifyContent: "center" }}
                from={{ translateY: -50, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ delay: 200, duration: 500 }}
              >
                <Image
                  style={styles.imageStyle}
                  source={
                    isEmail === 'true'
                      ? require("../../../assets/images/MailScreen.png")
                      : require("../../../assets/images/heart.png")
                  }
                />
                <MotiView
                  style={styles.tagAccessControl}
                  from={{ scale: 0, rotate: "10deg" }}
                  animate={{ scale: 1, rotate: "0deg" }}
                  transition={{ delay: 300, type: "spring" }}
                >
                  <Text style={styles.tagAccessControlText}>hurray!!</Text>
                </MotiView>
                <Spacer marginTop={10} />
                <MotiView
                  from={{ translateX: -50, opacity: 0 }}
                  animate={{ translateX: 0, opacity: 1 }}
                  transition={{ delay: 400, duration: 500 }}
                >
                  <Text style={[globalstyles.description, { fontSize: 26 }]}>
                    Welcome to Pixura.
                  </Text>
                </MotiView>
                <Spacer marginTop={20} />
                <LabelButton
                  title="Get Cracking ✨"
                  handleClick={handleSplash}
                  variation={ButtonVariation.default}
                  disabled={false}
                />
              </MotiView>
            </MotiView>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
