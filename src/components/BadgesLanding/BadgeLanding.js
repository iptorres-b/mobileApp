import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import Colors from '../../res/Colors'

const imageBackground = {
    uri: 'https://images.pexels.com/photos/2362002/pexels-photo-2362002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
};

class BadgeLanding extends React.Component{
    handlePress = () =>{
        this.props.navigation.navigate('Badges');
    };

    render(){
        return (
        <View style={styles.container}>
            <StatusBar backgroundColor="transparent" translucent={true}/>
            <ImageBackground source={imageBackground} style={styles.image}>
                <View style={styles.layerColor}>
                    <Text style={styles.title}>
                        Wellcome {'\n'} to my {'\n'}App
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={this.handlePress}>
                        <Text style={styles.buttonText}>Wellcome</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    layerColor:{
        flex: 2,
        backgroundColor:'#1b2932cc',
        justifyContent:'center',
        alignItems: 'center',
    },
    image: {
        flex:1,
        resizeMode:'cover',
        justifyContent: 'center',
    },
    title: {
        margin:30,
        fontSize:70,
        fontWeight:'bold',
        color: Colors.white,
    },
    button: {
        padding:15,
        marginTop: 50,
        borderRadius: 15,
        backgroundColor: '#121212cc',
        borderColor: Colors.white,
        borderWidth: 1,
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight:'bold',
        paddingHorizontal:25,
        color: Colors.white,
    }
});

export default BadgeLanding