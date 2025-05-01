import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // for icons
import { router } from "expo-router";

import { MotiView } from "moti";
import { BlurredRoundedIcon } from "@/components/BlurredRoundedIcon";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalstyles } from "@/src/styles/globalstyles";
import { ExpandIcon } from "@/assets/svg/ExpandIcon";

export const GeneratedImageSelect = () => {
  const [showFullScreen, setShowFullScreen] = useState(false);
  // Animation values
  const [showIcons, setShowIcons] = useState(false);

  // Trigger animation on click
  const handleToggleIcons = () => {
    setShowIcons((prev) => !prev);
  };

  const handleBack = () => {
    handleToggleIcons();
    router.back();
  };

  return (
    <>
      {showFullScreen ? (
        // FULL SCREEN MODE WITH Moti ANIMATION
        <MotiView
          style={styles.fullscreenContainer}
          from={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "timing", duration: 800 }}
        >
          <Pressable
            onPress={() => setShowFullScreen(false)}
            style={globalstyles.fullScreen}
          >
            <MotiView
              style={styles.fullscreenImageContainer}
              from={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.1, opacity: 1 }}
              transition={{ type: "timing", duration: 500 }}
            >
              <Image
                source={require("@/assets/images/laptop.png")}
                style={styles.fullscreenImage}
              />
            </MotiView>

            {/* Add this close button */}
            <MotiView
              style={styles.fullscreenCloseButton}
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 300 }}
            >
              <Pressable
                onPress={() => setShowFullScreen(false)}
                style={styles.closeButton}
              >
                <Ionicons name="close" size={24} color="white" />
              </Pressable>
            </MotiView>
          </Pressable>
        </MotiView>
      ) : (
        // NORMAL MODE
        <SafeAreaView style={styles.safeArea}>
          <View style={[styles.container, { zIndex: 1000 }]}>
            {/* Top Back Button */}

            <View style={styles.leftSpace}>
              <BlurredRoundedIcon
                position="absolute"
                icon="ArrowLeftIcon"
                handleClick={handleBack}
              />
            </View>

            <View style={styles.imageContainer}>
              <Image
                source={require("@/assets/images/laptop.png")}
                style={styles.mainImage}
              />
              <View style={styles.expandIcon}>
                <Pressable onPress={() => setShowFullScreen(true)}>
                  <ExpandIcon />
                </Pressable>
              </View>
              <MotiView
                from={{
                  opacity: 0,
                  translateY: 50,
                }}
                animate={{
                  opacity: showIcons ? 1 : 0,
                  translateY: showIcons ? 0 : 50,
                }}
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  // duration: 200,
                }}
                style={{
                  position: "absolute",
                  bottom: 140,
                  gap: 20,
                }}
              >
                <BlurredRoundedIcon
                  position="relative"
                  icon="BrushIcon"
                  handleClick={handleBack}
                />
                <BlurredRoundedIcon
                  position="relative"
                  icon="LayerIcon"
                  handleClick={handleBack}
                />
                <BlurredRoundedIcon
                  position="relative"
                  icon="SendIcon"
                  handleClick={handleBack}
                />
                <BlurredRoundedIcon
                  position="relative"
                  icon="HeartIcon"
                  handleClick={handleBack}
                />
              </MotiView>
              {/* Floating Buttons inside image */}
              <View style={styles.floatingButtons}>
                <TouchableOpacity
                  style={styles.circleButton}
                  onPress={handleToggleIcons}
                >
                  <Ionicons
                    name={
                      !showIcons ? "ellipsis-horizontal" : "ellipsis-vertical"
                    }
                    size={20}
                    color="white"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.circleButton}
                  onPress={() => setShowFullScreen(true)}
                >
                  <Ionicons name="arrow-down" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Details Section */}
            <View style={styles.detailsContainer}>
              <View style={{ width: "70%" }}>
                <Text style={styles.title}>Person with Laptop</Text>
                <Text style={styles.description}>
                  Person coding on a laptop with a red panel in the background,
                  wearing a cap and an overall.
                </Text>
              </View>

              <View style={styles.tagStyles}>
                <MotiView
                  style={styles.tag}
                  from={{ scale: 0, rotate: "10deg" }}
                  animate={{ scale: 1, rotate: "-10deg" }}
                  transition={{ delay: 300, type: "spring" }}
                >
                  <Text style={styles.tagText}>generated</Text>
                </MotiView>
              </View>
            </View>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};
