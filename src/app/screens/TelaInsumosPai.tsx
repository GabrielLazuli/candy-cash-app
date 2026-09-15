import { StyleSheet, Text, TextInput, View } from "react-native";
import CadastroItem from "../componets/CadastroItem";
import TelaInsumos from "./TelaInsumos";
import { Button } from "expo-router/build/react-navigation";

function TelaInsumosPai() {
  return (
    <View style={styles.container}>
      <Text style={styles.textNomeApp}>CANDY CASH</Text>

      <Text style={styles.textNovaReceita}>Nova Receita</Text>

      <Text>Calcule o custo e o preço ideal</Text>

      <View style={styles.cadastroReceita}>
        <TextInput style={styles.InputNomeReceita}></TextInput>

        <View>
          <Text style={styles.textNormal}>Ingredientes e Custos:</Text>
          <TelaInsumos />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 50,
    padding: 20,
    flex: 1,
    justifyContent: "flex-start",
  },

  textNomeApp: {
    textAlign: "left",
    paddingBottom: 5,
  },

  textNovaReceita: {
    fontSize: 25,
  },

  textNormal: {
    fontSize: 18,
    paddingBottom: 10,
  },

  cadastroReceita: {
    paddingTop: 20,
  },

  InputNomeReceita: {
    marginTop: 10,
    marginBottom: 10,
    borderColor: "pink",
    borderWidth: 1,
    borderRadius: 10,
  },

  cadrastroIngredientes: {
    backgroundColor: "black",
  },
});

export default TelaInsumosPai;
