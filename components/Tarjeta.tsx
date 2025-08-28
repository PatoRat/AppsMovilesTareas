import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

// La funcion randomHexColor se la pedí a GPT
function randomHexColor(currentColor: string): string {
    let newColor: string;
    do {
        const hex = Math.floor(Math.random() * 0xffffff).toString(16);
        newColor = `#${hex.padStart(6, "0")}`;
    } while (newColor === currentColor);
    return newColor;
}

export const Tarjeta = (props: { texto: string }) => {
    const [colorFondo, setColorFondo] = useState(randomHexColor("#000000ff"));
    const [colorLetra, setColorLetra] = useState(randomHexColor("#000000ff"));

    const styles = myStyles(colorFondo, colorLetra);

    const cambio = () => {
        setColorFondo(randomHexColor(colorFondo));
        setColorLetra(randomHexColor(colorLetra));
    };

    return (
        <>
            <Pressable style={styles.cardStyles} onPress={cambio}>
                <Text style={styles.textStyles}>{props.texto}</Text>
            </Pressable>
        </>
    );
};

const myStyles = (colorFondo: string, colorLetra: string) => (
    StyleSheet.create({
        cardStyles: {
            backgroundColor: colorFondo,
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        textStyles: {
            color: colorLetra
        }
    })
);