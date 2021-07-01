import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BadgeLanding from '../BadgesLanding/BadgeLanding';
import Colors from '../../res/Colors';
import BadgesScreen from './BadgesScreen';

const Stack = createStackNavigator();

const BadgesStack = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.blackPearl,
                    shadowColor: Colors.blackPearl,
                },
                headerTintColor: Colors.white,
            }}>
            <Stack.Screen 
            name="Landing" 
            component={BadgeLanding}
            options={{headerShown: false}} 
            />
            <Stack.Screen name="Badges" component={BadgesScreen}/>
        </Stack.Navigator>
    );
};

export default BadgesStack;