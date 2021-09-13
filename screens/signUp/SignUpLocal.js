import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import sendRequest from '../../utils/server-com/sendRequest'
// import AsyncStorage from '@react-native-community/async-storage'


import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';

// import CusButton from '../components/buttons/CusButton';

import colors from '../../config/colors'
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import Input from '../../components/form/Input';

const log = console.log

const App = ({ navigation }) => {


  const [email, setEmail] = useState("")

  const [firstName, setFirstName] = useState("")

  const [lastName, setLastName] = useState("")
  const [error, setError] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const sendInfo = async () => {
    setError("")
    setSubmitting(true)
    const body = { email, firstName, lastName }
    const data = await sendRequest(body, "post", `users/local-registration`)

  log("async")
 
    // const data = await sendRequest("", "get", `users/local-registration`
   
    if (data.error) {
      setError(data.error)
      setSubmitting(false)
     
    } else {
      // console.log(data)
      console.log(data._id)
      await AsyncStorage.setItem("signUpID",data._id)
    
      navigation.navigate("Pass", { email,id:data._id })
      setSubmitting(false)
    }



  }
  // fetch('https://jsonplaceholder.typicode.com/todos/4')
  //   .then(response => response.json())
  //   .then(json => console.log(json))

  return (
    <KeyboardAvoidingWrapper>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          flex: 1,
        }}>

        <View style={{}}>
          {
            error ? <Text style={{ textAlign: "center", color: "red", backgroundColor: "rgba(255,0,0,0.2)", padding: 10, borderRadius: 8 }}>
              {error}
            </Text> : <Text></Text>
          }
        </View>
        <View style={{ marginBottom: 48 }}>
          <Text style={{ fontSize: 24, fontWeight: "700", color: colors.primary1 }}>
            Join Mploi-me
          </Text>
        </View>
     <Input 
      placeholder="Email address"
      onChangeText={(text) => setEmail(text)}
      value={email}
       />
            <Input 
       placeholder="First Name"
      onChangeText={(text) => setFirstName(text)}
      value={firstName}
       />
      
     
      <Input 
          placeholder="Last Name" 
          value={lastName}
           onChangeText={(text) => setLastName(text)} />
  


        <View style={{ width: "80%" }}>
          <CusButton bg="rgba(9, 29, 110, 1)" fg="white" title={submitting ? <ActivityIndicator color="white" /> : "Continue"}
            iColor="#fff"
            nextPage={sendInfo}
          // nextPage={() => navigation.push("Pass")}
          />
        </View>

      </View>

    </KeyboardAvoidingWrapper>
  );
};

export default App;



const CusButton = ({ bg, fg, title, icon, iColor, nextPage }) => {
  return (
    <TouchableOpacity
      disabled={title !== "Continue" ? true : false}
      style={{ position: "relative" }} onPress={() => nextPage()}>
      <Text style={{ left: 30, top: 40, zIndex: 10 }}>
        <Icon name={icon} size={30} color={iColor} />
      </Text>
      <Text style={{ fontSize: 14, backgroundColor: bg, textAlign: "center", padding: 15, color: fg, fontWeight: "bold", borderRadius: 8, borderColor: "#f2f2f2", borderWidth: 2 }}>

        {title}
      </Text>
    </TouchableOpacity>
  )
}






const styles = StyleSheet.create({
  input: {

    width: "80%",
    color: "rgba(189, 189, 189, 1)",
    padding: 16,
    fontSize: 14,
    borderColor: 'rgba(224, 224, 224, 0.3)',
    borderWidth: 1,
    backgroundColor: "rgba(224, 224, 224, 0.3)"
  }
  ,
  borderLeftAndright: {
    backgroundColor: "rgba(224, 224, 224, 1)",
    flex: 1,
    height: 2
  }
})