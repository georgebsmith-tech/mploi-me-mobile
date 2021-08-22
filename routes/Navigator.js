import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthStack from './AuthStack'
import HomeStack from './HomeStack'

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer navigationOptions={{ headerStyle: { elevation: 0 } }}>
            <Stack.Navigator>
                <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
                {/* <HomeStack /> */}
                <Stack.Screen name="Home-Stack" component={HomeStack} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;


