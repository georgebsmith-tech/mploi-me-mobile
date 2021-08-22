import React, { useContext, useState } from 'react';

import {ScrollView,View,Text,TextInput,StyleSheet,TouchableOpacity,Switch,Alert,Platform,Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import UserHeader from '../../components/UserHeader'
import sendRequest from '../../utils/server-com/sendRequest'
import { UserContext } from '../../context/provider/UserProvider';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';

const log = console.log

const AddItem =({navigation})=>{
       const [isEnabled,setIsEnabled]=useState(false)
       const [title,setTitle]=useState("")
         const [description,setDescription]=useState("")
           const [price,setPrice]=useState(null)
             const [url,setUrl]=useState("")
                 const [error, setError] = useState("")
             const [submitting, setSubmitting] = useState(false)
        const userContext = useContext(UserContext)

            const [image, setImage] = useState({})
      const [uri, setUri] = useState()

                 const sendInfo = async () => {
        setError("")
        setSubmitting(true)
        const body =new FormData()
        body.append("title",title)
        body.append("description",description)
         body.append("price",price)
               body.append("enabled",isEnabled)
                 body.append("category","Tech")
                   body.append("image",image)

    
        // const body = { title,description,url,price,enabled:isEnabled ,category:"Tech"}
        const data = await sendRequest(body, "post", `jobs/add-a-job/` + userContext.user._id,true)
        // const data = await sendRequest("", "get", `users/local-registration`
        setSubmitting(false)
        console.log("hre"+data)
            console.log(body)
        if (data.error) {
            log(data.error)
            Alert.alert(data.error)
            setError(data.error)

        } else {
            log(data)
            const id = data._id

            log(id)
           navigation.push("Job-Upload-Success")
        }

    }

       const takeImage =async  () => {
           if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
          return 
        }
      }
        // launchCamera({maxWidth:500,maxHeight:500,mediaType:"photo"},(response)=>{
      
        //     const image ={
        //         uri:response.assets[0].uri,
        //         type:response.assets[0].type,
        //         name:response.assets[0].fileName

        //     }
        //     setImage(image)
        //     setUri(response.assets[0].uri)
        //           console.log(image)

        // })

        let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);
         const image ={
                uri:result.uri,
                type:result.type,
                name:result.uri.substr(result.uri.lastIndexOf("/")+1)

            }

            console.log(image)
            setImage(image)
            setUri(result.uri)
                  console.log(image)
    }

    
    return (
     
        
    <View style={{flex:1,backgroundColor:"#fff",padding:20}}>
    <ScrollView style={{flex:1}}>
    <UserHeader navigation={navigation}>
    <Text style={{fontSize:16,fontWeight:"700",color:"rgba(107, 119, 168, 1)"}}>
    Add Item

    </Text>
    <TouchableOpacity
    onPress={sendInfo}
    >
    <Text style={{color:"rgba(157, 165, 197, 1)"}}>
Save
    </Text>

    </TouchableOpacity>

    </UserHeader>

 {/* image ?
                        <>
                            <Image source={{ uri: image }} style={styles.userImage} />
                            <Text style={{ position: "absolute", backgroundColor: "rgba(0,0,0,0.3)", width: "100%", height: "100%", borderRadius: 16 }}>
                                Edit
                            </Text>
                        </>
                        : */}
    <TouchableOpacity
                onPress={takeImage}
                style={{ backgroundColor: "rgba(246, 246, 246, 1)", marginTop: 70, borderRadius: 16, alignItems: "center", justifyContent: "center", height: 200 ,marginBottom:30}}>
                {
                     uri ?
                        <>
                            <Image source={{uri }} style={styles.userImage} />
                            {/* <Text style={{ position: "absolute", backgroundColor: "rgba(0,0,0,0.4)", width: "100%", height: "100%", borderRadius: 16,justifyContent:"center",alignItems:"center", }}>
                             
                            </Text> */}
                        </>
                        :
                   
                        <>
                            <Icon name="camera" size={30} />
                            <Text style={{ marginTop: 20 ,color:"rgba(107, 119, 168, 1)"}}>
                               Add Photos
                            </Text>
                        </>
                }

            </TouchableOpacity>

<View>
<TextInput
onChangeText={text=>setTitle(text)}
 placeholder="Item Name"  
 style={styles.input}
 value={title}
 />
<TextInput
onChangeText={text=>setPrice(text)}
 placeholder="Price" 
  style={styles.input}
   value={price}
   keyboardType="numeric"
  />
<TextInput 
onChangeText={text=>setDescription(text)}
placeholder="Description"
multiline={true}
  style={styles.input}
   value={description}
  />
<TextInput
onChangeText={text=>setUrl(text)}
 placeholder="https://"
   style={styles.input}
    value={url}
   />
</View>

<View>
<View style={{marginTop:30,alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}>
<Text style={{color:"rgba(107, 119, 168, 1)",fontWeight:"700"}}>
Show this item
</Text>

<View>
<Switch
 trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "rgba(9, 29, 110, 1)" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={()=>setIsEnabled(!isEnabled)}
        value={isEnabled}
 />
</View>

</View>
<Text style={{color:"rgba(157, 165, 197, 1)",fontSize:12,marginTop:10,width:200}}>
When you hide item customers wont see it.
</Text>

</View>
    </ScrollView>
    </View>

    )

}

export default AddItem;


const styles=StyleSheet.create({
    input:{
        padding:7,
        marginBottom:8,
        color:"rgba(189, 189, 189, 1)"
    
    }
    ,
    userImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: 16

    }
})