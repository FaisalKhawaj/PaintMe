import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Dimensions, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { fonts } from '@/hooks/useCacheResources';
import { MotiView } from 'moti';
import { ButtonVariation, LabelButton } from '@/components/LabelButton';
import TextArea from '@/components/TextArea';
import { BlurredRoundedIcon } from '@/components/BlurredRoundedIcon';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

export const CreateSimilar = () => {
  const [count, setCount] = useState(1);
  const [images, setImages] = useState<string[]>([]);
  const [showControls, setShowControls] = useState(true);
  const [showGeneratedImages, setShowGeneratedImages] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [selectedImages, setSelectedImages] = useState<number[]>([]); // Track selected images

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 1 ? prev - 1 : 1));

  const handleGenerate = () => {
    const generatedImages = Array(count).fill('').map(() => 'https://picsum.photos/400/400?random=' + Math.random());
    setImages(generatedImages);
    setShowGeneratedImages(true);
    setShowControls(false);
    setShowIcon(true);
    setSelectedImages([]); // Reset selection when generating new images
  };

  const handleToggleIcon = () => {
    if (!showGeneratedImages) {
      return router.replace({
        pathname: "/(main)/tabs",
      })
    }
    setShowIcon(false);
    setShowGeneratedImages(false);
    setShowControls(true);
    setSelectedImages([]); // Reset selection when closing
  };

  const toggleImageSelection = (index: number) => {
    setSelectedImages(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index); // Deselect if already selected
      } else {
        return [...prev, index]; // Select if not selected
      }
    });
  };

  const imageUrl = 'https://picsum.photos/400/900';

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
      >
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            {/* Tag */}
            <View style={styles.tagStylesModal}>
              <MotiView
                style={styles.tag}
                from={{ scale: 0, rotate: "0deg" }}
                animate={{ scale: 1, rotate: "0deg" }}
                transition={{ delay: 300, type: "spring" }}
              >
                <Text style={styles.tagTextNormal}>create similar</Text>
              </MotiView>
            </View>

            {/* Main Image */}
            <View style={styles.imageContainer}>
              <Image
                source={require('@/assets/images/avant.png')}
                style={[
                  styles.mainImage,
                  { height: showGeneratedImages ? height * 0.68 : height * 0.6 }
                ]}
              />
              <TouchableOpacity style={styles.crossButton}>
                <BlurredRoundedIcon
                  position="absolute"
                  icon="CancelIcon"
                  handleClick={handleToggleIcon}
                />
              </TouchableOpacity>
              {/* Down Arrow Button */}
              {showIcon && (
                <TouchableOpacity
                  style={styles.downArrowButton}
                  onPress={handleToggleIcon}
                >
                  <Ionicons name="arrow-down" size={20} color="white" />
                </TouchableOpacity>
              )}
            </View>

            {/* Controls */}
            {showControls && (
              <>
                {/* Details Section */}
                <View style={styles.detailsContainer}>
                  <TextArea
                    containerStyle={{ height: 100 }}
                    placeholder="Describe the subject or action"
                    keyboardType="default"
                    multiline={false}
                  />
                </View>

                {/* Counter + Generate Button */}
                <View style={styles.generateSection}>
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
                      title="Generate"
                      handleClick={handleGenerate}
                      variation={ButtonVariation.default}
                    />
                  </View>
                </View>
              </>
            )}

            {/* Generated Images */}
            {showGeneratedImages && (
              <>
                <FlatList
                  data={images}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      onPress={() => toggleImageSelection(index)}
                      activeOpacity={0.8}
                    >
                      <View style={[
                        styles.generatedImageContainer,
                        selectedImages.includes(index) && styles.selectedImageContainer
                      ]}>
                        <Image source={{ uri: item }} style={styles.generatedImage} />
                      </View>
                    </TouchableOpacity>
                  )}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingVertical: 20,
                    paddingHorizontal: 8,
                    alignItems: 'center',
                    gap: 4,
                  }}
                />
              </>
            )}
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
    flexGrow: 1,
  },
  tagStylesModal: {
    borderRadius: 10,
    backgroundColor: "#E0FBFD",
    marginVertical: 10,
    alignSelf: "center",
  },
  tag: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  tagTextNormal: {
    fontSize: 18,
    fontFamily: fonts.primary.semibold,
  },
  imageContainer: {
    position: 'relative',
  },
  mainImage: {
    width: width,
    borderRadius: 32,
    resizeMode: 'cover',
    paddingHorizontal: 10,
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
  downArrowButton: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    width: 55,
    height: 55,
    borderRadius: 33,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  crossButton: {
    position: 'absolute',
    top: -10,
    right: 110
  },
  detailsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 24,
  },
  generateSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  counter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: '40%',
    paddingLeft: 0,
    paddingRight: 10,
  },
  button: {
    backgroundColor: "#EDEBEE",
    borderRadius: 16,
    padding: 15,
  },
  countContainer: {
    borderRadius: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  countText: {
    fontSize: 26,
    color: "#000",
    fontFamily: fonts.primary.bold,
  },
  generatedImageContainer: {
    margin: 5,
    marginTop: 0,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 2,
    borderColor: 'white',
  },
  selectedImageContainer: {
    borderColor: 'black',
  },
  generatedImage: {
    width: 116,
    height: 116,
    resizeMode: 'cover',
  },
  checkmarkContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 12,
    padding: 2,
  },
  selectionActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});