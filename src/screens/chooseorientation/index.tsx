import { IconButton } from '@/components/IconButton';
import { ButtonVariation, LabelButton } from '@/components/LabelButton';
import { Spacer } from '@/components/Spacer';
import TextArea from '@/components/TextArea';
import { fonts } from '@/hooks/useCacheResources';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { MotiView } from 'moti';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Keyboard, TouchableOpacity, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const ChooseOrientation = () => {
  const [count, setCount] = useState(1);
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 1 ? prev - 1 : 1));
  const [selected, setSelected] = useState(1)
  const handleProgress = () => {
    router.push('/tabs/create/image-progress')
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.safeArea}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
      >

        <SafeAreaView style={styles.safeArea}>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.container}>
              {/* Big Box */}
              <View style={{ width: '100%' }}>
                <Text style={styles.title}>Choose an image style</Text>
              </View>
              <Spacer marginTop={10} />
              <View style={styles.floatingButtons}>
                <TouchableOpacity
                  style={[styles.circleButton, { backgroundColor: selected !== 1 ? '#EDEBEE' : 'black' }]}
                  onPress={() => setSelected(1)}
                >
                  <View style={{ width: 28, height: 28, borderWidth: 2, borderRadius: 8, borderColor: selected !== 1 ? 'black' : 'white' }}>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.circleButton, { backgroundColor: selected !== 2 ? '#EDEBEE' : 'black' }]}
                  onPress={() => setSelected(2)}
                >
                  <View style={{ width: 28, height: 22, borderWidth: 2, borderRadius: 8, borderColor: selected !== 2 ? 'black' : 'white' }}>
                  </View>
                </TouchableOpacity>
              </View>

              <TextArea
                containerStyle={{ height: 286, borderRadius: 20 }}
                placeholder="What do you imagine?"
                keyboardType="default"
                isCenter
              />
              <Spacer marginBottom={10} marginTop={10} />

              <View style={styles.imageContainer}>
                <Image
                  source={require("../../../assets/images/photorealistic.png")}
                  style={styles.imageStyle}
                  resizeMode="cover"
                />
                <View style={styles.tagContainer}>
                  <Text style={styles.tagTextContainer}>Photorealistic</Text>
                </View>
              </View>

              <View style={styles.generateSection}>
                <View style={styles.counter}>
                  <TouchableOpacity style={styles.buttons} onPress={decrement}>
                    <Ionicons name="remove" size={20} color="white" />
                  </TouchableOpacity>

                  <View style={styles.countContainer}>
                    <Text style={styles.countText}>{count}</Text>
                  </View>

                  <TouchableOpacity style={styles.buttons} onPress={increment}>
                    <Ionicons name="add" size={20} color="white" />
                  </TouchableOpacity>
                </View>

                <View style={{ width: '60%' }}>
                  <LabelButton
                    title="Generate"
                    handleClick={handleProgress}
                    variation={ButtonVariation.default}
                  />
                </View>
              </View>

              {/* Optional: Add more content here that will be scrollable */}
            </View>
          </ScrollView>
        </SafeAreaView>

      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tagStylesModal: {
    borderRadius: 10,
    backgroundColor: "#D1F2EB",
    alignSelf: "center",
  },
  tagTextNormal: {
    fontSize: 18,
    fontFamily: fonts.primary.semibold,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20, // Extra padding at bottom
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 40
  },
  tag: {
    backgroundColor: '#e2f3e8',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: 'center', // Align tag to left
  },
  tagText: {
    color: '#3c6e47',
    fontWeight: '600',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  button: {
    width: '100%', // Make buttons full width
    marginBottom: 10,
  },
  descriptionText: {
    marginVertical: 10,
    fontSize: RFValue(12),
    fontFamily: fonts.primary.medium,
    color: "#555",
    textAlign: 'center',
  },
  imagineBox: {
    backgroundColor: '#f3f3f3',
    width: '100%',
    height: 180,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  imagineBoxText: {
    color: '#b0b0b0',
    fontSize: 16,
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
    alignSelf:'flex-end',
    width: '40%',
    paddingLeft: 0,
    paddingRight: 10,
  },
  buttons: {
    backgroundColor: "black",
    borderRadius: 16,
    padding: 13,
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
  imageContainer: {
    position: 'relative',
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    margin: 10,
  },
  imageStyle: {
    width: '100%',
    height: 160,
  },
  tagContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  tagTextContainer: {
    color: 'black',
    fontSize: 14,
    fontFamily: fonts.primary.bold,
    letterSpacing: 0.5
  },
  floatingButtons: {
    flexDirection: "row",
    alignSelf: 'flex-start',
    width: '100%',
    gap: 12,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.primary.bold,
    textAlign: 'left'
  },
  circleButton: {
    width: 55,
    height: 55,
    borderRadius: 14,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
});