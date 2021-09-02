import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionPresets,CardStyleInterpolators } from '@react-navigation/stack';
import Home1 from '../screens/Home1'
import SignUpLocal from '../screens/signUp/SignUpLocal'
import SignUpHome from '../screens/signUp/SignUpHome'
import { Button } from 'react-native'

import SignUpLocalPass from '../screens/signUp/SignUpLocalPass'
import SignUpLocalGender from '../screens/signUp/SignUpLocalGender'
import SignUpLocalCountry from '../screens/signUp/SignUpLocalCountry'
import SignUpLocalUser from '../screens/signUp/SignUpLocalUser'
import SignUpLocalSelectID from '../screens/signUp/SignUpLocalSelectID'
import SignUpLocalIDOptions from '../screens/signUp/SignUpLocalIDOptions'
import SignUpLocalInterests from '../screens/signUp/SignUpLocalInterests'
import SignUpSucess from '../screens/signUp/SignUpSucess'
import Home from '../screens/main/Home';
import UserTab from './UserBottomTab';
import OnBoarding from '../screens/signUp/OnBoarding';
import OnBoarding1 from '../screens/signUp/OnBoarding1';
import OnBoarding2 from '../screens/signUp/OnBoarding2';
import SignIn from '../screens/signIn/SignIn';
import GoogleSignIn from '../screens/signIn/GoogleSignIn'
import {AsyncStorage} from 'react-native';

const AuthStackNavigator = createStackNavigator();

AuthStackNavigator.navigationOptions = {
    header: {
        style: { shadowColor: 'transparent' },
    },
};

const AuthStack = () => {

    let id
    // useEffect(() => {
        
        (async function(){
            id=await AsyncStorage.getItem("userID")
        })()
    return (

        <AuthStackNavigator.Navigator
        screenOptions={{
            gestureEnabled:true,
            gestureDirection:"horizontal",
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
            }
        }
        >
        {/* { */}
            {/* id? */}
            <>
            <AuthStackNavigator.Screen name="OnBoarding" component={OnBoarding} options={{ title: "Mploi-me", headerTitleAlign: "center", headerShown: false }} />
            <AuthStackNavigator.Screen name="OnBoarding1" component={OnBoarding1} options={{ title: "Mploi-me", headerTitleAlign: "center", headerShown: false }} />
            <AuthStackNavigator.Screen name="OnBoarding2" component={OnBoarding2} options={{ title: "Mploi-me", headerTitleAlign: "center", headerShown: false }} />
            <AuthStackNavigator.Screen name="SignUpHome" component={SignUpHome} options={{ title: "Mploi-me", headerTitleAlign: "center", headerShown: false }} />
            <AuthStackNavigator.Screen name="SignIn" component={SignIn} options={{ title: "", headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />
                <AuthStackNavigator.Screen name="SignUp" component={SignUpLocal} options={{ title: "", headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />
            <AuthStackNavigator.Screen name="Pass" component={SignUpLocalPass} options={{ title: "", headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />
            <AuthStackNavigator.Screen name="Gender" component={SignUpLocalGender} options={{ title: "", headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />

            <AuthStackNavigator.Screen name="UserType" component={SignUpLocalUser} options={{ title: "", headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />
            <AuthStackNavigator.Screen name="Country" component={SignUpLocalCountry} options={{
                headerShown: false,
                title: "",
                // headerRight: () => (
                //     <Button
                //         onPress={() => alert('This is a button!')}
                //         title="Done"
                //         color="#000"
                //     />), 
                headerStyle: { borderBottomWidth: 0, elevation: 0 }
            }} />

            <AuthStackNavigator.Screen name="SelectID" component={SignUpLocalSelectID} options={{ title: "",headerShown:false, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />
            <AuthStackNavigator.Screen name="IDOptions" component={SignUpLocalIDOptions} options={{ title: "", headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />

            <AuthStackNavigator.Screen name="Interests" component={SignUpLocalInterests} options={{ title: "",headerShown:false, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />
            <AuthStackNavigator.Screen name="SignUpSuccess" component={SignUpSucess} options={{ title: "", headerShown: false, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />

                <AuthStackNavigator.Screen name="Google-SignIn" component={GoogleSignIn
                } options={{ title: "", headerShown: false, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />
            </>
            {/* : */}
            <AuthStackNavigator.Screen name="Home" component={UserTab} options={{ title: "Mploi-me", headerTitleAlign: "center", headerShown: false }} />

        {/* } */}
            




        </AuthStackNavigator.Navigator>

    )
}

export default AuthStack;


