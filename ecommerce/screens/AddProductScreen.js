import React, { useState } from "react";
import { storeProducts } from "../firebase/appService";
import * as ImagePicker from "expo-image-picker";
import {
  View,
  Text,
  Button,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const AddProductScreen = ({ navigation }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    stock: "",
    image: "",
  });

  const handleSubmit = async () => {
    const productData = {
      name: product.name,
      description: product.description,
      stock: parseInt(product.stock, 10),
      image: product.image,
    };

    const result = await storeProducts(productData);
    if (result.success) {
      Alert.alert("Sucesso", "Produto cadastrado com sucesso!", [
        { text: "OK", onPress: () => navigation.goBack() },
      ]);
    } else {
      Alert.alert(
        "Erro",
        "Falha ao cadastrar produto: " + result.error.message
      );
    }
  };
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <TouchableOpacity onPress={pickImage} style={styles.containerButton}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Image source={require("../assets/image-background.png")} />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.containerBotton}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Produto"
          onChangeText={(text) => setProduct({ ...product, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          onChangeText={(text) => setProduct({ ...product, description: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantidade em Estoque"
          keyboardType="numeric"
          onChangeText={(text) => setProduct({ ...product, stock: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="URL da Imagem"
          onChangeText={(text) => setProduct({ ...product, image: text })}
        />
        <Button title="Cadastrar Produto" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTop: {
    flex: 1,
    padding: 20,
  },
  containerBotton: {
    flex: 2,
  },

  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
  containerButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default AddProductScreen;
