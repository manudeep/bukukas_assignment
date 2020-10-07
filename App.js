import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabHomeScreen from './js/navigation/BottomTabHomeScreen';
import detailScreen from './js/screens/detailScreen';

const StackNavigator = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator.Navigator initialRouteName={'BottomTabHomeScreen'}
                                      headerMode={Platform.OS === 'android' ? 'screen' : 'float'}
                                      screenOptions={{
                                          headerTintColor: 'white',
                                          headerStyle: {backgroundColor: 'tomato'},
                                      }}>
                <StackNavigator.Screen name={'BottomTabHomeScreen'} component={BottomTabHomeScreen} options={{title: 'Listing'}}/>
                <StackNavigator.Screen name={'PDP'} component={detailScreen} options={{title: 'Detail'}}/>
            </StackNavigator.Navigator>
        </NavigationContainer>
    );
};
