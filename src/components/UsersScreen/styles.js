import { StyleSheet } from 'react-native';
import Colors from '../../res/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    scrollView: {
        flex: 1,
    },
    layerColer: {
        flex: 2,
        width: '100%',
        backgroundColor: '#c7c4f5cc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '50%',
        backgroundColor: Colors.white,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: Colors.white,
    },
    scrollForm: {
        marginVertical: 80,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        backgroundColor: Colors.white,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: Colors.zircon,
    },
    title: {
        fontSize: 33,
        fontWeight: 'bold',
        marginBottom: 30,
        color: Colors.zircon,
    },
    formText: {
        color: Colors.zircon,
        alignItems: 'center',
    },
    formgroup: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '80%',
    },
    input: {
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.zircon,
    },
    inputText: {
        fontSize: 19,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
        color: Colors.zircon,
    },
    inputPassword: {
        width: '85%',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    password: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.zircon,
    },
    submit: {
        marginVertical: 35,
        width: '35%',
        borderWidth: 1,
        borderColor: Colors.zircon,
        borderRadius: 10,
        backgroundColor: Colors.zircon,
    },
    submitText: {
        fontSize: 17,
        marginHorizontal: 15,
        marginVertical: 10,
        color: Colors.white,
        textAlign: 'center',
    },
    errorContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#FF353C40',
        borderRadius: 5,
    },
    errorMsg: {
        color: '#990009',
    },
    signUpTouchable: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
    },
    signUpBoldText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.zircon,
        alignItems: 'center',
    },
});

export default styles;