import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 20,
    },
    box: {
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 10,
        width: '100%',
        borderRadius: 5,
    },
    resultBox: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        height: '20%',
        width: '60%',
        borderRadius: 5
    },
    result: {

        padding: 15,
        borderRadius: 5,
    },
    buttonBox: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    }
});