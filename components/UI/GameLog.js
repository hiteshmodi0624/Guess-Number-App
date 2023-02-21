import { FlatList, View , Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const GameLog = ({opponentsGuess}) => {
  return (
    <FlatList
      data={opponentsGuess}
      renderItem={(item) => {
        return (
          <View style={styles.opponentsCard}>
            <Text style={styles.opponentsCardText}>#{item.index + 1}</Text>
            <Text style={styles.opponentsCardText}>
              Opponent's Guess {item.item}
            </Text>
          </View>
        );
      }}
    ></FlatList>
  );
};
export default GameLog

const styles=StyleSheet.create({
  opponentsCard: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 10,
    backgroundColor: Colors.secondary600,
    margin: 5,
    flex: 1,
    borderRadius: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.75,
  },
  opponentsCardText: {
    fontSize: 15,
  },
})