import { AppleIcon, GoogleIcon } from "@/assets/svg";
import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { Row } from "@/components/Row";
import { Spacer } from "@/components/Spacer";
import { globalstyles } from "@/src/styles/globalstyles";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { router } from "expo-router";

export const Welcome = () => {
  const handleClickPhone = () => {
    router.replace("/(auth)/enter-number");
  };
  const handleClickEmail = () => {
    router.replace("/(auth)/enter-email");
  };
  return (
    <SafeAreaView style={globalstyles.mainWrap}>
      <View style={globalstyles.innerWrap}>
        <View style={styles.gap}>
          <Image
            style={styles.imageStyles}
            source={require("../../../assets/images/welcome.png")}
          />

          <Text style={[globalstyles.description, {}]}>
            Create any image{"\n"} you can dream up.
          </Text>
        </View>
        <Spacer marginTop={20} />
        <View style={{ gap: 10 }}>
          <LabelButton
            title="Continue with Phone"
            handleClick={handleClickPhone}
            variation={ButtonVariation.default}
          />
          <LabelButton
            title="Continue with Email"
            handleClick={handleClickEmail}
            variation={ButtonVariation.secondary}
          />
          <Row gap={10} alignItems="center">
            <Pressable style={styles.iconButton}>
              <AppleIcon />
            </Pressable>

            <Pressable style={styles.iconButton}>
              <GoogleIcon />
            </Pressable>
          </Row>
        </View>
      </View>
    </SafeAreaView>
  );
};
