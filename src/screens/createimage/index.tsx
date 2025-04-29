import { IconButton } from '@/components/IconButton';
import { Spacer } from '@/components/Spacer';
import TextArea from '@/components/TextArea';
import { fonts } from '@/hooks/useCacheResources';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { MotiView } from 'moti';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const CreateImage = () => {
  const handleChooseStyle = () => {
    router.push('/choose-style')
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
              {/* Tag */}
              <MotiView
                style={styles.tag}
                from={{ scale: 0, rotate: "0deg" }}
                animate={{ scale: 1, rotate: "0deg" }}
                transition={{ delay: 300, type: "spring" }}
              >
                <Text style={styles.tagTextNormal}>image creation</Text>
              </MotiView>

              {/* Add an Image Button */}
              <IconButton
                title="Add an Image"
                handleClick={() => { }}
                rightIcon={<Ionicons name="image" />}
                justifyBetween={true}
                style={styles.button}
              />

              {/* Small description */}
              <Text style={styles.descriptionText}>
                Not sure the direction to take? Add an image as a reference and describe edits.
              </Text>

              {/* Big Box */}
              <TextArea
                containerStyle={{ height: 286, borderRadius: 20 }}
                placeholder="What do you imagine?"
                keyboardType="default"
                isCenter
              />
              <Spacer marginBottom={10} marginTop={10} />
              {/* Choose Style Button */}
              <IconButton
                title="Choose Style"
                handleClick={handleChooseStyle}
                rightIcon={<Ionicons name="arrow-forward" />}
                style={styles.button}
              />

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
    justifyContent: 'flex-end',
    paddingBottom: 40
  },
  tag: {
    backgroundColor: '#E5F7DF',
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
    marginVertical: 16,
    fontSize: RFValue(12),
    fontFamily: fonts.primary.medium,
    color: "#9398A4",
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
});