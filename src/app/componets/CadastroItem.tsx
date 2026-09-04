import { useState } from "react";
import { View, StyleSheet, TextInputComponent, TextInput, Text } from "react-native";


function CadastroItem(){

    const[nomeIngrediente, setnomeingrediente] = useState("")
    const[precoIngrediente, setprecoingrediente] = useState("")

    return(
        <View  style={styles.cadrastroIngredientes}>
        
            <TextInput 
                style={styles .inserirNomeIngrediente}
                value={nomeIngrediente}
                onChangeText={setnomeingrediente}
             />
        
            <Text>
              R$ 
            </Text>
       
        <TextInput
            style={styles.inserirPrecoIngrediente}
            value={precoIngrediente}
            onChangeText={setprecoingrediente}
        />
        </View>
    )
}


const styles = StyleSheet.create({
    
    cadrastroIngredientes: {
        gap: 20,
        margin: 1,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        borderColor: "pink",
        alignItems: "center"
    },

    inserirNomeIngrediente: {
        flex: 3,
        width: 1,
        margin: 1,
        borderWidth: 2,
        borderColor: "orange"
        
    },

    inserirPrecoIngrediente: {
        flex: 1,
        width: 1,
        margin: 1,
        borderWidth: 2,
        borderColor: "orange"
        
    }

});

export default CadastroItem;