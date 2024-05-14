import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { Products } from "../screens/Products";
import { MembersGroup } from "../screens/Members";
import { AddProduct } from "../screens/AddProduct";

const Tab = createBottomTabNavigator();

export const TabPrivate = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconPath;

          if (route.name === "Produtos") {
            iconPath = focused
              ? require("../assets/Icon/pizza-icon.png")
              : require("../assets/Icon/products-icon.png");
          } else if (route.name === "Adicionar Produtos") {
            iconPath = focused
              ? require("../assets/Icon/add-icon.png")
              : require("../assets/Icon/add-icon.png");
          } else if (route.name === "Grupo") {
            iconPath = focused
              ? require("../assets/Icon/group-icon2.png")
              : require("../assets/Icon/group-icon.png");
          }

          return <Image source={iconPath} style={{ width: size, height: size }} />;
        },
        tabBarLabelStyle: { fontWeight: 'bold' },
      })}
      tabBarOptions={{
        activeTintColor: "#FA4A0C",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen name="Produtos" component={Products} />
      <Tab.Screen name="Adicionar Produtos" component={AddProduct} />
      <Tab.Screen name="Grupo" component={MembersGroup} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  btnSettings: {
    marginRight: 10,
  },
});
