import { StyleSheet, View, Pressable, Text } from "react-native";
import Colors from "../../constants/colors";

const PrimaryButton = (props) => {
  return (
    <View style={styles.OuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.InnerContainer, styles.pressed, props.style]
            : [styles.InnerContainer,props.style]
        }
        onPress={props.onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.Text}>{props.children}</Text>
      </Pressable>
    </View>
  );
};
export default PrimaryButton;

const styles = StyleSheet.create({
  OuterContainer: {
    borderRadius: 28,
    margin: 5,
    marginBottom: 15,
    overflow: "hidden",
    flex:1,
  },
  InnerContainer: {
    backgroundColor: "#73073E",
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  Text: {
    color: "#cccccc",
    textAlign: "center",
    fontSize: 20,
    padding: 5,
  },
  pressed: {
    opacity: 0.75,
  },
});
