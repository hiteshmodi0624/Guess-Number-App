import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/UI/Card";
import Heading from "../components/UI/Heading";
import PrimaryButton from "../components/UI/PrimaryButton";
import Colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import GameLog from "../components/UI/GameLog";
function generateRandomBetween(min, max, exclude) {
  if (max - min === 1) return min;
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let mini = 1,
  maxi = 100;
const GameScreen = ({ userNumber, roundsCount }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [opponentsGuess, addGuess] = useState([initialGuess]);
  const buttonPressHandler = (event) => {
    if (
      (event === "lower" && currentGuess < userNumber) ||
      (event === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong...", [
        { text: "Close", style: "cancel" },
      ]);
      return;
    } else if (event === "lower") maxi = currentGuess;
    else mini = currentGuess + 1;
    console.log(mini, maxi);
    const newRandNumber = generateRandomBetween(mini, maxi, currentGuess);
    addGuess((prev) => [...prev, newRandNumber]);
    setCurrentGuess(newRandNumber);
  };
  useEffect(() => {
    if (currentGuess === userNumber) {
      mini = 1;
      maxi = 100;
      roundsCount(opponentsGuess.length);
    }
  }, [opponentsGuess, currentGuess, mini, maxi]);

  return (
    <View style={styles.container}>
      <Heading>Opponent's Guess</Heading>
      <Heading textStyles={styles.scoreText}>{currentGuess}</Heading>
      <Card>
        <Text style={styles.text}>Higher or Lower</Text>
        <View style={styles.buttons}>
          <PrimaryButton onPress={buttonPressHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={24} color="white"/>
          </PrimaryButton>
          <PrimaryButton onPress={buttonPressHandler.bind(this, "higher")}>
          <Ionicons name="md-add" size={24} color="white"/>
          </PrimaryButton>
        </View>
      </Card>
      <GameLog opponentsGuess={opponentsGuess}/>
    </View>
  );
};
export default GameScreen;

const styles = StyleSheet.create({
  list: {
    alignItems: "center",
    width: "90%",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    color: Colors.secondary500,
    fontSize: 20,
  },
  buttons: {
    flexDirection: "row",
  },
  scoreText: {
    color: Colors.secondary600,
    borderColor: Colors.secondary600,
    marginTop: 0,
    borderWidth: 5,
    borderRadius: 8,
  },
});
