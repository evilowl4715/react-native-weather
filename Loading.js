import react from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
    return (<View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>Получение погоды...</Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: '#fdf6aa',
    },
    text: {
        color: '#2c2c2c',
        fontSize: 30,
    }
})