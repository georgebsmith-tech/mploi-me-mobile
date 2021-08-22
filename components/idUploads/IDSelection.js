import React, { useState,useEffect } from 'react';
import type { Node } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    StyleSheet,
    Text,
    useColorScheme,
    TouchableOpacity,
    TextInput,
    View,
    Image,
    Button,
    AsyncStorage
} from 'react-native';


import colors from '../../config/colors'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import UserHeader from '../../components/UserHeader';
import sendRequest from '../../utils/server-com/sendRequest';
import * as ImagePicker from 'expo-image-picker';

const App = ({ navigation, option = "Select Your ID" }) => {

    const [id,setId]=useState(null)

    useEffect(() => {
    
   ( async function(){
        const val=await AsyncStorage.getItem("signUpID")

        setId(val)
    })()
        // return () => {
        //     cleanup
        // }
    }, [])


    // const user=route.params.user

    const [image, setImage] = useState({})
      const [uri, setUri] = useState()
    const takeImage =async  () => {

          let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

        
      
           const image ={
                uri:result.uri,
                type:result.type,
                name:result.uri.substr(result.uri.lastIndexOf("/")+1)

            }
      setImage(image)
            setUri(result.uri)
        }
    
    return (
        <View
            style={{
                backgroundColor: 'white',
                width: "100%",
                padding: 20,
                flex: 1,
                marginTop:30
            }}>
            {
 !(option==="Select ID") &&
           
              <UserHeader navigation={navigation} >
            
                <TouchableOpacity
                    onPress={async ()=>{
                        const formData = new FormData()
                        formData.append("image",image)
                        console.log(formData)

                        const form=true
                      
const data = await sendRequest(formData,"put","users/avatar/"+id,form)
navigation.navigate("Interests",{id})


                    }}
                    style={{ backgroundColor: "rgba(9, 29, 110, 1)", paddingHorizontal: 12, paddingVertical: 4, borderRadius: 5 }}>
                    <Text style={{ color: "white", fontWeight: "700" }}>
                        Done
                    </Text>
                </TouchableOpacity>

            </UserHeader>

         }

            <View style={{ marginBottom: 65,marginTop:20 }}>
                <Text style={{ fontSize: 14, fontWeight: "700" }}>
                    Help us improve the authenticity.
                </Text>
                <Text style={{ fontSize: 24, fontWeight: "700", marginTop: 16, fontFamily: "Gilroy" }}>
                    Upload any Government issued ID.
                </Text>
            </View>

            <TouchableOpacity
                onPress={() => navigation.push("IDOptions")}
                style={styles.nextBtn} >
                <Text style={styles.input} >
                    {option}
                </Text>
                <Icon name="arrow-right" size={30} />

            </TouchableOpacity>

{
    option==="Select ID"?<View></View>:<TouchableOpacity
                onPress={takeImage}
                style={{ backgroundColor: "rgba(246, 246, 246, 1)", marginTop: 30, borderRadius: 16, alignItems: "center", justifyContent: "center", height: 180 }}>
                {
                    uri ?
                        <>
                            <Image source={{uri }} style={styles.userImage} />
                            <Text style={{ position: "absolute", backgroundColor: "rgba(0,0,0,0.4)", width: "100%", height: "100%", borderRadius: 16,justifyContent:"center",alignItems:"center", }}>
                                {/* Edit */}
                            </Text>
                        </>
                        :
                        <>
                            <Icon name="camera" size={30} />
                            <Text style={{ marginTop: 20 }}>
                                Upload Photo of card
                            </Text>
                        </>
                }

            </TouchableOpacity>
}
     



            

        </View>
    );
};

export default App;




const styles = StyleSheet.create({
    nextBtn: {

        width: "100%",
        color: "#000",
        padding: 16,

        borderColor: "rgba(224, 224, 224, 0.3)",
        borderRadius: 6,
        borderWidth: 1,
        backgroundColor: "rgba(224, 224, 224, 0.3)",

        flexDirection: "row",
        justifyContent: "space-between"
    }
    , input: {
        color: "#000",
        fontWeight: "700",
        fontSize: 14,
    },
    userImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: 16

    }
})
