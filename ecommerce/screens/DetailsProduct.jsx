import { View ,Text, StyleSheet, Image} from "react-native"


export const DetailsProduct = ({ route, navigation }) => {
  const { item } = route.params;
  return(

    <View style={styles.container}>

      <Image  style={styles.image} source={{ uri: item.img }}/>
      <Text> {item.name}</Text>
      <Text> {item.description}</Text>
      <Text> {item.price}</Text>
      <Text> {item.amount}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
   width:100,
   height:100
  }
})