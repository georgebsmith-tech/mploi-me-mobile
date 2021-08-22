import React from 'react';
import type { Node } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';

import colors from '../../config/colors'

const App = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View style={{ marginBottom: 30 }}>
        <Text style={{ fontSize: 24, fontWeight: "700", color: "black" }}>
          Enter Code
        </Text>
      </View>

      <View>

        <View style={{ alignItems: "center", flexDirection: "column" }}>
          <Text style={{ fontSize: 16 }}>

            An SMS was Sent to

          </Text>

          <Text style={{ fontWeight: "700" }}>

            090 090 090 00

          </Text>

          <Text>

            Edit phone number

          </Text>
        </View>

      </View>
      <View style={{ width: "80%", flexDirection: "row", marginTop: 40 }}>
        {
          [1, 2, 3, 4, 5].map(text => <TextInput style={styles.input} />)
        }
      </View>
      <View style={{ flexDirection: "row", marginTop: 80 }}>
        <Text style={{ marginRight: 5 }}>
          Resend Code in
        </Text>
        <Text style={{ fontWeight: "700", marginRight: 5 }}>
          19
        </Text>
        <Text>
          seconds
        </Text>
      </View>

    </View>
  );
};

export default App;


const CustButton = ({ bg, fg, title, icon, iColor }) => {
  return (
    <TouchableOpacity style={{ position: "relative" }}>
      <Text style={{ left: 30, top: 40, zIndex: 10 }}>
        <Icon name={icon} size={30} color={iColor} />
      </Text>
      <Text style={{ fontSize: 14, backgroundColor: bg, textAlign: "center", padding: 15, color: fg, fontWeight: "700", borderRadius: 5, borderColor: "#f2f2f2", borderWidth: 2 }}>

        {title}
      </Text>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  input: {

    flex: 1,
    color: "rgba(189, 189, 189, 1)",
    padding: 16,
    fontSize: 14,
    borderColor: 'rgba(224, 224, 224, 0.3)',
    borderWidth: 1,
    margin: 7,
    backgroundColor: "rgba(224, 224, 224, 0.3)"
  }
  ,
  borderLeftAndright: {
    backgroundColor: "rgba(224, 224, 224, 1)",
    flex: 1,
    height: 2
  }
})