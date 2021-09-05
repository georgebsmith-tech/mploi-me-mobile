import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Button } from 'react-native'


import SignUpLocalCountry from '../screens/signUp/SignUpLocalCountry'


import Inbox from '../screens/main/Inbox';

import JobDetailed from '../screens/main/JobDetailed';
import Ratings from '../screens/main/Ratings';
import InboxDetailed from '../screens/main/InboxDetailed';
import Payment from '../screens/main/Payment';
import AccountDetails from '../screens/main/AccountDetails'
import About from '../screens/main/About'
import Contact from '../screens/main/Contact'
import DeleteAccount from '../screens/main/DeleteAccount'
import OtherProfile from  '../screens/main/OtherProfile'
import AddItem from '../screens/main/AddItem'

import MakePayment from '../screens/main/MakePayment';
import MapScreen from '../screens/main/MapScreen';

import MyJobs from '../screens/main/MyJobs'
import PaystackPayment from '../screens/main/PaystackPayment'


import JobUploadSuccess from '../screens/main/JobUploadSuccess';
import PaymentSuccess from '../screens/main/PaymentSuccess'

import AddContact from '../screens/main/AddContact'
import JobPaymentNotification from '../screens/main/JobPaymentNotification';
const AuthStackNavigator = createStackNavigator();

AuthStackNavigator.navigationOptions = {
    header: {
        style: { shadowColor: 'transparent' },
    },
};

const HomeStack = ({ route: { params } }) => {
    return (

        <AuthStackNavigator.Navigator>
            <AuthStackNavigator.Screen name="Inbox" component={Inbox} options={{ title: "Messages", headerStyle: { borderBottomWidth: 0, elevation: 0 }, headerTitleAlign: "center" }} />
            <AuthStackNavigator.Screen name="Job-Detailed" 
             initialParams={params}
            component={JobDetailed} options={{ title: "", headerShown: false, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />
            <AuthStackNavigator.Screen name="Inbox-Detailed" component={InboxDetailed} options={{ title: "", headerShown: false, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />
            <AuthStackNavigator.Screen name="Payment" component={Payment} options={{ title: "Make Payment", headerTitleAlign: "center", headerShown: true, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />
            <AuthStackNavigator.Screen name="Ratings" component={Ratings} options={{ title: "", headerShown: false, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />
            <AuthStackNavigator.Screen name="Account-Details" component={AccountDetails} options={{ title: "", headerShown: false, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />
            <AuthStackNavigator.Screen name="About" component={About} options={{ title: "", headerShown: false, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />
            <AuthStackNavigator.Screen name="Contact" component={Contact} options={{ title: "", headerShown: false, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />

            <AuthStackNavigator.Screen name="Add Contact" component={AddContact} options={{ title: "", headerShown: false, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />

            <AuthStackNavigator.Screen name="Delete-Account" component={DeleteAccount} options={{ title: "", headerShown: false, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />
   <AuthStackNavigator.Screen name="Add-Item" component={AddItem} options={{ title: "", headerShown: false, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />

      <AuthStackNavigator.Screen name="Job-Upload-Success"
       component={JobUploadSuccess} options={{ title: "", headerShown: false, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />
             <AuthStackNavigator.Screen name="Other-Profile"
       component={OtherProfile} options={{ title: "", headerShown: false, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />

           <AuthStackNavigator.Screen name="Make-Payment"
       component={MakePayment} options={{ title: "", headerShown: false, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />

         <AuthStackNavigator.Screen name="Map-Screen"
       component={MapScreen} options={{ title: "", headerShown: false, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />

                <AuthStackNavigator.Screen name="My-Jobs"
       component={MyJobs} options={{ title: "", headerShown: false, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />
           <AuthStackNavigator.Screen
            name="Job-Payment-Notification"
            initialParams={params}
       component={JobPaymentNotification} options={{ title: "", headerShown: false, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />

<AuthStackNavigator.Screen
            name="Paystack-Payment"
            initialParams={params}
       component={PaystackPayment} options={{ title: "", headerShown: false, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />

       
<AuthStackNavigator.Screen
            name="Payment-Success"
            initialParams={params}
       component={PaymentSuccess} options={{ title: "", headerShown: false, headerStyle: { borderBottomWidth: 0, elevation: 0 } }} />

       

        </AuthStackNavigator.Navigator>

    )
}

export default HomeStack;


