import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, SafeAreaView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // for icons
import { router, useNavigation } from 'expo-router';
import { fonts } from '@/hooks/useCacheResources';
import { MotiView } from 'moti';
import { Spacer } from '@/components/Spacer';
import { ButtonVariation, LabelButton } from '@/components/LabelButton';

const { width, height } = Dimensions.get('window');

export const ImageSelect = () => {
  const navigation = useNavigation();
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showImageAdded, setShowImageAdded] = useState(false);
  const [showFullScreen, setShowFullScreen] = useState(false);

  const handleImageAddhandler = () => {
    setShowImageAdded(true)
    setShowOptionsModal(false)
  }

  const imageUrl = 'https://picsum.photos/400/900'; // Replace with your real image

  return (
    <>
      {showFullScreen ? (
        // FULL SCREEN MODE
        <View style={styles.fullscreenContainer}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setShowFullScreen(false)}
            style={{ flex: 1 }}
          >
            <Image source={{ uri: imageUrl }} style={styles.fullscreenImage} />
          </TouchableOpacity>
        </View>
      ) : (
        // NORMAL MODE
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            {/* Top Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>

            {/* Image with Floating Buttons */}
            <View style={styles.imageContainer}>
              <Image source={{ uri: imageUrl }} style={styles.mainImage} />

              {/* Floating Buttons inside image */}
              <View style={styles.floatingButtons}>
                <TouchableOpacity style={styles.circleButton} onPress={() => setShowOptionsModal(true)}>
                  <Ionicons name="ellipsis-horizontal" size={20} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.circleButton} onPress={() => setShowFullScreen(true)}>
                  <Ionicons name="chevron-down" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Details Section */}
            <View style={styles.detailsContainer}>
              <View style={{ width: '78%' }}>
                <Text style={styles.title}>Avant-Garde Runway Model</Text>
                <Text style={styles.description}>
                  Model in a yellow jumpsuit with oversized pockets, red glossy headpiece, and white visor on a runway with blurred audience.
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
            <Text style={[styles.description, { fontSize: 16, textAlign: 'center', marginVertical: 10, marginBottom: 20 }]}>
              Your collection is your own curated list of images collected over time.
            </Text>
            <Image source={{ uri: imageUrl }} style={styles.modalImage} />
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
            <Text style={[styles.description, { fontSize: 16, textAlign: 'center', marginVertical: 10, marginBottom: 20 }]}>
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
            <Text style={[styles.description, { fontSize: 16, textAlign: 'center', marginVertical: 10, marginBottom: 20 }]}>
              Avant-Garde... has been added to your collection .
            </Text>
            <Image source={require('../../../assets/images/imageAdded.png')} style={styles.addedImage} />

            <Spacer marginBottom={10} marginTop={30} />
            <LabelButton
              title="Close"
              handleClick={() => {
                setShowImageAdded(false)
                router.push({
                  pathname: '/retouch-image',
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
    backgroundColor: '#fff',
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
    position: 'absolute',
    top: 30,
    left: 30,
    zIndex: 10,
    backgroundColor: 'black',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 33,
    width: 55,
    height: 55
  },
  imageContainer: {
    position: 'relative', // NEW - so buttons stay inside the image
  },
  mainImage: {
    width: width,
    height: height * 0.6,
    borderRadius: 32,
    resizeMode: 'cover',
    paddingHorizontal: 10
  },
  modalImage: {
    width: '100%',
    height: height * 0.4,
    borderRadius: 32,
    resizeMode: 'cover',
    // paddingHorizontal: 10
  },
  addedImage: {
    borderRadius: 32,
    resizeMode: 'cover',
    alignSelf: 'center'
    // paddingHorizontal: 10
  },
  floatingButtons: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    flexDirection: 'row',
    gap: 12,
  },
  circleButton: {
    width: 55,
    height: 55,
    borderRadius: 33,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  detailsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 22,
    width: "100%",
    alignSelf: "center",
    fontFamily: fonts.primary.semibold,
  },
  description: {
    marginTop: 10,
    fontSize: 12,
    fontFamily: fonts.primary.medium,
    color: '#555',
  },
  tag: {
    alignSelf: 'flex-start',
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
    transform: [{ rotate: "10deg" }]
  },
  tagTextNormal: {
    fontSize: 18,
    fontFamily: fonts.primary.semibold,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 24,
    paddingTop: 48,
    borderRadius: 20,
    marginBottom: 20
  },
  fullscreenContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  fullscreenImage: {
    width: width,
    height: height,
    resizeMode: 'cover',
  },
});
