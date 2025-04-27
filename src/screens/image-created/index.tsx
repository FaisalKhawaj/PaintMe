import React from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { MotiView } from 'moti';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const IMAGE_WIDTH = width / 2 - 18; // Adjusted spacing

const images = [
  'https://picsum.photos/seed/picsum1/400/600',
  'https://picsum.photos/seed/picsum2/400/500',
  'https://picsum.photos/seed/picsum3/400/650',
  'https://picsum.photos/seed/picsum4/400/550'
];

export const ImageCreated = () => {
  const router = useRouter();

  const handleImagePress = (imgUri: string) => {
    router.push({
      pathname: '/generated-image-selected',
      params: { imageUrl: imgUri },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.gridContainer}>
          {images.map((img, index) => (
            <MotiView
              key={index}
              from={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'timing',
                duration: 500,
                delay: Math.floor(index / 2) * 150, // Stagger by row
              }}
              style={styles.gridItem}
            >
              <Pressable 
                onPress={() => handleImagePress(img)}
                style={styles.imagePressable}
              >
                <Image
                  source={{ uri: img }}
                  style={styles.gridImage}
                />
              </Pressable>
            </MotiView>
          ))}
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
  container: {
    paddingHorizontal: 12,
    paddingBottom: 40,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%', // Slightly less than half to account for spacing
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  imagePressable: {
    width: '100%',
    aspectRatio: 3/4, // Standard aspect ratio
  },
  gridImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});