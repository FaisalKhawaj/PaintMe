import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
// import { styles } from './styles';
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
export const Splash = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide1}>
        <ImageBackground
          source={require('../../../assets/images/welcome.png')}
          style={styles.wrapper}  // Make the image take full space
        >
        </ImageBackground>
      </View>
      <View style={styles.slide2}>
        <ImageBackground
          source={require('../../../assets/images/welcome.png')}
          style={styles.wrapper}  // Make the image take full space
        >
        </ImageBackground>
      </View>
      <View style={styles.slide3}>
        <ImageBackground
          source={require('../../../assets/images/welcome.png')}
          style={styles.wrapper}  // Make the image take full space
        >
        </ImageBackground>
      </View>
    </Swiper>
  );
};
