// LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { login } from '../firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const token = await login(email, password);
      if (token) {
        console.log("Autenticação bem-sucedida", token);
        navigation.replace('Main');
      } else {
        setErrorMessage('Usuário ou senha inválidos');
      }
    } catch (error) {
      console.error('Erro de autenticação', error);
      setErrorMessage('Usuário ou senha inválidos');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>Email address</Text>
        <TextInput
          placeholder=""
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Text style={{ marginTop: 50 }}>Password</Text>
        <TextInput
          placeholder=""
          value={password}
          secureTextEntry
          onChangeText={setPassword}
          style={styles.input}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <TouchableOpacity style={styles.buttonEnter} title="Entrar" onPress={handleLogin}>
            <Text style={styles.textButtonEnter}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity title="Cadastrar" onPress={() => navigation.navigate('Register')}>
            <Text style={styles.textButtonCadastro}>Sign-up</Text>
          </TouchableOpacity>
        </>
      )}
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
  input: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,

  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  buttonEnter: {
    backgroundColor: "#FA4A0C",
    borderRadius: 50
  },
  textButtonEnter: {
    textAlign: "center",
    padding: 25,
    color: "white",
    fontWeight: "bold"
  },
  textButtonCadastro: {
    textAlign: "center",
    padding: 25,
    color: "#FA4A0C",
  }
});