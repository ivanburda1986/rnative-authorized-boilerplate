import {FC} from "react";
import {Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";


export type ButtonVariant = "INFO" | "DANGER" | "WARNING" | "SUCCESS";

interface Props {
    title: string;
    variant: ButtonVariant;
    size?: number;
    onPress: () => void;
}

const bgColorMap = {
    "DANGER": {bgColor: 'tomato', textColor: 'white'},
    "INFO": {bgColor: 'grey', textColor: 'black'},
    "WARNING": {bgColor: 'yellow', textColor: 'black'},
    "SUCCESS": {bgColor: 'lime', textColor: 'black'}
};

export const ColoredButton: FC<Props> = ({title, variant, size, onPress}) => (
    <TouchableOpacity
        style={[styles.button, {backgroundColor: bgColorMap[variant].bgColor}]}
        onPress={onPress}><Text
        style={[styles.text, {color: bgColorMap[variant].textColor}]}>{title}</Text></TouchableOpacity>);

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginRight: 5,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 8
    },
    text: {
        fontSize: 12,
        marginRight: 3,
    },
    buttonContainer: {
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 10
    },
});