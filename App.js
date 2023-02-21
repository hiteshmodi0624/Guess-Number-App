import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOver from "./screens/GameOver";
export default function App() {
  const [userNumber,setUserNumber]=useState();
  const [roundsCount,setRoundsCount]=useState();
  const setPickedNumber=(num)=>{
    setUserNumber(num);
  }
  const setCount=(num)=>{
    setRoundsCount(num);
  }
  const gameReset=()=>{
      setRoundsCount(null)
      setUserNumber(null)
  }
  var screen=<StartGameScreen setUserNumber={setPickedNumber} />;
  if(userNumber)
    screen=<GameScreen userNumber={userNumber} roundsCount={setCount}/>
  if(roundsCount)
    screen=<GameOver roundsCount={roundsCount} userNumber={userNumber} gameReset={gameReset}/>
  return (
    <LinearGradient colors={[Colors.primary700, Colors.secondary600]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        >
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage:{
    opacity:0.15
  }
});
