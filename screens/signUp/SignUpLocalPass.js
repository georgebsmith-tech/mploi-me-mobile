/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import type { Node } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import sendRequest from '../../utils/server-com/sendRequest'
import {
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  TextInput,
  View,
  Dimensions,
  AsyncStorage
} from 'react-native';

// import { AsyncStorage } from '@react-native-async-storage/async-storage'

import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper'



import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import colors from '../../config/colors'


const log = console.log

const App = ({ navigation, route }) => {

// (async function(){
//       log( await AsyncStorage.getItem("signUpID"))
// })()
  const deviceHeight=Dimensions.get("window").height
  const [error, setError] = useState("")

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  log(route.params)

  const {email,id} = route.params

  const sendInfo = async () => {
    const body = { email, password, repeatPassword, username }
    const data = await sendRequest(body, "post", `users/register-pass`)
    // const data = await sendRequest("", "get", `users/local-registration`
    if (data.error) {
      setError(data.error)
    } else {
      navigation.navigate("Gender", { email,id,firstName:data.firstName })
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
        height:deviceHeight-80
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
      <View style={{ flexDirection: "row", marginBottom: 25 }}>
        <TextInput
          autoCompleteType="username"
          placeholder="Unique Username" style={styles.input}
          value={username} onChangeText={text => setUsername(text)}
        />
      </View>
      <View style={{ flexDirection: "row", marginBottom: 25 }}>
        <TextInput
          textContentType="password"
          secureTextEntry={true}
          placeholder="Password" style={styles.input} value={password} onChangeText={text => setPassword(text)} />
      </View>
      <View style={{ flexDirection: "row", marginBottom: 25 }}>
        <TextInput
          textContentType="password"
          secureTextEntry={true}
          placeholder="Confirm Password" style={styles.input}
          value={repeatPassword} onChangeText={text => setRepeatPassword(text)} />
      </View>
      <View style={{ width: "100%", paddingHorizontal: 40 }}>

        <View style={{ justifyContent: "flex-start", width: "100%" }}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
            <Icon name="check-circle" style={{ marginRight: 5 }} />
            <Text style={{ fontSize: 16 }}>

              8 Characters

            </Text>

          </View>

          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
            <Icon name="check-circle" style={{ marginRight: 5 }} />
            <Text style={{ fontSize: 16 }}>

              Uppercase

            </Text>

          </View>


          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
            <Icon name="check-circle" style={{ marginRight: 5 }} />
            <Text style={{ fontSize: 16 }}>

              Special character

            </Text>

          </View>
        </View>

      </View>


      <View style={{ width: "80%" }}>
        <CustButton
          nextPage={sendInfo}
          bg="rgba(9, 29, 110, 1)" fg="white" title="Join Mploi-me" iColor="#fff" />
      </View>

    </View>
        </KeyboardAvoidingWrapper>
  );
};

export default App;


const CustButton = ({ bg, fg, title, icon, iColor, nextPage }) => {
  return (
    <TouchableOpacity style={{ position: "relative", borderRadius: 8 }} onPress={() => nextPage()}>
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
    width: '80%',
    color: 'rgba(189, 189, 189, 1)',
    padding: 16,
    fontSize: 14,
    borderColor: 'rgba(224, 224, 224, 0.3)',
    borderWidth: 1,
    backgroundColor: 'rgba(224, 224, 224, 0.3)'
  }
  ,
  borderLeftAndright: {
    backgroundColor: "rgba(224, 224, 224, 1)",
    flex: 1,
    height: 2
  }
})