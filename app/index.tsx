import { Tarjeta } from "@/components/Tarjeta";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
      }}
    >
      <Tarjeta texto="Hola" />
      <Tarjeta texto="Me" />
      <Tarjeta texto="Llamo" />
      <Tarjeta texto="Pato" />
    </View>
  );
}
