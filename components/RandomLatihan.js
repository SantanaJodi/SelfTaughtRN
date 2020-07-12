import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styleTwo } from '../styles/MainStyles';

// Import Icon
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// Toggle Button in Function Component
const ToggleButton = () => {
    // Toggle ON / OFF
    const [button, setButton] = useState('ON');

    function pressButton() {
        button === 'ON' ? setButton('OFF') : setButton('ON')
    }

    // Toggle Heart Icon
    const [heart, setHeart] = useState('heart-outline');

    function changeHeart() {
        heart === 'heart-outline' ? setHeart('heart') : setHeart('heart-outline')
    }

    return(
        <View style={styleTwo.container}>
            <TouchableOpacity style={styleTwo.buttonLarge} onPress={pressButton} >
                <Text style={styleTwo.pRegWhite}>{button}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styleTwo.buttonLarge} onPress={changeHeart} >
                <Icon name={heart} size={25} color='white' />
            </TouchableOpacity>
        </View>       
    )
}

export { ToggleButton };