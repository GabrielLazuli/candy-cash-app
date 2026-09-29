import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";

export default function TelaMenu(){

    const router = useRouter();

    return(

        <View style={estilos.viewPrincipal}>

            <Pressable style={estilos.button} onPress={() => {router.push("/tela-insumos")}}>
                <Text style={estilos.textButton}> Precificar Produto</Text>
            </Pressable>
            <Pressable style={estilos.button} onPress={() => {router.push("/tela-precos-produtos")}}>
                <Text style={estilos.textButton}> Precificar Ingrediente</Text>
            </Pressable>

        </View>

    )

}

const estilos = StyleSheet.create({
    viewPrincipal: {padding: 20},
    button: {color: "FFFFFF", padding: 20},
    textButton: {textAlign: "center", backgroundColor: "pink", padding: 20, borderRadius: 5}
});