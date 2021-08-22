import React,{useState} from 'react';
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

const App = ({ navigation }) => {
  return (
    <View
      style={{

     paddingHorizontal:20,
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 40
      }}>
      <UserHeader navigation={navigation}>
     <TouchableOpacity style={{backgroundColor:"rgba(9, 29, 110, 1)",paddingHorizontal:10,paddingVertical:4,borderRadius:6}}>
     <Text style={{color:"#fff",fontWeight:"700"}}>
Rate
     </Text>

     </TouchableOpacity>

      </UserHeader>
<Heading caption=" Rate armstrong. ⭐" question="how do you feel about armstrong?"/>

      <View style={{ marginBottom: 25,padding:17.5 }}>

      <TextInput
      placeholder={`Rate armstrong`}
    multiline={true}
    numberOfLines={8}
    onChangeText={()=>{}}
    style={{backgroundColor:"rgba(224, 224, 224, 0.3)",borderRadius:8,padding:16,textAlignVertical: 'top'}}
   />
        
      </View>




     <Rate />

    </View>
  );
};

export default App;


const Rate=()=>{
  const [rateCount,setRateCount]=useState(0)
    const content=[]
    for (let i=1;i<=5;i++){
content.push(<TouchableOpacity onPress={()=>setRateCount(i)}>
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