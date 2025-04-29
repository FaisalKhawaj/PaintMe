import React from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { MotiView } from 'moti';
import { useRouter } from 'expo-router'; // <-- Expo Router hook

const { width } = Dimensions.get('window');
const IMAGE_WIDTH = width / 2 - 24;

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

export const Home = () => {
  const router = useRouter(); // <-- Use router from expo-router

  const handleImagePress = (imgUri: string) => {
    router.push({
      // pathname: '/create-similar',
      pathname: '/image-select',
      params: { imageUrl: imgUri }, // <-- pass image url as param
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
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
                style={styles.imageWrapper}
              >
                <Pressable onPress={() => handleImagePress(img)}>
                  <Image
                    source={{ uri: img }}
                    style={[
                      styles.image,
                      { height: index === 0 ? 240 : 250 },
                    ]}
                  />
                </Pressable>
              </MotiView>
            ))}
          </View>

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
                style={styles.imageWrapper}
              >
                <Pressable onPress={() => handleImagePress(img)}>
                  <Image
                    source={{ uri: img }}
                    style={[
                      styles.image,
                      { height: index === 0 ? 180 : 250 },
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
  container: {
    paddingHorizontal: 12,
    paddingBottom: 40,
  },
  columns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
  },
  imageWrapper: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
    marginHorizontal: 6,
    backgroundColor: '#eee',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
});
