import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeTab from '../screens/homeTab';
import SearchTab from '../screens/searchTab';

const TabNavigator = createBottomTabNavigator();

export default function BottomTabHomeScreen() {
    return (
        <TabNavigator.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'search-circle' : 'search-circle-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <TabNavigator.Screen name={'Home'} component={HomeTab}/>
            <TabNavigator.Screen name={'Search'} component={SearchTab}/>
        </TabNavigator.Navigator>
    );
};
