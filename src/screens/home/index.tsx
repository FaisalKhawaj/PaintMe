import React from "react";
import { View, Image, ScrollView, Pressable } from "react-native";
import { MotiView } from "moti";
import { useRouter } from "expo-router"; // <-- Expo Router hook
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const images = [
  "https://picsum.photos/seed/picsum1/400/600",
  "https://picsum.photos/seed/picsum2/400/500",
  "https://picsum.photos/seed/picsum3/400/650",
  "https://picsum.photos/seed/picsum4/400/550",
  "https://picsum.photos/seed/picsum5/400/600",
  "https://picsum.photos/seed/picsum6/400/500",
  "https://picsum.photos/seed/picsum7/400/500",
  "https://picsum.photos/seed/picsum8/400/500",
];

const leftColumn = images.filter((_, index) => index % 2 === 0);
const rightColumn = images.filter((_, index) => index % 2 !== 0);

export const Home = () => {
  const router = useRouter(); // <-- Use router from expo-router

  const handleImagePress = (imgUri: string) => {
    router.push({
      // pathname: '/create-similar',
      pathname: "/image-select",
      params: { imageUrl: imgUri }, // <-- pass image url as param
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.columns}>
          {/* Left Column */}
          <View style={styles.column}>
            {leftColumn.map((img, index) => (
              <MotiView
                key={index}
                from={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: "timing",
                  duration: 500,
                  delay: index * 150,
                }}
                style={styles.imageWrapper}
              >
                <Pressable onPress={() => handleImagePress(img)}>
                  <Image
                    source={{ uri: img }}
                    style={[styles.image, { height: index === 0 ? 240 : 250 }]}
                  />
                </Pressable>
              </MotiView>
            ))}
          </View>

          {/* Right Column */}
          <View style={styles.column}>
            {rightColumn.map((img, index) => (
              <MotiView
                key={index}
                from={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: "timing",
                  duration: 500,
                  delay: index * 150,
                }}
                style={styles.imageWrapper}
              >
                <Pressable onPress={() => handleImagePress(img)}>
                  <Image
                    source={{ uri: img }}
                    style={[styles.image, { height: index === 0 ? 180 : 250 }]}
                  />
                </Pressable>
              </MotiView>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
