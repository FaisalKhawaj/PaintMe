import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { globalstyles } from "@/src/styles/globalstyles";
import { Ionicons } from "@expo/vector-icons";
import { MotiView } from "moti";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";

type DefaultViewProps = {
  handleAddPhoto: () => void;
};

const DefaultView: React.FC<DefaultViewProps> = ({ handleAddPhoto }) => {
  const handleAddNewPhoto = () => {};
  return (
    <ImageBackground
      imageStyle={styles.imageStyle}
      style={styles.img}
      source={{ uri: "https://picsum.photos/200" }}
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
            // repeatReverse: "repeat",
            // repeatType: "reverse",
          }}
        >
          <Ionicons name="close" size={25} color={"#fff"} />
        </MotiView>
      </Pressable>

      <View style={{ padding: 20, gap: 10 }}>
        <LabelButton
          title="Add new photo"
          handleClick={handleAddPhoto}
          variation={ButtonVariation.default}
          disabled={false}
        />
        <LabelButton
          title="Remove current photo"
          handleClick={handleAddNewPhoto}
          variation={ButtonVariation.secondary}
          disabled={false}
        />
      </View>
    </ImageBackground>
  );
};

export default DefaultView;

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
});
