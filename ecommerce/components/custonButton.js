import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

export const CustonButton = ({ title, onClick }) => 
{
  return (
    
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        onClick();
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
   width:Dimensions.get('screen').width -60,
    height: 70,
    backgroundColor: "#FA4A0C",
    borderRadius: 50,
    padding:10,
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    color: "white",
    fontWeight:'bold',
    fontSize:18
  },
});
