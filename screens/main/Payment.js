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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import colors from '../../config/colors'
import CustomButton from '../../components/buttons/CustomButton';

const App = ({ navigation }) => {
  return (
    <View
      style={{

        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 40
      }}>
      <View style={{ marginBottom: 48 }}>

      </View>
      <View style={{ marginBottom: 25, flexDirection: "row" }}>
        <View style={{ width: "100%", paddingHorizontal: 20 }}>
          <Text style={{ marginBottom: 10, color: "rgba(130, 130, 130, 1)" }}>
            How much are you paying
          </Text>
          <TextInput placeholder="Unique Username" style={styles.input} style={styles.textInput}
  keyboardType = 'numeric' />
        </View>
      </View>
      <View>
        <Text style={{ lineHeight: 25, textAlign: "center", color: "rgba(130, 130, 130, 1)" ,fontSize:18}}>
          Your money is secured with us and we will only release the payment to the seller when the job is completed.
        </Text>
      </View>



      <View style={{ width: "100%", paddingHorizontal: 20, marginTop: 72 }}>
        <CustomButton bg="rgba(9, 29, 110, 1)" fg="white" title="Make Payment" iColor="#fff" nextPage={() => navigation.push("Gender")} />
      </View>

    </View>
  );
};

export default App;








const styles = StyleSheet.create({
  input: {
    width: '100%',
    color: 'rgba(189, 189, 189, 1)',
    padding: 16,
    fontSize: 14,
    borderColor: 'rgba(224, 224, 224, 0.3)',
    borderWidth: 1,
    backgroundColor: 'rgba(224, 224, 224, 0.3)',
    borderRadius: 8
  }
  ,
  borderLeftAndright: {
    backgroundColor: "rgba(224, 224, 224, 1)",
    flex: 1,
    height: 2
  }
})