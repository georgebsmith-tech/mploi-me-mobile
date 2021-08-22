import React from 'react';
import type { Node } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,

  Button,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = ({ navigation }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View style={{ marginBottom: 140, marginTop: 100 }}>
        <Image source={require('../../assets/images/logo-white.png')} />
      </View>
      {/* <Icon
  name='rowing' /> */}


      <View style={{ width: "80%", marginBottom: 20 }}>
        <CustButton
          fg="rgba(9, 29, 110, 1)"
          bg="white" title="Join Using Email" icon="envelope"
          iColor="rgba(9, 29, 110, 1)"
          doThis={() => navigation.push("SignUp")}
        />
      </View>


      <View style={{ width: "80%" }}>
        <CustButton
          doThis={() => navigation.navigate("Home")}
          bg="rgba(9, 29, 110, 1)" fg="white" title="Join Using Google" icon="google" iColor="#fff" />
      </View>

      <View style={{ marginTop: 40, flexDirection: "row" }}>

        <Text style={{ fontSize: 14, fontWeight: "bold", marginRight: 4 }}>Have an account?</Text>
        <TouchableOpacity 
        onPress={()=>navigation.push("SignIn")}
        >

        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#219fff" }}>Sign in</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default App;


const CustButton = ({ bg, fg, title, icon, iColor, doThis }) => {
  return (
    <TouchableOpacity style={{ position: "relative" }} onPress={() => doThis()}>
      <Text style={{ left: 30, top: 40, zIndex: 10 }}>
        <Icon name={icon} size={30} color={iColor} />
      </Text>
      <Text style={{ fontSize: 14, backgroundColor: bg, textAlign: "center", padding: 15, color: fg, fontWeight: "bold", borderRadius: 8, borderColor: "#f2f2f2", borderWidth: 2 }}>

        {title}
      </Text>
    </TouchableOpacity>
  )
}