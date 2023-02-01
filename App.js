import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import { useFonts, Outfit_400Regular, Outfit_700Bold } from "@expo-google-fonts/outfit";

export default function App(){
  let [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return(
    <View style={styles.container}>
      <View style={styles.shadowProp}>
        <View style={styles.cardContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/qrcode.png')} style={styles.image} />
            <Text style={styles.title}>Improve your front-end
            {'\n'}
            skills by building projects
            </Text>
            <Text style={styles.descript}>Scan the QR code to visit Frontend
            {'\n'}
            Mentor and take your coding skills to
            {'\n'}
            the nex level
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6E2F0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  shadowProp: {
    shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.43,
  shadowRadius: 9.51,

  elevation: 10,
  },
  cardContainer: {
    width: 375,
    height: 596,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    borderRadius: 10,
  },
  imageContainer: {
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  image: {
    width: 330,
    height: 360,
    resizeMode: 'contain',
    borderRadius: 10
  },
  title: {
    fontFamily: 'Outfit_700Bold',
    fontSize: 26,
    color: '#1F3251',
    flexWrap: 'wrap',
    textAlign: 'center',
    paddingTop: 30
  },
  descript: {
    fontSize: 15,
    color: '#8A94A8',
    textAlign: 'center',
    paddingTop: 20,
    fontFamily: 'Outfit_700Bold',
    letterSpacing: 1,
  }
})