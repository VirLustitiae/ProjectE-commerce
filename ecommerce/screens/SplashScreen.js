import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native' 

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000); // Espera 3 segundos e depois navega para a tela de login
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LottieView source={require('../assets/Animation - 1715284057317.json')}
      autoPlay={true}
      style={{
        height: 700, width: 700}}></LottieView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column"
  },
});
