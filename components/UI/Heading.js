import { StyleSheet, Text, View } from "react-native";

const Heading = (props) => {
  return (
    <Text style={[styles.text,props.textStyles]}>{props.children}</Text>
  );
};
export default Heading;
const styles = StyleSheet.create({
  text: {
    borderColor: "white",
    borderWidth: 3,
    marginTop: 60,
    marginBottom: 30,
    padding:20,
    paddingHorizontal:40,
    marginHorizontal:20,
    color: "white",
    fontSize:30,
    minWidth:"70%",
    textAlign:"center"
  },
});
