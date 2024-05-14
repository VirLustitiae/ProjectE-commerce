import { useNavigation } from "@react-navigation/native";
import { deleteProduct } from "../services/appService";
import {
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export const List = ({ allProducts }) => {
  const navigation = useNavigation();

  const handleEditProduct = (item) => {
    navigation.navigate("EditProduct", { item });
  };
  const handleDetails = (item) => {
    navigation.navigate('DetailsProduct', { item })
  }

  const handleDeleteProduct = (token) => {
    deleteProduct(token);
  };

  return (
    <FlatList

      data={allProducts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (

        <TouchableOpacity style={styles.containerFlatList} onPress={() => handleDetails(item)}>
          <View style={styles.itens}>
            <Image style={styles.image}

              source={item.img ? { uri: item.img } : require("../assets/image-background.png")}
            />

            <View>
              <Text style={{ fontSize: 18, fontWeight: "medium" }}>{item.name}</Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.iconEdit} onPress={() => handleEditProduct(item)}>
                  <MaterialIcons name="edit" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconDelete} onPress={() => handleDeleteProduct(item.id)}>
                  <MaterialIcons name="delete" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </TouchableOpacity>
      )}
      style={styles.flatList}
    />
  );
};

const styles = StyleSheet.create({
  containerFlatList: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width - 65,
    height: 150,
    backgroundColor: "white",
    borderRadius: 30,
    marginBottom: 20,
    elevation: 4,
    shadowOpacity: 0.20
  },
  flatList: {
    flex: 1,
    marginTop: 40,
    padding: 2
  },
  image: {
    width: 130,
    height: 115,
    borderRadius: 20,
  },
  itens: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  iconEdit: {
    backgroundColor: "#FA4A0C",
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    marginTop: 10
  },
  iconDelete: {
    backgroundColor: "#0F0F0F",
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    marginTop: 10
  }
});
