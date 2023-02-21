import { Fragment, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../components/UI/Card";
import PrimaryButton from "../components/UI/PrimaryButton";
import Heading from "../components/UI/Heading";
import Colors from "../constants/colors";
const StartGameScreen = (props) => {
  const [inputNumber, modifyInput] = useState("");
  const onChangeHandler = (enteredValue) => {
    modifyInput(enteredValue);
  };
  const onSubmitHandler = () => {
    if (isNaN(inputNumber) || +inputNumber < 1 || +inputNumber > 99){
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: onResetHandler }]
      );
    }
    else{
      props.setUserNumber(+inputNumber)
    }
  };
  const onResetHandler = () => {
    modifyInput("");
  };
  return (
    <Fragment>
      <Heading>Guess My Number</Heading>
      <Card>
        <Text style={styles.text}>Enter a Number</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="number-pad"
          onChangeText={onChangeHandler}
          value={inputNumber}
          maxLength={2}
        />
        <View style={styles.buttons}>
          <PrimaryButton onPress={onResetHandler}>Reset</PrimaryButton>
          <PrimaryButton onPress={onSubmitHandler}>Confirm</PrimaryButton>
        </View>
      </Card>
    </Fragment>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
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
  buttons: {
    flexDirection: "row",
  },
});
