import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BadgesTabNavigator from '../BadgesScreen/BadgesTabNavigator';
import Login from '../UsersScreen/Login'
import Colors from '../../res/Colors';

const Stack = createStackNavigator();

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
            name="Loading"
            component={Login}
            options={{headerShown: false }}
        />
        <Stack.Screen name="BadgesTabNavigator" component={BadgesTabNavigator} />
        </Stack.Navigator>
    )
}

export default AppStack;