import { Fragment } from "react";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import { MotiView } from "moti";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { globalstyles } from "@/src/styles/globalstyles";

type NewProfileProps = {
  handleAddPhoto: () => void;
  image: string | null;
  handleConfirm: () => void;
};

export const NewProfile: React.FC<NewProfileProps> = ({
  handleAddPhoto,
  image,
  handleConfirm,
}) => {
  return (
    <Fragment>
      <ImageBackground
        imageStyle={styles.imageStyle}
        style={styles.img}
        source={{ uri: image }}
      >
        <Pressable style={globalstyles.roundedIconButton} onPress={() => {}}>
          <MotiView
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              type: "timing",
              duration: 200,
              repeat: Infinity,
              repeatReverse: true,
            }}
          >
            <Ionicons name="close" size={25} color={"#fff"} />
          </MotiView>
        </Pressable>
      </ImageBackground>

      <View style={{ padding: 20, gap: 10 }}>
        <LabelButton
          title="Select another photo"
          handleClick={handleAddPhoto}
          variation={ButtonVariation.secondary}
          disabled={false}
        />
        <LabelButton
          title="Confirm"
          handleClick={handleConfirm}
          variation={ButtonVariation.default}
          disabled={false}
        />
      </View>
    </Fragment>
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
    flex: 1,
    justifyContent: "space-between",
  },
  img: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
  },
});
