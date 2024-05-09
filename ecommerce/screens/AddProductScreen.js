import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert, StyleSheet } from 'react-native';
import { storeProducts } from '../firebase/appService';

const AddProductScreen = ({ navigation }) => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        stock: '',
        image: ''
    });

    const handleSubmit = async () => {
        const productData = {
            name: product.name,
            description: product.description,
            stock: parseInt(product.stock, 10),
            image: product.image
        };

        const result = await storeProducts(productData);
        if (result.success) {
            Alert.alert("Sucesso", "Produto cadastrado com sucesso!", [{ text: "OK", onPress: () => navigation.goBack() }]);
        } else {
            Alert.alert("Erro", "Falha ao cadastrar produto: " + result.error.message);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Nome do Produto" onChangeText={(text) => setProduct({...product, name: text})} />
            <TextInput style={styles.input} placeholder="Descrição" onChangeText={(text) => setProduct({...product, description: text})} />
            <TextInput style={styles.input} placeholder="Quantidade em Estoque" keyboardType="numeric" onChangeText={(text) => setProduct({...product, stock: text})} />
            <TextInput style={styles.input} placeholder="URL da Imagem" onChangeText={(text) => setProduct({...product, image: text})} />
            <Button title="Cadastrar Produto" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
    }
});

export default AddProductScreen;
