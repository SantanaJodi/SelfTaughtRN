import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class PropsDinamis extends Component {
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image source={{uri:'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}} style={styles.storyThumbnail} />
                    <Text>Ini Story</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    storyThumbnail: {
        height: 100,
        width: 100,
        borderRadius: 100
    }
})