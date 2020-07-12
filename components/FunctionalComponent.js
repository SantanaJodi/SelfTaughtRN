import React, { Component, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styleOne, styleTwo } from '../styles/MainStyles';

// Kalau Lifecycle di Dunctional Component/Hooks ini dikumpulkan dalam satu methode bernama useEffect()

const functionalComponent = () => {
    const [subscriber, setSubscriber] = useState(200)

    useEffect(() => {
        console.log('==> Did Mount'); // LOG PERTAMA
        // Nggabunging Did Update
        setTimeout(() => {
            console.log('==> Did Update')
            setSubscriber(400)
        }, 2000)
    }, [subscriber]);

    // Misahin component Did Update

    // useEffect(() => {
    //     console.log('==> Did Update') // LOG KEDUA
    //     setTimeout(() => {
    //         setSubscriber(400)
    //     }, 2000)
    // }, [subscriber]);

    return(
        <View style={styleTwo.container}>
            <TouchableOpacity style={styleTwo.buttonLarge} >
                <Text style={styleTwo.pRegWhite}>Subscriber</Text>
                <Text style={styleTwo.pRegWhite}>{subscriber}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default functionalComponent;