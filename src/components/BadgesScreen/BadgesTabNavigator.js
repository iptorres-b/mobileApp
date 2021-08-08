import React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BadgesStack from './BadgesStack';
import Colors from '../../res/Colors';
import UserStack from '../UsersScreen/UserStack';
import FavoritesStack from '../Favorites/FavoritesStack';

const Tabs = createBottomTabNavigator();
// this navigator is for the favorites, the home and the profile
const BadgesTabNavigator = () => {
    return (
        <Tabs.Navigator
            tabBarOptions={{
                showLabel: false,
                showIcon: true,
                tintColor: Colors.white,
                activeTintColor: '#1106B8',
                style: {
                    backgroundColor: Colors.zircon,
                },
            }}>
            <Tabs.Screen 
                name="Favorites"
                component={FavoritesStack}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Image 
                            style={{tintColor: color, width: size, height: size }}
                            source={require('../../assets/notFavorite.png')} 
                        />
                    ),
                }}
            />
            <Tabs.Screen 
                name="Badges"
                component={BadgesStack}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Image 
                            style={{tintColor: color, width: size, height: size }}
                            source={require('../../assets/home.png')} 
                        />
                    ),
                }}
            />
            <Tabs.Screen 
                name="Profile"
                component={UserStack}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Image 
                            style={{tintColor: color, width: size, height: size }}
                            source={require('../../assets/profile.png')} 
                        />
                    ),
                }}
            />
        </Tabs.Navigator>
    );
};

export default BadgesTabNavigator;