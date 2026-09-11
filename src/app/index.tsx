import { Text, View, StyleSheet } from "react-native";
import TelaPrincipal from "./screens/TelaPrincipal";
import { createNativeStackNavigator } from "expo-router/build/react-navigation/native-stack";
import { NavigationContainer } from "expo-router/build/react-navigation";

const Stack = createNativeStackNavigator():

export default function Index() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name= "Home" component={TelaPrincipal}/>
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
