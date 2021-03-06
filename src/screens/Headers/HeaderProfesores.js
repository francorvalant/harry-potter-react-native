import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

export default function HeaderProfesores() {
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Profesores de Hogwarts</Text>
            <ImageBackground style={styles.icon} source={require('../../images/inicio.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    icon: {
        width: 80,
        height: '90%',
        paddingBottom: 4,

    },

    textHeader: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#e3e3e3'
    }
})
