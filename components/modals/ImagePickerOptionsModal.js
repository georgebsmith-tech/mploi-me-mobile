import React,{useState} from 'react'

import {View,Modal,Text, TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
import colors from '../../config/colors';
import * as ImagePicker from 'expo-image-picker';
const log = console.log

export default function ImagePickerOptionsModal({isVisible,setIsVisible,setUri}) {
    const [image, setImage] = useState({})
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

          setImage(image)
          setUri(result.uri)
                console.log(image)
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
