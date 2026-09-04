import { Text, View, StyleSheet } from "react-native";
import TelaPrincipal from "./screens/TelaPrincipal";

export default function Index() {


  return (
    <View style={styles.container}>
        <TelaPrincipal/>
    </View>

  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
