import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BadgesTabNavigator from '../BadgesScreen/BadgesTabNavigator';
import Login from '../UsersScreen/Login'
import Colors from '../../res/Colors';
import Signup from '../UsersScreen/Signup';

const Stack = createStackNavigator();
//in this file we just put the main screens of our app, and their styles, like login and signup
const AppStack = () => {
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            headerStyle: {
                backgroundColor: Colors.charade,
                shadowColor: Colors.charade,
            },
            headerTintColor: Colors.white,
        }}>
        <Stack.Screen 
            name="Login"
            component={Login}
            options={{headerShown: false }}
        />
        <Stack.Screen 
            name="Signup"
            component={Signup}
            options={{headerShown: false }}
        />
        <Stack.Screen name="BadgesTabNavigator" component={BadgesTabNavigator} />
        </Stack.Navigator>
    )
}

export default AppStack;