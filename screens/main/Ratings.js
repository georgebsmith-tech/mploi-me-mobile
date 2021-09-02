import React,{useState,useContext} from 'react';
import type { Node } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  TextInput,
  Button,
  View,
} from 'react-native';
import { UserContext } from '../../context/provider/UserProvider';
import sendRequest from '../../utils/server-com/sendRequest'
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import colors from '../../config/colors'
import CustomButton from '../../components/buttons/CustomButton';
import UserHeader from '../../components/UserHeader'
import Heading from '../../components/Heading'
import StatusLoader from '../../components/StatusLoader';

const Rating = ({ navigation,route }) => {
  const user =route.params.user
    const userContext = useContext(UserContext)

    const [text,setText]=useState("")
    const [rating,setRating]=useState(0)
    const [error, setError] = useState("")

    const [isLoading,setIsloading]=useState(false)
    
    
    const sendInfo = async () => {
      setIsloading(true)
      const body={text,rating,ratedBy:{
        userID:userContext.user._id,
        firstName:userContext.user.firstName,
        lastName:userContext.user.lastName,
        profession:userContext.user.profession
      }}
      console.log(body)
      const data = await sendRequest(body, "put", `users/rates/${user._id}`)
      
      if (data.error) {
        setError(data.error)
    } else {
      console.log(data)
      alert(`You have successfully rated ${user.lastName} ${user.lastName}`)
      navigation.pop()
    }

    setIsLoading(false)
    
    
    
  }
  
  return (
    <View
      style={{

     paddingHorizontal:20,
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 40
      }}>
  

      <UserHeader navigation={navigation} >
     <TouchableOpacity
     onPress={sendInfo}
      style={{backgroundColor:"rgba(9, 29, 110, 1)",paddingHorizontal:10,paddingVertical:4,borderRadius:6}}>
     <Text style={{color:"#fff",fontWeight:"700"}}>
Rate
     </Text>

     </TouchableOpacity>

      </UserHeader>

      {
        isLoading && <StatusLoader/>
      }
<Heading caption={`Rate ${user.lastName} ${user.firstName}. ⭐`} question={`how do you feel about ${user.lastName} ${user.firstName}?`}/>

      <View style={{ marginBottom: 25,padding:17.5 }}>

      <TextInput
      placeholder={`Rate ${user.lastName} ${user.firstName}`}
    multiline={true}
    numberOfLines={8}
    onChangeText={(text)=>setText(text)}
    style={{backgroundColor:"rgba(224, 224, 224, 0.3)",borderRadius:8,padding:16,textAlignVertical: 'top'}}
   />
        
      </View>




     <Rate setRating={setRating}/>

    </View>
  );
};

export default Rating;


const Rate=({setRating})=>{
  const [rateCount,setRateCount]=useState(0)
    const content=[]
    for (let i=1;i<=5;i++){
content.push(<TouchableOpacity onPress={()=>{setRateCount(i);setRating(i)}}>
         <Icon name="star" size={40} style={{color:i<=rateCount?"rgba(224, 235, 56, 1)":"rgba(234, 234, 234, 1)",marginRight:7.7}}/>
        
        </TouchableOpacity>)
    }
  return (
 <View style={{ width: "100%", paddingHorizontal: 20, marginTop: 15,flexDirection:"row",justifyContent:"center" }}>
    {content}
      
      </View>
  )
  
}








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