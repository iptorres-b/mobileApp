import React from 'react';
import {
    Text,
    TextInput,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
} from 'react-native';
import Loader from '../Generics/Loader';
import styles from './styles';
import UserSesion from '../../libs/sessions';

const imageBackground = {
    uri: 'https://images.pexels.com/photos/3428278/pexels-photo-3428278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
};

class Signup extends React.Component {
    render() {
        const {isPasswordVisible, isPasswordConfVisible, loading, errors} = this.state;

        if (loading === true ) {
            return <Loader />
        }

        return(
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <StatusBar backgroundColor="transparent" translucent={true} />
                    <ImageBackground source={imageBackground} style={styles.image}>
                        <View style={styles.layerColer}>
                            <View style={styles.scrollForm}>
                                <Text style={[styles.title, {marginTop: 60}]}>Sign up</Text>
                                {errors}
                                <View style={styles.formgroup}>
                                    <Text style={styles.inputText}>Username: </Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'username'}
                                        keyboardAppearance="dark"
                                        onChangeText={text => {
                                            this.setState(prevState => {
                                                let form = Object.assign({}, prevState.form);
                                                form.username = text;
                                                return {form};
                                            });
                                        }}
                                    />
                                    <Text style={styles.inputText}>Email: </Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'email'}
                                        keyboardAppearance="dark"
                                        onChangeText={text => {
                                            this.setState(prevState => {
                                                let form = Object.assign({}, prevState.form);
                                                form.email = text;
                                                return {form};
                                            });
                                        }}
                                    />
                                    <Text style={styles.inputText}>Password: </Text>
                                    <View style={styles.password}>
                                    <TextInput
                                        style={styles.inputPassword}
                                        secureTextEntry={isPasswordVisible}
                                        placeholder={'password'}
                                        keyboardAppearance="dark"
                                        onChangeText={text => {
                                            this.setState(prevState => {
                                                let form = Object.assign({}, prevState.form);
                                                form.password = text;
                                                return {form};
                                            });
                                        }}
                                    />
                                    <TouchableOpacity onPress={this.ToggleisPasswordVisible}>
                                        <Image 
                                            style={{marginRight: 10}}
                                            source={
                                                isPasswordVisible
                                                ? require('../../assets/view.png')
                                                : require('../../assets/hide.png')
                                            }
                                        />
                                    </TouchableOpacity>
                                    </View>
                                    <Text style={styles.inputText}>Confirm password: </Text>
                                    <View style={styles.password}>
                                    <TextInput
                                        style={styles.inputPassword}
                                        secureTextEntry={isPasswordConfVisible}
                                        placeholder={'confirm password'}
                                        keyboardAppearance="dark"
                                        onChangeText={text => {
                                            this.setState(prevState => {
                                                let form = Object.assign({}, prevState.form);
                                                form.password_confirmation = text;
                                                return {form};
                                            });
                                        }}
                                    />
                                    <TouchableOpacity onPress={this.ToggleisPasswordConfVisible}>
                                        <Image 
                                            style={{marginRight: 10}}
                                            source={
                                                isPasswordConfVisible
                                                ? require('../../assets/view.png')
                                                : require('../../assets/hide.png')
                                            }
                                        />
                                    </TouchableOpacity>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={[styles.submit, {marginVertical: 50}]}
                                    onPress={this.handleSubmit}>
                                        <Text style={styles.submitText}>Sign up</Text>
                                    </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        );
    }
}

export default Signup;