import { StyleSheet } from 'react-native';

const styleOne = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const styleTwo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLarge: {
        paddingHorizontal: 40,
        paddingVertical: 16,
        marginHorizontal: 24,
        marginVertical: 16,
        backgroundColor: '#ec1f7f',
        alignItems: 'center',
        borderRadius: 8,
    },
    pRegWhite: {
        color: 'white',
        fontSize: 16
    }
});

export { styleOne, styleTwo };