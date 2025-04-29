import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Dimensions, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { fonts } from '@/hooks/useCacheResources';
import { MotiView } from 'moti';
import { ButtonVariation, LabelButton } from '@/components/LabelButton';
import TextArea from '@/components/TextArea';
import { BlurredRoundedIcon } from '@/components/BlurredRoundedIcon';
import { styles } from './styles';
const { height } = Dimensions.get('window');

export const RetouchImage = () => {
  const navigation = useNavigation();
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
                <Text style={styles.tagTextNormal}>retouch image</Text>
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
              {showIcon && (
                <TouchableOpacity style={styles.crossButton}>
                  <BlurredRoundedIcon
                    position="absolute"
                    icon="CancelIcon"
                    handleClick={handleToggleIcon}
                  />
                </TouchableOpacity>
              )}
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
                    placeholder="Describe the changes you want made."
                    keyboardType="default"
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

