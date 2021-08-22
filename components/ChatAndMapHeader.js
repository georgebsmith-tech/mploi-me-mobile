import React, { useState, UseState } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';

import { View, Text, Image, FlatList, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, TextInput,Dimensions } from 'react-native';


const ChatAndMapHeader=({user,navigation,show})=>{
    return (
                <View style={{backgroundColor:"rgba(250, 250, 250, 1)",padding:20,paddingVertical:30}}>
<View>

<View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>

        <View style={{flexDirection:"row"}}>
<TouchableOpacity
onPress={()=>navigation.pop()}
>
<Image source={require("../assets/images/chat-back.png")} style={{marginRight:16}} />

</TouchableOpacity>
<View style={{flexDirection:"row",alignItems:"center"}}>
<Image source={require("../assets/images/chat-image.png")} style={{marginRight:8}} />
<Text style={{fontWeight:"700",color:"rgba(0, 0, 0, 1)"}}>
{`${user.lastName} ${user.firstName}`}
</Text>
</View>
</View>



{
    
show?<View style={{flexDirection:"row"}}>


<Image source={require("../assets/images/chat-bell.png")} style={{marginRight:2}} />
<TouchableOpacity
onPress={()=>navigation.navigate("Make-Payment")}
>
<Image source={require("../assets/images/pay-icon.png")} />
</TouchableOpacity>
</View>:<View/>
}
</View>
</View>
        </View>
    )
}


export default ChatAndMapHeader;