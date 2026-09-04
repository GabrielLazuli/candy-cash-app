import { useState } from "react";
import { View, StyleSheet, TextInputComponent, TextInput, Text } from "react-native";


function CadastroItem(){

    const[nomeIngrediente, setnomeingrediente] = useState("")
    const[precoIngrediente, setprecoingrediente] = useState("")

    return(
        <View  style={styles.cadrastroIngredientes}>
        
                                <TextInput>

                                </TextInput>
        
                                <Text>
                                    R$ 
                                </Text>
        
                                <TextInput>
                    
                                </TextInput>
              
        </View>
    )
}


const styles = StyleSheet.create({
    
    cadrastroIngredientes: {
        paddingTop: 10,
        margin: 1,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        borderColor: "pink"
    },

});

export default CadastroItem;