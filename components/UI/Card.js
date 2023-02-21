import { View, StyleSheet } from "react-native";
const Card = (props) => {
  return (
  <View style={styles.card}>
    {props.children}
  </View>)
};
export default Card;

const styles=StyleSheet.create({
  card:{
    backgroundColor:"#3D0221",
    borderRadius:6,
    alignItems:"center",
    paddingTop:20,
    paddingHorizontal:10,
    elevation:4,
    shadowColor:"black",
    shadowOffset:{
      width:0,
      height:2
    },
    shadowRadius:6,
    shadowOpacity:0.25,
    margin:20
  }
})