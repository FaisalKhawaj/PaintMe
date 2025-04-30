import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Dimensions,
  Pressable,
  Share
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // for icons
import { router, useNavigation } from "expo-router";
import {
useSharedValue,
} from "react-native-reanimated";

import { fonts } from "@/hooks/useCacheResources";
import { MotiView } from "moti";
import { Spacer } from "@/components/Spacer";
import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { BlurredRoundedIcon } from "@/components/BlurredRoundedIcon";
import { RFValue } from "react-native-responsive-fontsize";
import { IconButton } from "@/components/IconButton";
import { ExpandIcon } from "@/assets/svg/ExpandIcon";
import { styles } from "./styles";

const { width, height } = Dimensions.get("window");

export const ImageSelect = () => {
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
    handleToggleIcons()
    router.back();
  };
  const handleShare = async () => {
    handleToggleIcons()
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

  const handleLike = () => {
    handleToggleIcons()
    setShowOptionsModal(true)
  }

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
                source={require('@/assets/images/avant.png')}
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

            {/* Image with Floating Buttons */}
            <View style={styles.imageContainer}>
              <Image source={require('@/assets/images/avant.png')} style={styles.mainImage} />
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
                <Pressable
                  style={styles.circleButton}
                  onPress={handleToggleIcons}
                >
                  <Ionicons
                    name={!showIcons ? "ellipsis-horizontal" : "ellipsis-vertical"}
                    size={20}
                    color="white"
                  />
                </Pressable>

                <Pressable
                  style={styles.circleButton}
                  onPress={() => setShowFullScreen(true)}
                >
                  <Ionicons name="arrow-down" size={20} color="white" />
                </Pressable>
              </View>
            </View>

            {/* Details Section */}
            <View style={styles.detailsContainer}>
              <View style={{ width: "78%" }}>
                <Text style={styles.title}>Avant-Garde Runway Model</Text>
                <Text style={styles.description}>
                  Model in a yellow jumpsuit with oversized pockets, red glossy
                  headpiece, and white visor on a runway with blurred audience.
                </Text>
              </View>

              <View style={styles.tagStyles}>
                <MotiView
                  style={styles.tag}
                  from={{ scale: 0, rotate: "10deg" }}
                  animate={{ scale: 1, rotate: "-10deg" }}
                  transition={{ delay: 300, type: "spring" }}
                >
                  <Text style={styles.tagText}>runway</Text>
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
                <Text style={styles.tagTextNormal}>add to collection</Text>
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
              Your collection is your own curated list of images collected over
              time.
            </Text>
            <Image source={require('@/assets/images/avant.png')} style={styles.modalImage} />
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
              title="Add to Collection"
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
            <View style={styles.tagStylesModal}>
              <MotiView
                style={styles.tag}
                from={{ scale: 0, rotate: "0deg" }}
                animate={{ scale: 1, rotate: "0deg" }}
                transition={{ delay: 300, type: "spring" }}
              >
                <Text style={styles.tagTextNormal}>add to collection</Text>
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
              Avant-Garde... has been added to your collection .
            </Text>
            <Image
              source={require("../../../assets/images/imageAdded.png")}
              style={styles.addedImage}
            />

            <Spacer marginBottom={10} marginTop={30} />
            <LabelButton
              title="Close"
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


