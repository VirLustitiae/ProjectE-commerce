import { Dimensions, StyleSheet, TextInput, View } from "react-native";

export const CustonTextImput = ({ placeholder, value, onChangeText,type}) => {
  return (
    <View>
      <TextInput
       keyboardType={type}
        style={styles.imput}
        placeholder={placeholder}
        value={value}
    
        onChangeText={(text) => {
          onChangeText(text);
        }}
        placeholderTextColor="gray"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imput: {
    width: Dimensions.get("window").width - 60,
    height: 60,
    borderBottomWidth: 1,
    borderColor: "#ADADAF",
    padding: 10,

    
  },
});
