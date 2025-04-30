import React, { useState } from 'react';
import { View, Image, StyleSheet, ScrollView, SafeAreaView, Pressable, Text, TouchableOpacity, Modal } from 'react-native';
import { MotiView } from 'moti';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { RFValue } from 'react-native-responsive-fontsize';
import { fonts } from '@/hooks/useCacheResources';
import { Ionicons } from '@expo/vector-icons';
import { BlurredIcon } from '@/components/BlurredIcon';
import { Spacer } from '@/components/Spacer';
import { ButtonVariation, LabelButton } from '@/components/LabelButton';

const images = [
  'https://picsum.photos/seed/picsum1/400/600',
  'https://picsum.photos/seed/picsum2/400/500',
  'https://picsum.photos/seed/picsum3/400/650',
  'https://picsum.photos/seed/picsum4/400/550',
  'https://picsum.photos/seed/picsum5/400/600',
  'https://picsum.photos/seed/picsum6/400/500',
  'https://picsum.photos/seed/picsum7/400/500',
  'https://picsum.photos/seed/picsum8/400/500',
];

const leftColumn = images.filter((_, index) => index % 2 === 0);
const rightColumn = images.filter((_, index) => index % 2 !== 0);

export const OpenedCollections = () => {
  const router = useRouter();
  const { title = "pixel parade", color = "#D4F8E1" } = useLocalSearchParams();
  const [showImagePinched, setShowImagePinched] = useState(false);

  const handleImagePress = (imgUri: string) => {
    router.push({
      pathname: '/(main)/tabs/collection/image-collections',
      params: { imageUrl: imgUri },
    });
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Modal visible={showImagePinched} transparent animationType="slide">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setShowImagePinched(false)}
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
                styles.descriptionText
              ]}
            >
              Pinch to zoom in and out of the image gallery
            </Text>


            <Spacer marginBottom={10} marginTop={30} />
            <LabelButton
              title="Got it"
              handleClick={() => {
                setShowImagePinched(false);
              }}
              variation={ButtonVariation.default}
            />
          </View>
        </TouchableOpacity>
      </Modal>
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <BlurredIcon
            icon="ArrowLeftIcon"
            handleClick={handleBack}
          />
        </View>

        <MotiView
          style={[styles.tagContainer, { backgroundColor: color }]}
          from={{ translateY: -50, rotate: '-8deg' }}
          animate={{ translateY: 0, rotate: '8deg' }}
          transition={{ delay: 200, duration: 500 }}
        >
          <Text style={styles.tagText}>{title}</Text>
        </MotiView>

        <TouchableOpacity
          style={styles.circleButton}
          onPress={() => setShowImagePinched(true)}
        >
          <Ionicons
            name={'add'}
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </View>

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
                  type: 'timing',
                  duration: 500,
                  delay: index * 150,
                }}
                style={[styles.imageWrapper, styles.leftImageWrapper]}
              >
                <Pressable onPress={() => handleImagePress(img)}>
                  <Image
                    source={{ uri: img }}
                    style={[
                      styles.image,
                      index === 0 ? styles.leftImageHeightFirst : styles.leftImageHeight,
                    ]}
                  />
                </Pressable>
              </MotiView>
            ))}
          </View>

          <View style={styles.columnSpacer} />

          {/* Right Column */}
          <View style={styles.column}>
            {rightColumn.map((img, index) => (
              <MotiView
                key={index}
                from={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'timing',
                  duration: 500,
                  delay: index * 150,
                }}
                style={[styles.imageWrapper, styles.rightImageWrapper]}
              >
                <Pressable onPress={() => handleImagePress(img)}>
                  <Image
                    source={{ uri: img }}
                    style={[
                      styles.image,
                      index === 0 ? styles.rightImageHeightFirst : styles.rightImageHeight,
                    ]}
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    top: 100,
    flexDirection: 'row',
    zIndex: 1000,
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  iconWrapper: {
    position: 'relative',
  },
  container: {
    position: 'relative',
    paddingBottom: 40,
  },
  columns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
  },
  columnSpacer: {
    marginHorizontal: 6,
  },
  imageWrapper: {
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: '#eee',
  },
  leftImageWrapper: {
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  rightImageWrapper: {
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  leftImageHeightFirst: {
    height: 380,
  },
  leftImageHeight: {
    height: 400,
  },
  rightImageHeightFirst: {
    height: 320,
  },
  rightImageHeight: {
    height: 380,
  },
  tagContainer: {
    borderRadius: 14,
    backgroundColor: "#CAF7E3",
    paddingVertical: 8,
    paddingHorizontal: 22,
    alignSelf: "center",
    transform: [{ rotate: "10deg" }],
  },
  tagText: {
    color: "#3E4E50",
    fontSize: RFValue(16),
    fontFamily: fonts.primary.semibold,
    textAlign: "center",
  },
  circleButton: {
    width: 55,
    height: 55,
    borderRadius: 33,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
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
  addedImage: {
    // borderRadius: 32,
    // resizeMode: "cover",
    width: 54,
    height: 54,
    alignSelf: "center",
    // paddingHorizontal: 10
  },
  description: {
    marginTop: 10,
    fontSize: RFValue(12),
    fontFamily: fonts.primary.medium,
    color: "#8C919E",
  },
  descriptionText: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
    marginBottom: 20,
    width: '90%',
    marginHorizontal: 'auto'
  },
});
