import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ title: "Menu" }} />
      <Stack.Screen name="tela-menu" options={{ title: "Menu" }} />
      <Stack.Screen
        name="tela-insumos"
        options={{ title: "Cálculo de insumos" }}
      />
      <Stack.Screen
        name="tela-precos-produtos"
        options={{ title: "Preços dos produtos" }}
      />
    </Stack>
  );
}
