import { Pressable, View,  Text, StyleSheet } from "react-native";

export default function TelaPrecosProdutos() {

  return (
    <View>
        <Text style={estilos.texto}>Precificar ingrediente</Text>
    </View>
  );

}

const estilos = StyleSheet.create({
    texto: {padding: 20, textAlign: "center", fontSize: 20 }

}
)