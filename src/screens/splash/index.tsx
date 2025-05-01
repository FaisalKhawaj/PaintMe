import React, { useRef } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import Swiper from "react-native-swiper";
import { styles } from "./styles";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Container } from "@/components/ScreenWrapper";
import { globalstyles } from "@/src/styles/globalstyles";

const slides = [
  {
    title: "Ultra Resolution",
    description:
      "No more pixelated graphics or low-quality visuals. Every image is crafted for maximum impact.",
    backgroundColor: "#F97316",
    image: require("../../../assets/images/splash1.png"),
  },
  {
    title: "Premium Images",
    description: "Unlock unlimited images by a world of global creators.",
    backgroundColor: "#9CA3AF",
    image: require("../../../assets/images/splash2.png"),
  },
  {
    title: "Effortless Image Generation",
    description:
      "Simply type a prompt, choose a style, and watch as it brings it to life.",
    backgroundColor: "#3B82F6",
    image: require("../../../assets/images/splash3.png"),
  },
];

export const Splash = () => {
  const swiperRef = useRef<any>(null); // Use any to avoid type error

  const handleNext = (index: number) => {
    if (swiperRef.current) {
      if (index < slides.length - 1) {
        swiperRef.current.scrollBy(1);
      } else {
        router.replace("/(auth)/camera-access");
      }
    }
  };

  return (
    <Container style={globalstyles.fullScreen}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Swiper
        ref={swiperRef}
        loop={false}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        paginationStyle={{ bottom: 90 }}
      >
        {slides.map((slide, index) => (
          <ImageBackground
            key={index}
            style={styles.slide}
            imageStyle={{ resizeMode: "cover" }}
            source={slide.image}
          >
            <View style={styles.content}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{slide.title}</Text>
                <Text style={styles.description}>{slide.description}</Text>
                <View style={styles.introBox}>
                  <Text style={styles.intro}>intro</Text>
                </View>
              </View>

              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => handleNext(index)}
              >
                <Ionicons name="arrow-forward" size={25} color={"#fff"} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ))}
      </Swiper>
    </Container>
  );
};
