import React,{useState,useContext} from 'react';
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
import CustomButton from '../../components/buttons/CustomButton';
import UserHeader from '../../components/UserHeader';

import UserLink from '../../components/UserLink';
import UserLinksGroup from '../../components/UserLinksGroup';
import {UserContext} from '../../context/provider/UserProvider'
import sendRequest from '../../utils/server-com/sendRequest'
import StatusLoader from '../../components/StatusLoader'

const App = ({ navigation }) => {

    const userContext = useContext(UserContext)
    const [bio,setBio]=useState(userContext.user.bio)
    const [error,setError]=useState("")
    const [isLoading,setIsLoading]=useState(false)
    
  const sendInfo = async () => {
    setError("")
    setIsLoading(true)
    const body = { bio }
    console.log(userContext.user._id)
    const data = await sendRequest(body, "put",`users/bio/${userContext.user._id}`)
       userContext.setUser(data)
    // const data = await sendRequest("", "get", `users/local-registration`
    // console.log(data)
     setIsLoading(false)
    if (data.error) {
      setError(data.error)
     
    } else {
   alert("Your profile has been Successfully Updated!!")
    }



  }

    
    return (
        <View
            style={{


                backgroundColor: 'white',
                flex: 1,
                padding: 20
            }}>
            {
                isLoading &&  <StatusLoader />
            }

            <UserHeader navigation={navigation} >
                <Text style={{ fontSize: 16, color: "rgba(107, 119, 168, 1)", fontWeight: "700", textAlign: "center" }}>
             About
                </Text>
                <TouchableOpacity
                    onPress={sendInfo}
                    style={{ backgroundColor: "rgba(9, 29, 110, 1)", paddingHorizontal: 12, paddingVertical: 4, borderRadius: 5 }}>
                    <Text style={{ color: "white", fontWeight: "700" }}>
                        Done
                    </Text>
                </TouchableOpacity>

            </UserHeader>
            <View style={{marginTop:20}}>
            <TextInput

             value={bio} 
             multiline={true}
             onChangeText={(text)=>setBio(text)}
             placeholder="Say Something about You..." />
                <Text style={{ fontSize: 16, padding: 7, color: "rgba(79, 79, 79, 1)" }}>
               {userContext.bio}
                </Text>
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