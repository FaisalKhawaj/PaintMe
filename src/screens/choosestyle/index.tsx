import { ButtonVariation, IconButton } from "@/components/IconButton";
import { Ionicons } from "@expo/vector-icons";
import { MotiView } from "moti";
import React, { useState } from "react";
import { styles } from "./styles";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { Container } from "@/components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { globalstyles } from "@/src/styles/globalstyles";

const stylesOptions = [
  { label: "Abstract", image: require("@/assets/images/abstract.png") },
  {
    label: "Photorealistic",
    image: require("@/assets/images/photorealistic.png"),
  },
  { label: "Cyberpunk", image: require("@/assets/images/cyberpunk.png") },
  { label: "Painterly", image: require("@/assets/images/painterly.png") },
  { label: "Cartoon", image: require("@/assets/images/cartoon.png") },
  { label: "Sketch", image: require("@/assets/images/sketch.png") },
  { label: "3D", image: require("@/assets/images/3d.png") },
];

export const ChooseStyle = () => {
  const [selectedStyle, setSelectedStyle] = useState(stylesOptions[0]);

  const handleSelect = (option: any) => {
    setSelectedStyle(option);
  };

  const handleContinue = () => {
    router.push("/tabs/create/choose-orientation");
  };

  return (
    <Container style={globalstyles.fullScreen}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <ImageBackground
        source={selectedStyle.image}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay} />

        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.topSection}>
            <MotiView
              style={styles.tag}
              from={{ scale: 0, rotate: "0deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              transition={{ delay: 300, type: "spring" }}
            >
              <Text style={styles.tagTextNormal}>image creation</Text>
            </MotiView>
            <Text style={styles.title}>Choose an image style</Text>
          </View>

          {/* Replace this with your own Continue button */}
          <TouchableOpacity style={styles.continueButton}>
            <View style={styles.buttonGroup}>
              {stylesOptions.map((option) => (
                <TouchableOpacity
                  key={option.label}
                  style={[
                    styles.optionButton,
                    selectedStyle.label === option.label &&
                      styles.selectedButton,
                  ]}
                  onPress={() => handleSelect(option)}
                >
                  <Text style={[styles.optionText]}>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <IconButton
              title="Continue"
              handleClick={handleContinue}
              rightIcon={<Ionicons name="arrow-forward" />}
              iconSize={18}
              variation={ButtonVariation.secondary}
              // style={styles.button}
            />
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </Container>
  );
};
