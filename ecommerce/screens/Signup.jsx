import { View, Text, StyleSheet, Alert } from "react-native";
import {
  ButtonTextImput,
  CustonTextImput,
} from "../components/custonTextImput";
import { CustonButton } from "../components/custonButton";
import { useState } from "react";
import { createUser } from "../services/auth";

export const Signup = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const createAuthentication = async () => {
    try {
      const response = await createUser(email, password);

      if (response.email == email) {
        navigation.goBack();
      }
    } catch (err) {
      showAlert();
    }
  };
  const showAlert = () => {
    Alert.alert("Atenção", "Corrija os dados!", [
      { text: "OK", onPress: () => { } },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.text}> Cadastro</Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 50 }}>
        <CustonTextImput
          placeholder={"Email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
          type={"email-address"}
        />
        <CustonTextImput
          placeholder={"Senha"}
          value={password}
          onChangeText={(text) => setPassword(text)}
          type={"numeric"}
        />

        <View style={{ marginTop: 50 }}>
          <CustonButton
            title={"Cadastrar"}
            onClick={() => createAuthentication()}
          />
        </View>
        <View style={styles.containerTextRow}>
          <Text style={{ color: "#0F0F0F" }}> Já possui cadastro? </Text>
          <Text
            onPress={() => {
              navigation.navigate("Signin");
            }}
            style={{ color: "#0F0F0F", fontWeight: "bold", textDecorationLine: "underline" }}
          >
            Entrar
          </Text>
        </View>

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#0F0F0F",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center"
  },
  containerTextRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },
});
