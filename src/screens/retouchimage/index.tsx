import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, SafeAreaView, Dimensions, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'; // for icons
import { useNavigation } from 'expo-router';
import { fonts } from '@/hooks/useCacheResources';
import { MotiView } from 'moti';
import { Spacer } from '@/components/Spacer';
import { ButtonVariation, LabelButton } from '@/components/LabelButton';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';

const { width, height } = Dimensions.get('window');

export const RetouchImage = () => {
  const navigation = useNavigation();
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showImageAdded, setShowImageAdded] = useState(false);
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [count, setCount] = useState(0); // Initial state for the counter

  const increment = () => setCount(count + 1); // Increment the count
  const decrement = () => setCount(count - 1); // Decrement the count

  const handleImageAddhandler = () => {
    setShowImageAdded(true)
    setShowOptionsModal(false)
  }

  const imageUrl = 'https://picsum.photos/400/900'; // Replace with your real image

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            {/* Image with Floating Buttons */}
            <View style={styles.tagStylesModal}>
              <MotiView
                style={styles.tag}
                from={{ scale: 0, rotate: "0deg" }}
                animate={{ scale: 1, rotate: "0deg" }}
                transition={{ delay: 300, type: "spring" }}
              >
                <Text style={styles.tagTextNormal}>retouch image</Text>
              </MotiView>
            </View>
            <View style={styles.imageContainer}>
              <Image source={{ uri: imageUrl }} style={styles.mainImage} />
            </View>

            {/* Details Section */}
            <View style={styles.detailsContainer}>
              <TextArea
                containerStyle={{ height: 100 }}
                placeholder="Describe the changes you want made."
                keyboardType="default"
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
              <View style={styles.counter}>
                <TouchableOpacity style={styles.button} onPress={decrement}>
                  <Ionicons name="remove" size={20} color="black" />
                </TouchableOpacity>

                <View style={styles.countContainer}>
                  <Text style={styles.countText}>{count}</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={increment}>
                  <Ionicons name="add" size={20} color="black" />
                </TouchableOpacity>
              </View>
              <View style={{ width: '60%' }}>
                <LabelButton
                  // btnWidth="50%"
                  title="Generate"
                  handleClick={() => { }}
                  variation={ButtonVariation.default}
                />
              </View>

            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
    backgroundColor: "#F0F4F0",
    marginVertical: 10,
    alignSelf: "center",
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
  counter: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    width: '40%',
    paddingLeft: 0,
    paddingRight: 10
  },
  button: {
    backgroundColor: "#EDEBEE", // Gray background for the buttons
    borderRadius: 16, // Makes the button circular
    padding: 15, // Padding to make the button bigger
    // margin: 10, // Space between buttons and counter
  },
  countContainer: {
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  countText: {
    fontSize: 26,
    color: "#000",
    fontFamily: fonts.primary.bold,
  },
});
