import { useState } from "react";
import { Button, ScrollView, Text, StyleSheet, View } from "react-native";
import CadastroItem from "../componets/CadastroItem";



 function TelaInsumos(){

    //lista de itens 
    const[item, setitem]= useState([ 
        { id: 1}
    ]);

    // função? que cria item
    const  adicionaNovoItem = () => {

        const novoitem = { id: Date.now()}
        setitem([...item, novoitem]);

    };

    return(
    <ScrollView>

             <View style={styles.menu}>
                 <Text style={styles.textNormal}>
                    Nome do Produto:
                </Text>
                  <Button style={styles.button} title="Adiconar item" onPress={adicionaNovoItem}/>
             </View>
       
        {
            // map iterando e a cada item ele renderiza um componente
            item.map((item) => (
             <CadastroItem key={item.id}/>
            )
            )
        }

    </ScrollView>
    )
}

const styles = StyleSheet.create({
    
    textNormal: {
       fontSize: 18,
       paddingBottom: 10,
    },

    menu: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between"
    },

    button: {
        borderRadius: 10
    }

})


export default TelaInsumos;
