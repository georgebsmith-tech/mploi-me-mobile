import React,{useState} from 'react'

import {View,Modal,Text, TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
import colors from '../../config/colors';
import * as ImagePicker from 'expo-image-picker';
import sendRequest from '../../utils/server-com/sendRequest'
import { useContext } from 'react';
import { UserContext } from '../../context/provider/UserProvider';
import * as FileSystem from 'expo-file-system';
const log = console.log


export default function ImagePickerOptionsModal({isVisible,setIsVisible,setUri}) {
    // log(FileSystem)
   
    const [image, setImage] = useState({})
    const [base64String, setBase64String] = useState()
    let uri;
const userContext= useContext(UserContext)

    const sendInfo = async (image) => {
        FileSystem.readAsStringAsync(image.uri,{encoding:FileSystem.EncodingType.Base64})
        .then(async string=>{
            // log(string);
        
uri="data:image/png;base64, "+string
setUri(uri)  
const body ={uri}

data = await sendRequest(body, "put", `users/avatar/` + userContext.user._id)
console.log(data)

userContext.setUser(data)
        })
      
        // setError("")
        
        const body =new FormData()
        // // body.append("title",title)
        // // body.append("description",description)
        // //  body.append("price",price)
        //     //    body.append("enabled",isEnabled)
        //         //  body.append("category","Tech")
        body.append("image",image)
      

    let data
        // const body = { title,description,url,price,enabled:isEnabled ,category:"Tech"}
        data = await sendRequest(body, "put", `users/avatar/` + userContext.user._id,true)
   
        if (data.error) {
            Alert.alert(data.error)
            // setError(data.error)

        } else {
           
        }

    }


    const takeImage =async  (option) => {
        if (Platform.OS !== 'web') {
     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
     if (status !== 'granted') {
       alert('Sorry, we need camera roll permissions to make this work!');
       return 
     }
   }
let result ;
if(option===2){
    result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

}else{
    result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });
}


//   let result = await ImagePicker.launchCameraAsync({
//     mediaTypes: ImagePicker.MediaTypeOptions.All,
//     allowsEditing: true,
//     aspect: [4, 4],
//     quality: 1,
//   });

       const image ={
              uri:result.uri,
              type:result.type,
              name:result.uri.substr(result.uri.lastIndexOf("/")+1)

          }
log(image)
          setImage(image)
         setUri(image.uri)
                
                sendInfo(image)
}

    return (
        <Modal 
        transparent
        visible={isVisible}
     animationType="slide"
        >
            <View style={{ width: "100%", height: "100%", position: "absolute", backgroundColor: "rgba(0,0,0,0.5)", top: 0, right: 0, zIndex: 10, justifyContent: "flex-end" }}>
            <TouchableWithoutFeedback onPress={() =>  {setIsVisible(false)}}>
            <View style={{ flex: 1}}>

            </View>
        </TouchableWithoutFeedback>

            <View style={{alignItems:"center",backgroundColor:"#fff",paddingTop:25,borderTopLeftRadius: 40, borderTopRightRadius: 40}}>
            <TouchableOpacity
            onPress={()=>takeImage(1)}
             >
            <Text style={{color:colors.primary1,marginBottom:5,padding:10}}>
            Use Camera
            </Text>
            </TouchableOpacity>

<TouchableOpacity
onPress={()=>takeImage(2)}
>
            <Text style={{marginBottom:25,color:colors.primary1,padding:10}}>
            Select from Gallery
            </Text>
            </TouchableOpacity>


            </View>

            </View>
        </Modal>
    )
}
