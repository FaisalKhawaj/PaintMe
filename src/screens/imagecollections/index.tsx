import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  Share,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // for icons
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { MotiView } from "moti";
import { Spacer } from "@/components/Spacer";
import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { BlurredRoundedIcon } from "@/components/BlurredRoundedIcon";
import { styles } from "./styles";
import { useImageContext } from "@/src/context/ImageContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomModal } from "@/components/ui/CustomModal";
import { Container } from "@/components/ScreenWrapper";
import { globalstyles } from "@/src/styles/globalstyles";

export const ImageCollections = () => {
  const { showFullImage, setShowFullImage } = useImageContext();
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  // Animation values
  const [showIcons, setShowIcons] = useState(false);

  // Trigger animation on click
  const handleToggleIcons = () => {
    setShowIcons((prev) => !prev);
  };

  const handleImageAddhandler = () => {
    setShowOptionsModal(false);
  };

  const imageUrl = "https://picsum.photos/400/900"; // Replace with your real image
  const handleBack = () => {
    handleToggleIcons();
    router.back();
  };
  const handleShare = async () => {
    handleToggleIcons();
    try {
      await Share.share({
        message: "Check out this edited image!",
        url: imageUrl,
        title: "Share Image",
      });
    } catch (error) {
      console.log("Error sharing:");
    }
  };

  const handleLike = () => {
    handleToggleIcons();
    setShowOptionsModal(true);
  };

  return (
    <>
      {showFullImage ? (
        // FULL SCREEN MODE WITH Moti ANIMATION
        <MotiView
          style={styles.fullscreenContainer}
          from={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "timing", duration: 800 }}
        >
          <Pressable
            onPress={() => setShowFullImage(false)}
            style={globalstyles.fullScreen}
          >
            <MotiView
              style={styles.fullscreenImageContainer}
              from={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.1, opacity: 1 }}
              transition={{ type: "timing", duration: 500 }}
            >
              <Image
                source={require("@/assets/images/cat.png")}
                style={styles.fullscreenImage}
              />
            </MotiView>
          </Pressable>

          {/* Center Bottom Button */}
          <TouchableOpacity
            style={[
              styles.circleButton,
              styles.iconStyle
            ]}
            onPress={() => setShowFullImage(false)}
          >
            <Ionicons name={"close"} size={20} color="white" />
          </TouchableOpacity>
        </MotiView>
      ) : (
        // NORMAL MODE
        <SafeAreaView
          edges={["right", "top", "bottom", "left"]}
          style={styles.safeArea}
        >
          <StatusBar style="dark" translucent backgroundColor="transparent" />

          <View style={[styles.container, { zIndex: 1000 }]}>
            {/* Top Back Button */}

            <BlurredRoundedIcon
              position="absolute"
              icon="ArrowLeftIcon"
              handleClick={handleBack}
            />

            <View style={styles.imageContainer}>
              <Image
                source={require("@/assets/images/cat.png")}
                style={styles.mainImage}
              />

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
                  handleClick={handleShare}
                />
                <BlurredRoundedIcon
                  position="relative"
                  icon="HeartIcon"
                  handleClick={handleLike}
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
                  onPress={() => setShowFullImage(true)}
                >
                  <Ionicons name="arrow-down" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Details Section */}
            <View style={styles.detailsContainer}>
              <View style={{ width: "78%" }}>
                <Text style={styles.title}>Ginger Cat Close-Up</Text>
                <Text style={styles.description}>
                  Ginger tabby cat with fluffy fur gazes upward against a
                  vibrant red background, creating a warm and serene portrait
                </Text>
              </View>

              <View style={styles.tagStyles}>
                <MotiView
                  style={styles.tag}
                  from={{ scale: 0, rotate: "10deg" }}
                  animate={{ scale: 1, rotate: "-10deg" }}
                  transition={{ delay: 300, type: "spring" }}
                >
                  <Text style={styles.tagText}>animal</Text>
                </MotiView>
              </View>
            </View>
          </View>
        </SafeAreaView>
      )}

      <Container>
        <CustomModal
          isVisible={showOptionsModal}
          setIsVisble={setShowOptionsModal}
        >
          <View style={{ flexGrow: 1 }}>
            <View style={styles.tagStylesModal}>
              <MotiView
                style={styles.tag}
                from={{ scale: 0, rotate: "0deg" }}
                animate={{ scale: 1, rotate: "0deg" }}
                transition={{ delay: 300, type: "spring" }}
              >
                <Text style={styles.tagTextNormal}>pixel parade</Text>
              </MotiView>
            </View>
            <Text
              style={[
                styles.description,
                styles.descriptionText
              ]}
            >
              Are you sure you want to remove this image from the collection?
            </Text>
            <Image
              source={require("@/assets/images/empty.png")}
              style={styles.modalImage}
            />
            <Spacer marginBottom={10} marginTop={10} />
            <View style={styles.tagStylesModal}>
              <MotiView
                style={styles.tag}
                from={{ scale: 0, rotate: "0deg" }}
                animate={{ scale: 1, rotate: "0deg" }}
                transition={{ delay: 300, type: "spring" }}
              >
                <Text style={styles.tagTextNormal}>pixel parade</Text>
              </MotiView>
            </View>
            <Text
              style={[
                styles.description,
                styles.descriptionText
              ]}
            >
              20 images
            </Text>
            <Spacer marginBottom={10} marginTop={30} />
            <LabelButton
              title="Yeah , Remove Image"
              handleClick={handleImageAddhandler}
              variation={ButtonVariation.secondary}
            />
            <Spacer marginBottom={10} marginTop={10} />
            <LabelButton
              title="No Keep Image"
              handleClick={handleImageAddhandler}
              variation={ButtonVariation.default}
            />
          </View>
        </CustomModal>
      </Container>

      {/* Modal */}
    </>
  );
};
