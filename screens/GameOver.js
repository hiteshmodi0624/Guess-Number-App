import { Fragment } from "react";
import {Image, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../components/UI/Card";
import PrimaryButton from "../components/UI/PrimaryButton";
import Heading from "../components/UI/Heading";
import Colors from "../constants/colors";
const GameOver = (props) => {
  return (
    <View style={styles.container}>
      <Heading>GAME OVER!</Heading>
      <View style={styles.imageBackground}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.gameOverText}>
        Your phone needed <Text style={styles.number}>{props.roundsCount}</Text>{" "}
        rounds to guess the number
        {" "}<Text style={styles.number}>{props.userNumber}</Text>
      </Text>
      <View style={styles.button}>
      <PrimaryButton onPress={props.gameReset}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
};
export default GameOver;

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:"center",
      marginTop:60
    },
    gameOverText:{
        fontSize:25,
        textAlign:"center",
        padding:10,
        margin:20,
    },
    imageBackground:{
        alignItems:"center",
    },
    image:{
        width:300,
        height:300,
        borderRadius:300,
        borderColor:"black",
        borderWidth:5
    },
    text: {
        color: Colors.secondary500,
        fontSize: 20,
    },
    textInput: {
        color: Colors.secondary500,
        fontSize: 40,
        borderBottomColor: Colors.secondary500,
        borderBottomWidth: 2,
        minWidth: 50,
        marginBottom: 10,
        textAlign: "center",
    },
    button: {
        margin:20,
        flexDirection:"row",
        justifyContents:"center",
        width:"50%",
    },
    number:{
      fontWeight:"bold",
      color:Colors.primary700
    }
});
