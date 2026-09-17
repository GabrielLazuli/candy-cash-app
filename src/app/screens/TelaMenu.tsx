import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";


export default function TelaMenu(){

    const router = useRouter();

    return(
        <View>
            <Button title="Precificar Receitar" onPress={() => {router.push("/tela-insumos")}}/>
































                <Button title="Cadastrar ingredientes" onPress={() =>{router.push("/tela-precos-produtos")}}/>
        </View>







    )
}

const estilos = StyleSheet.create({
    button: {color: "FFFFFF", backgroundColor: "AFFA00"}
});