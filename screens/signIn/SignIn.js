import React, { useState } from 'react';
import type { Node } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import sendRequest from '../../utils/server-com/sendRequest'
// import { AsyncStorage } from "@react-native-community/async-storage"
import {
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  TextInput,
  View,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';


import colors from '../../config/colors';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';

const log = console.log

const App = ({ navigation }) => {
  const [submitting, setSubmitting] = useState(false)
    const [submittingG, setSubmittingG] = useState(false)

  const [userInfo, setUserInfo] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const sendInfo = async () => {
    setError("")
    setSubmitting(true)
    log("cliecked")
    const body = { userInfo, password }
    const data = await sendRequest(body, "post", `users/login`)
    log(data)
    // const data = await sendRequest("", "get", `users/local-registration`
    setSubmitting(false)
    if (data.message) {
      setError(data.message)

    } else {
      log(data)
      const id = data._id
      await AsyncStorage.setItem("userID",id)

      log(id)
      navigation.navigate("Home", { id })
    }

  }


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
            error ? <Text style={{ textAlign: "center", color: "red", backgroundColor: "rgba(255,0,0,0.2)", width: 200, padding: 10, borderRadius: 8 }}>
              {error}
            </Text> : <Text></Text>
          }
        </View>

        <View style={{ marginBottom: 48 }}>
          <Text style={{ fontSize: 24, fontWeight: "700" }}>
            Welcome back 🎉
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 25 }}>
          <TextInput
            onChangeText={text => setUserInfo(text)}
            value={userInfo}
            placeholder="Email address/Phone number" style={styles.input} />
        </View>

        <View style={{ flexDirection: "row", marginBottom: 25 }}>
          <TextInput
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="Enter Password" style={styles.input} />
        </View>



        {/* <View style={{ width: "80%", marginBottom: 20 }}>
          <CustButton
            action={sendInfo}
            fg="white"
            bg={userInfo ? colors.primary1 : "rgba(189, 189, 189, 1)"}
            // title="" 
            title={submitting ? <ActivityIndicator color="white" /> : "Sign in"}

          />
        </View> */}
        <View style={{ width: "80%", marginBottom: 20 }}>
          <CustButton bg="rgba(9, 29, 110, 1)" fg="white"
            title={submitting ? <ActivityIndicator
              color="white" /> : "Sign in"}
            iColor="#fff"
            fg="white"
//  action={() => navigation.push("Google-SignIn")}
            action={sendInfo}
          // nextPage={() => navigation.push("Pass")}
          />
        </View>

        <View style={{ flexDirection: "row", marginTop: 25, width: "85%", alignItems: "center" }}>
          <Text style={styles.borderLeftAndright}>

          </Text>
          <Text style={{ fontSize: 14, marginLeft: 7, marginRight: 7 }}>
            Or
          </Text>
          <Text style={styles.borderLeftAndright}>

          </Text>
        </View>

      <View style={{ width: "80%", marginBottom: 20 }}>
          <CustButton bg="rgba(9, 29, 110, 1)" fg="white"
            title={submittingG ? <ActivityIndicator
              color="white" /> : "Sign In Using Google"}
            iColor="#fff"
            icon="google" 
            fg="white"
//  action={() => navigation.push("Google-SignIn")}
            action={sendInfo}
          // nextPage={() => navigation.push("Pass")}
          />
        </View>


      </View>
    </KeyboardAvoidingWrapper>
  );
};

export default App;


const CustButton = ({ bg, fg, title, icon, iColor, action }) => {
  return (
    <TouchableOpacity
      disabled={(title !== "Sign in" && title !=="Sign In Using Googl") ? true : false}
      onPress={() => action()}
      style={{ position: "relative" }}>
      <Text style={{ left: 30, top: 40, zIndex: 10 }}>
        <Icon name={icon} size={30} color={iColor} />
      </Text>
      <Text style={{ fontSize: 14, backgroundColor: bg, textAlign: "center", padding: 15, color: fg, fontWeight: "bold", borderRadius: 5, borderColor: "#f2f2f2", borderWidth: 2 }}>

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