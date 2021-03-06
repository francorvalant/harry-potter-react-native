import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, StyleSheet, ImageBackground } from 'react-native'
import ImagenBg from '../images/bg.jpg';

export default function Hechizos() {

    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://harry-potter-api-production.up.railway.app/hechizos')
            .then(respuesta => respuesta.json())
            .then(e => setData(e));
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                {data?.map((hechizos) => {
                    return (
                        <ImageBackground source={ImagenBg} key={hechizos.id} style={styles.container} >

                            <View style={styles.card} >
                                <Text style={styles.textId}>Numero {hechizos.id}</Text>
                                <Text style={styles.textContent}><Text style={styles.title}>Hechizo: </Text>{hechizos.hechizo}</Text>
                                <Text style={styles.textContent}><Text style={styles.title}>USO: </Text>{hechizos.uso}</Text>
                            </View>

                        </ImageBackground>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    },

    card: {
        width: '90%',
        marginTop: 20,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#212b34',
    },

    textId: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },

    textContent: {
        color: 'white',
        fontSize: 15,
        fontWeight: '300'
    },

    title: {
        fontWeight: 'bold',
        color: 'white'
    }
})