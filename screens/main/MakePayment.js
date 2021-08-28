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
    Image
} from 'react-native';

import CustomButton from '../../components/buttons/CustomButton'
import UserHeader from '../../components/UserHeader';


import colors from '../../config/colors';
import ScreenWrapper from '../../components/ScreenWrapper';


const MakePayment = ({ navigation,route }) => {
    console.log(route)
    return (
        <ScreenWrapper>
        <View
            style={{
                backgroundColor: 'white',
                width: "100%",
                paddingHorizontal: 20,
                flex: 1
            }}>

                    <UserHeader navigation={navigation} >
                <Text style={{ fontSize: 16, color: "rgba(0, 0, 0, 1)", fontWeight: "700", textAlign: "center" }}>
                    Make Payment
                </Text>
                <TouchableOpacity
                    onPress={()=>{}}
                    style={{  }}>
               <Icon name="exclamation-circle" size={20} color="rgba(33, 159, 255, 1)" />
                </TouchableOpacity>

            </UserHeader>

      <View style={{  marginBottom: 25,paddingHorizontal:10 ,marginTop:30}} >
      <Text style={{marginBottom:5,color:"rgba(130, 130, 130, 1)"}}>
Duration of job
      </Text>
          <TextInput
          keyboardType = 'numeric'
          maxValue={200}
          minValue={0}
           placeholder="Select Duration" style={styles.input} value={""} onChangeText={(text) => {}} />
        </View>

            <View style={{ alignItems: "center", marginTop: 30 }}>
              <Text>
You’ll be charged 
              </Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "700",color:"rgba(9, 29, 110, 1)" }}>
           N 23,5000.00
                </Text>
                <Text style={{ textAlign: "center", marginTop: 20,paddingHorizontal:30 }}>
            Your money is secured with us and we will only release the payment to the seller when the job is completed.
                </Text>
            </View>

            <CustomButton title="Make-Payment" mt={80} next={() => navigation.navigate("Profile")} />

        </View>
        </ScreenWrapper>
    );
};

export default MakePayment;




const styles = StyleSheet.create({
    input: {

        width: "100%",
        color: "#000",
        padding: 16,
        fontSize: 14,
        borderColor: "rgba(224, 224, 224, 0.3)",
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: "rgba(224, 224, 224, 0.3)",
        fontWeight: "700"
    }

})
