import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styleOne, styleTwo } from '../styles/MainStyles';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('==> Constructor') // LOG PERTAMA
        this.state = {
            subscriber: 100
        }
    }

    componentDidMount() {
        console.log('==> ComponentDidMount') // LOG KETIGA
        setTimeout(() => { // (3) Biar keliatan perubahannya setelah 2 detik 
            this.setState({
                subscriber: 400 // (2) Bikin Update-an
            })
        }, 2000)
    }

    componentDidUpdate() {
        console.log('==> ComponentDidUpdate') // (1) Ga muncul kalo ga ada update
        alert('Component ter-update') // (4) Setelah ada update baru deh muncul ini
    }

    // LOG KEEMPAT ada yang namanya "ComponentWillUnmount() {...}" tapi ini gue belum ngerti cara kerjanya, sok liat youtube aja

    render() {
        console.log('==> Render') // LOG KEDUA
        return(
            <View style={styleTwo.container}>
                <TouchableOpacity style={styleTwo.buttonLarge} >
                    <Text style={styleTwo.pRegWhite}>Subscriber</Text>
                    <Text style={styleTwo.pRegWhite}>{this.state.subscriber}</Text>
                </TouchableOpacity>
            </View>
        );
    }
} 

export default LifeCycle;