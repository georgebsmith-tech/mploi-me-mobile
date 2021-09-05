import React,{useState,useRef} from 'react';

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

import {commafy} from '../../utils/commafy'
import colors from '../../config/colors';
import ScreenWrapper from '../../components/ScreenWrapper';



const MakePayment = ({ navigation,route }) => {
    const durationRef=useRef()
  const {job,user}=route.params
  const [duration,setDuration]=useState(0)
  const increaseDuration=()=>{
      const newValue=duration*1+1
      console.log(newValue)
      setDuration(newValue)
    
  }

  const decraseDuration=()=>{
    const newValue=duration===0?0:duration*1-1
    console.log(newValue)
    setDuration(newValue)
  }
  console.log(duration)
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
      <View>
      {/* <TextInput
      ref={durationRef}
          keyboardType = 'numeric'
          maxValue={200}
          minValue={0}
          value={duration}
          onChangeText={(text)=>setDuration(text)}
           placeholder="Select Duration" style={styles.input} /> */}
           <Text style={styles.input}>
               {duration}
           </Text>
           <View 
           style={{position:"absolute",right:10,height:"100%",bottom:-6}}
           >
           <TouchableOpacity
           onPress={increaseDuration}
           style={styles.spinnerContainer}
           >
           <Image
           style={styles.spinner}
            source={require("../../assets/images/spin-up.png")} />
           </TouchableOpacity>
            
           <TouchableOpacity
            onPress={decraseDuration}
                style={styles.spinnerContainer}
           >
           <Image
             style={styles.spinner}
            source={require("../../assets/images/spin-down.png")} />
           </TouchableOpacity>
           </View>

      </View>
     
        </View>

            <View style={{ alignItems: "center", marginTop: 30 }}>
              <Text>
You’ll be charged 
              </Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "700",color:"rgba(9, 29, 110, 1)" }}>
           N {commafy(job.price)}
                </Text>
                <Text style={{ textAlign: "center", marginTop: 20,paddingHorizontal:30 }}>
            Your money is secured with us and we will only release the payment to the seller when the job is completed.
                </Text>
            </View>

            <CustomButton 
            title="Make Payment"
             mt={80} 
             next={() => navigation.navigate("Paystack-Payment",{job,user})}

              />

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
        fontWeight: "700",
        // backgroundColor:"red",
        paddingRight:25
    },
    spinner:{
       
    },
    spinnerContainer:{
padding:8
    }

})
