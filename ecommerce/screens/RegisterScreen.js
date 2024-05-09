// RegisterScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { createUser } from '../firebase/auth';

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignUp = async () => {
        setIsLoading(true);
        setErrorMessage('');
        try {
            const token = await createUser(email, password);
            if (token) {
                console.log("Cadastro bem-sucedido", token);
                navigation.pop();  // Assumindo que o cadastro é uma página empilhada sobre a de login
            } else {
                setErrorMessage('Erro ao criar o usuário');
            }
        } catch (error) {
            console.error('Erro de cadastro', error);
            setErrorMessage('Erro ao criar o usuário');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                placeholder="Senha"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
                style={styles.input}
            />
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <Button title="Cadastrar" onPress={handleSignUp} />
            )}
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
    },
});
