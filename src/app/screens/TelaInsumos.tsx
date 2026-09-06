import { useState } from "react";
import { Button, ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
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

    const removerItem = (itemAserRemovido) => {

       const novaLista = item.filter((item) => item.id !== itemAserRemovido);
       setitem(novaLista);
    }


    return(
    <ScrollView>

             <View style={styles.menu}>
                 <Text style={styles.textNormal}>
                    Nome do Produto:
                </Text>
                  <Button title="Adiconar item" onPress={adicionaNovoItem}/>
             </View>
       
        {
            // map iterando e a cada item ele renderiza um componente
            item.map((item) => (
             
             <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                 <CadastroItem key={item.id}/>
                 <Pressable style={styles.buttonRemover}onPress={() => removerItem(item.id)}>
                    <Text style={styles.textButtonRemover}>
                        X
                    </Text>
                 </Pressable>
              </View>
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
    },

    buttonRemover: {
        width: 40,
        height: 40,
        justifyContent: "center",
    },

    textButtonRemover: {
      textAlign: "center",
    }

})


export default TelaInsumos;
