import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleAddProductPress = () => {
    navigation.navigate('AddProduct');
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity style={styles.addButton} onPress={handleAddProductPress}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  addButton: {
    position: 'absolute',
    right: 30,
    bottom: 120,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,
  }
});

export default HomeScreen;
