import React, { useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, TextInput } from 'react-native';
import { styleTwo } from '../styles/MainStyles';
import Constants from 'expo-constants';

// BottomSheet, doc: https://www.npmjs.com/package/react-native-raw-bottom-sheet
import RBSheet from "react-native-raw-bottom-sheet";
 
export default function Example() {
  const refRBSheet = useRef();
  return (
    <View style={styles.container}>
      <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
      <RBSheet
        ref={refRBSheet}
        animationType= 'fade'
        closeOnDragDown={true}
        closeOnPressMask={true}
        dragFromTopOnly={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.8)'
          },
          container: {
            backgroundColor: 'black',
            borderTopStartRadius: 12,
            borderTopEndRadius: 12
          },
          draggableIcon: {
            backgroundColor: "white"
          }
        }}
      >
        <View style={styles.inputBox}>
            <TextInput
                style={styles.input} 
                placeholder='Create Password' 
                placeholderTextColor='#FFC58B' 
                secureTextEntry={true} 
            />
        </View>
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        paddingTop: Constants.statusBarHeight
    },

    btnPrimary: {
        backgroundColor: '#ec1f7f',
        borderRadius: 8,
        paddingHorizontal: 24,
        paddingVertical: 8,
    },

    inputBox: {
        backgroundColor: '#FFF6ED',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 8,
        marginTop: 8
    },

    input: {
        fontSize: 16,
        flex: 1,
        paddingHorizontal: 12
    },
});