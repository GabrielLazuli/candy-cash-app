import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";

export default function TelaMenu(){

    const router = useRouter();

    return(

        <View>

            <Pressable style={estilos.button} onPress={() => {router.push("/tela-insumos")}}/>
                <Text> Precificar Receita</Text>
            <Pressable/>
            <Pressable style={estilos.button} onPress={() => {router.push("/tela-precos-produtos")}}/>
                <Text> Precificar Ingrediente</Text>
            <Pressable/>


        </View>



    )
}

const estilos = StyleSheet.create({
    button: {color: "FFFFFF", backgroundColor: "AFFA00"}
});