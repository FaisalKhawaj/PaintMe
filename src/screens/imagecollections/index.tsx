import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Dimensions,
  Pressable,
  Share
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // for icons
import { router, useNavigation } from "expo-router";
import Animated, {
  Easing,
  withSpring,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { fonts } from "@/hooks/useCacheResources";
import { MotiView } from "moti";
import { Spacer } from "@/components/Spacer";
import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { BlurredRoundedIcon } from "@/components/BlurredRoundedIcon";
import { RFValue } from "react-native-responsive-fontsize";
import { IconButton } from "@/components/IconButton";

const { width, height } = Dimensions.get("window");

export const ImageCollections = () => {
  const navigation = useNavigation();
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showImageAdded, setShowImageAdded] = useState(false);
  const [showFullScreen, setShowFullScreen] = useState(false);
  // Animation values
  const animation = useSharedValue(0);
  const [showIcons, setShowIcons] = useState(false);

  // Trigger animation on click
  const handleToggleIcons = () => {
    setShowIcons((prev) => !prev);
  };

  const handleImageAddhandler = () => {
    setShowImageAdded(true);
    setShowOptionsModal(false);
  };

  const imageUrl = "https://picsum.photos/400/900"; // Replace with your real image
  const handleBack = () => {
    router.back();
  };
  const handleShare = async () => {
    try {
      await Share.share({
        message: 'Check out this edited image!',
        url: imageUrl,
        title: 'Share Image'
      });
    } catch (error) {
      console.log('Error sharing:');
    }
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
            // activeOpacity={1}
            onPress={() => setShowFullScreen(false)}
            style={{ flex: 1 }}
          >
            <MotiView
              style={styles.fullscreenImageContainer}
              from={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.1, opacity: 1 }} // Slightly zoom in the image
              transition={{ type: "timing", duration: 500 }}
            >
              <Image
                source={{ uri: imageUrl }}
                style={styles.fullscreenImage}
              />
            </MotiView>
          </Pressable>
        </MotiView>
      ) : (
        // NORMAL MODE
        <SafeAreaView style={styles.safeArea}>
          <View style={[styles.container, { zIndex: 1000 }]}>
            {/* Top Back Button */}

            <BlurredRoundedIcon
              position="absolute"
              icon="ArrowLeftIcon"
              handleClick={handleBack}
            />
            {/* <BlurredRoundedIcon icon="BrushIcon" handleClick={handleBack} /> */}
            {/* <BlurredRoundedIcon icon="LayerIcon" handleClick={handleBack} /> */}

            {/* <BlurredRoundedIcon icon="BrushIcon" handleClick={handleBack} />
            <BlurredRoundedIcon icon="SendIcon" handleClick={handleBack} /> */}
            {/* <BlurredRoundedIcon icon="HeartIcon" handleClick={handleBack} /> */}

            {/* Image with Floating Buttons */}
            <View style={styles.imageContainer}>
              <Image source={{ uri: imageUrl }} style={styles.mainImage} />

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
                  handleClick={() => setShowOptionsModal(true)}
                />
              </MotiView>
              {/* Floating Buttons inside image */}
              <View style={styles.floatingButtons}>
                <TouchableOpacity
                  style={styles.circleButton}
                  onPress={handleToggleIcons}
                >
                  <Ionicons
                    name={!showIcons ? "ellipsis-horizontal" : "ellipsis-vertical"}
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
              <View style={{ width: "78%" }}>
                <Text style={styles.title}>Ginger Cat Close-Up</Text>
                <Text style={styles.description}>
                  Ginger tabby cat with fluffy fur gazes upward against a vibrant red background, creating a warm and serene portrait
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

      {/* Modal */}
      <Modal visible={showOptionsModal} transparent animationType="slide">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setShowOptionsModal(false)}
          activeOpacity={1}
        >
          <View style={styles.modalContent}>
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
                {
                  fontSize: 16,
                  textAlign: "center",
                  marginVertical: 10,
                  marginBottom: 20,
                },
              ]}
            >
              Are you sure you want to remove this image from the collection?
            </Text>
            <Image source={require("@/assets/images/empty.png")} style={styles.modalImage} />
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
                {
                  fontSize: 16,
                  textAlign: "center",
                  marginVertical: 10,
                  marginBottom: 20,
                },
              ]}
            >
              20 images
            </Text>
            <Spacer marginBottom={10} marginTop={30} />
            <LabelButton
              title="Yeah Remove Image"
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
        </TouchableOpacity>
      </Modal>
      <Modal visible={showImageAdded} transparent animationType="slide">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setShowImageAdded(false)}
          activeOpacity={1}
        >
          <View style={styles.modalContent}>
            <Image
              source={require("../../../assets/images/pinch.png")}
              style={styles.addedImage}
            />
            <Text
              style={[
                styles.description,
                {
                  fontSize: 16,
                  textAlign: "center",
                  marginVertical: 10,
                  marginBottom: 20,
                },
              ]}
            >
              Pinch to zoom in and out of the image gallery
            </Text>


            <Spacer marginBottom={10} marginTop={30} />
            <LabelButton
              title="Got it"
              handleClick={() => {
                setShowImageAdded(false);
                router.push({
                  pathname: "/retouch-image",
                  // pathname: "/create-similar", //here you can test create profile page
                  // params: { imageUrl: imgUri }, // <-- pass image url as param
                });
              }}
              variation={ButtonVariation.default}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  tagStyles: {
    borderRadius: 10,
    backgroundColor: "#F8D4B2",
    alignSelf: "center",
    transform: [{ rotate: "10deg" }],
  },
  tagStylesModal: {
    borderRadius: 10,
    backgroundColor: "#D1F2EB",
    alignSelf: "center",
  },
  backButton: {
    position: "absolute",
    top: 30,
    left: 30,
    zIndex: 10,
    backgroundColor: "black",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 33,
    width: 55,
    height: 55,
  },
  imageContainer: {
    position: "relative", // NEW - so buttons stay inside the image
  },
  mainImage: {
    width: width,
    height: height * 0.6,
    borderRadius: 32,
    resizeMode: "cover",
    paddingHorizontal: 10,
  },
  fullscreenImageContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    // width: 200,
    // height: height * 0.4,
    borderRadius: 32,
    marginHorizontal: 'auto',
    marginVertical: 20,
    resizeMode: "cover",
    // paddingHorizontal: 10
  },
  addedImage: {
    // borderRadius: 32,
    // resizeMode: "cover",
    width: 54,
    height: 54,
    alignSelf: "center",
    // paddingHorizontal: 10
  },
  floatingButtons: {
    position: "absolute",
    bottom: 30,
    left: 30,
    flexDirection: "row",
    gap: 12,
  },
  circleButton: {
    width: 55,
    height: 55,
    borderRadius: 33,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  detailsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: RFValue(20),
    width: "100%",
    alignSelf: "center",
    fontFamily: fonts.primary.semibold,
  },
  description: {
    marginTop: 10,
    fontSize: RFValue(12),
    fontFamily: fonts.primary.medium,
    color: "#555",
  },
  tag: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    color: "#4A403A",
    fontSize: 18,
    fontFamily: fonts.primary.semibold,
  },
  tagText: {
    fontSize: 18,
    fontFamily: fonts.primary.semibold,
    // transform: [{ rotate: "10deg" }],
  },
  tagTextNormal: {
    fontSize: 18,
    fontFamily: fonts.primary.semibold,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 24,
    paddingTop: 48,
    borderRadius: 20,
    marginBottom: 20,
  },
  fullscreenContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  fullscreenImage: {
    width: width,
    height: height,
    resizeMode: "cover",
  },
});
