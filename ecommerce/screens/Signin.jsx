import { View, Text, StyleSheet, Alert, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { CustonTextImput } from "../components/custonTextImput";
import { CustonButton } from "../components/custonButton";
import { useState, useContext } from "react";
import { login } from "../services/auth";
import { Context } from "../context/securityContext";

export const Signin = ({ navigation }) => {
  const { setIsLogged } = useContext(Context);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const checkAuthentication = async () => {
    try {
      const response = await login(email, password);
      if (response.registered === true) {
        setIsLogged();
      }
    } catch (err) {
      //console.log(err);
      showAlert();
    }
  };
  const showAlert = () => {
    Alert.alert("Erro de Login", "Usuário ou Senha Inválidos", [
      { text: "OK", onPress: () => { } },
    ]);
  };

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInUp"
        delay={300}>
        <View>
          <Text style={styles.text}> Login</Text>
        </View>
        <View style={{alignItems: "center", marginTop: 50}}>
          <CustonTextImput
            placeholder={" Email"}
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
        </View>
        <View style={{ marginTop: 50 }}>
          <View style={{ alignItems: "center" }}>
            <CustonButton title={"Acessar"} onClick={() => checkAuthentication()} />
          </View>
          <View style={styles.containerTextRow}>
            <Text style={{ color: "#0F0F0F" }}> Novo por aqui? </Text>
            <Text
              onPress={() => {
                navigation.navigate("Signup");
              }}
              style={{ color: "#0F0F0F", fontWeight: "bold", textDecorationLine: "underline" }}
            >
              Cadastre-se
            </Text>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItens: "center",
    justifyContent: "center"
  },

  containerTextRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },
  text: {
    color: "#0F0F0F",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center"
  },
});
