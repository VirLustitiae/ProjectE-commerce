import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getAllProducts } from "../services/appService";
import { List } from "./list";

export default function ListProducts() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllProducts();
      setAllProducts(data);
    };
    fetch();
  }, [allProducts]);

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.text}>Explore o</Text>
        <Text style={styles.text}>nosso cardápio</Text>
      </View>

      <List allProducts={allProducts} />
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30
  },

  text: {
    color: "#0F0F0F",
    fontWeight: "800",
    fontSize: 30,
  },
});
