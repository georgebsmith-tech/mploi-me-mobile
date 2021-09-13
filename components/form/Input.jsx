import React from 'react'
import {TextInput,View,StyleSheet,Image,TouchableOpacity} from 'react-native'

export default function Input({toggleSecure,setShowPass,showPass, ...rest}){
    return (
        <View style={{ flexDirection: "row", marginBottom: 25 }}>
        {
            toggleSecure &&      <TouchableOpacity
            onPress={setShowPass}
             style={{position:"absolute",right:10,padding:7,top:9,zIndex:10}}>
             {
                 showPass? <Image source={require("../../assets/images/show-pass.png")} />
                 :
                 <Image source={require("../../assets/images/hide-pass.png")} />
             }
         
        </TouchableOpacity>
        }
   
        <TextInput
         style={[styles.input,{paddingRight:toggleSecure?30:14}]} {...rest}  />
      </View>
    )
}


const styles = StyleSheet.create({
    input: {
  
      width: "80%",
      color: "rgba(0,0,0,0.8)",
      padding: 14,
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