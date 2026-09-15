import { Text, View, StyleSheet } from "react-native";
import TelaMenu from "./screens/TelaMenu";
import TelaPrecosProdutos from "./screens/TelaPrecosProdutos";
import TelaInsumosPai from "./screens/TelaInsumosPai";
import { createNativeStackNavigator } from "expo-router/build/react-navigation/native-stack";
import { NavigationContainer } from "expo-router/build/react-navigation";


const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name= "Home" component={TelaMenu}/> 
        <Stack.Screen name= "CalculoInsumos" component={TelaInsumosPai}/>
        <Stack.Screen name= "PrecosProdutos" component={TelaPrecosProdutos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
