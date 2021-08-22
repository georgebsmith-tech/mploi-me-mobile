import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Home from '../screens/main/Home';
import Profile from '../screens/main/Profile';
import Notifications from '../screens/main/Notifications';
import Search from '../screens/main/Search';
import {Image,view} from 'react-native'


const UserTabNavigator = createMaterialBottomTabNavigator();


const UserTab = ({ route: { params } }) => {
    return (
        <UserTabNavigator.Navigator
            labeled={false}
            activeColor="#e91e63"
            barStyle={{ backgroundColor: 'white' }}

            tabBarOptions={
                {
                    activeTintColor: "blue",
                    inactiveTintColor: "green"
                }

            }
        >
            <UserTabNavigator.Screen
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <>
{
    focused?   <Image source={require("../assets/images/home-focused.png")} color={focused?"green":"black"} />:   <Image source={require("../assets/images/home-unfocused.png")} color={focused?"green":"black"} />
}
                        </>
                     
                    ),
                }}
                name="Home" component={Home} initialParams={params} />
            <UserTabNavigator.Screen name="Search"
                options={{
                    tabBarLabel: 'search',
                    tabBarIcon: ({ focused }) => (
                        <>
                    {
    focused?   <Image source={require("../assets/images/explore-focused.png")} color={focused?"green":"black"} />:   <Image source={require("../assets/images/explore-unfocused.png")} color={focused?"green":"black"} />
}
                        </>
                    ),
                }}
                component={Search}/>
            <UserTabNavigator.Screen
                options={{
                    tabBarLabel: 'Notifications',
                    tabBarIcon: ({ focused }) => (
                                             <>
{
    focused?   <Image source={require("../assets/images/notification-focused.png")} color={focused?"green":"black"} />:   <Image source={require("../assets/images/notification-unfocused.png")} color={focused?"green":"black"} />
}
                        </>
                         
                    ),
                }}
                name="Notifications" component={Notifications} />
            <UserTabNavigator.Screen
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ focused }) => (
                       <>
{
    focused?   <Image source={require("../assets/images/profile-focused.png")} color={focused?"green":"black"} />:   <Image source={require("../assets/images/profile-unfocused.png")} color={focused?"green":"black"} />
}
                        </>
                         
                    ),
                }}
                name="Profile" component={Profile} />
        </UserTabNavigator.Navigator>




    )
}

export default UserTab;


