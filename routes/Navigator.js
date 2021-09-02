import React,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AsyncStorage} from 'react-native';

import AuthStack from './AuthStack'
import HomeStack from './HomeStack'

const Stack = createStackNavigator();

const Navigator = () => {
    let id
    // useEffect(() => {
        
        (async function(){
            id=await AsyncStorage.getItem("userID")
        })()
        // return () => {
        //     cleanup
        // }
    // }, [])

    return (
        <NavigationContainer navigationOptions={{ headerStyle: { elevation: 0 } }}>
            <Stack.Navigator>
                <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
                <Stack.Screen name="Home-Stack" component={HomeStack} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;


