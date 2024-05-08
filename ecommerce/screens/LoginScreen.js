import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Verificação simples de usuário e senha
    if (email === 'admin' && password === 'admin') {
      navigation.replace('Main'); // Navega para a página principal se a autenticação for bem-sucedida
    } else {
      alert('Usuário ou senha inválidos'); // Mostra uma mensagem de erro se falhar
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Usuário"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title="Entrar" onPress={handleLogin} />
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
});
