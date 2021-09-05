import React, { useContext, useRef } from 'react';
import { WebView } from 'react-native-webview';
import  { Paystack }  from 'react-native-paystack-webview';

import {View} from 'react-native'
import { UserContext } from '../../context/provider/UserProvider';
export default function App({navigation,route}) {
  const authorization_url = 'https://paystack.com/pay/mulyl2jh1y';
  const {job,user}=route.params
const userContext = useContext(UserContext)
  return (
    // <WebView 
    //   source={{ uri: authorization_url }}
    //   style={{ marginTop: 40 }}
    // />
    

    <View style={{flex:1}}> 
        <Paystack  
        paystackKey="pk_test_47ec706f846717b5b9b5bb3fa7c337c99d26d291"
        amount={job.price}
        billingEmail={userContext.user.email}
        activityIndicatorColor="green"
        onCancel={(e) => {
          navigation.pop()
        }}
        onSuccess={(res) => {
          // handle response here
        }}
        autoStart={true}
      />
    </View>
  );
}