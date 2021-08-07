import React from 'reacr';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileEdit from './ProfileEdit'
import Profile from './Profile';
import Colors from '../../res/Colors';

const Stack = createStackNavigator();

const UserStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: Colors.blackPearl,
                    shadowColor: Colors.blackPearl,
                },
                headerTintColor: Colors.white,
            }}>
                <Stack.Screen 
                    name="Profile"
                    component={Profile}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="ProfileEdit"
                    component={ProfileEdit}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
    );
};

export default UserStack;