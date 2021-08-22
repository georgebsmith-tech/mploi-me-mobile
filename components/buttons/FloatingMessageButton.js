import React,{useState} from 'react'


import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const FloatingMessageButton = ({ navigation }) => {

    const [isExpanded,setIsExpanded]=useState(false)

    const image=isExpanded?require("../../assets/images/close-buttons.png"):require("../../assets/images/show-buttons.png")
    return (
        <View  style={{ position: "absolute", bottom: 60, right: 0, zIndex: 10 }}>
{
    isExpanded &&        <View>
 <TouchableOpacity
   style={{marginBottom:10}}
            onPress={() => navigation.navigate('Home-Stack', { screen: 'My-Jobs' })}
           >
            <Image source={require("../../assets/images/gigs.png")} />
        </TouchableOpacity>

         <TouchableOpacity
         style={{marginBottom:10}}
            onPress={() => navigation.navigate('Home-Stack', { screen: 'Inbox' })}
           >
            <Image source={require("../../assets/images/messages.png")} />
        </TouchableOpacity>
    </View>

}
 

        <TouchableOpacity
        onPress={()=>setIsExpanded(!isExpanded)}
           >
            <Image source={image} />
        </TouchableOpacity>
        </View>
    )
}

export default FloatingMessageButton;