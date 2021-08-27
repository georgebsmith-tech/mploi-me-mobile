import React, { useState, UseState } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';

import { View, Text, Image, FlatList, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, TextInput,Dimensions } from 'react-native';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper'
// import ChatAndMapHeader from '../../components/ChatAndMapHeader'



const ChatAndMapHeader=({user,navigation})=>{
    return (
                <View style={{backgroundColor:"rgba(250, 250, 250, 1)",padding:20,paddingVertical:30}}>
<View>

<View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>

        <View style={{flexDirection:"row"}}>
<TouchableOpacity
onPress={()=>navigation.pop()}
>
<Image source={require("../../assets/images/chat-back.png")} style={{marginRight:16}} />

</TouchableOpacity>
<View style={{flexDirection:"row",alignItems:"center"}}>
<Image source={require("../../assets/images/chat-image.png")} style={{marginRight:8}} />
<Text style={{fontWeight:"700",color:"rgba(0, 0, 0, 1)"}}>
{`${user.lastName} ${user.firstName}`}
</Text>
</View>
</View>

<View style={{flexDirection:"row"}}>


<Image source={require("../../assets/images/chat-bell.png")} style={{marginRight:2}} />
<TouchableOpacity
onPress={()=>navigation.navigate("Make-Payment")}
>
<Image source={require("../../assets/images/pay-icon.png")} />
</TouchableOpacity>
</View>
</View>
</View>
        </View>
    )
}



const InboxDetailed = ({navigation,route}) => {
    const [activeTab, setActiveTab] = useState(1)

    const deviceHeight=Dimensions.get("window").height
    const user=route.params.user

    return (
     
        <View style={{ backgroundColor: "#fff", flex: 1}}>
        <ChatAndMapHeader user={user} navigation={navigation} />
          
            <View style={{ marginTop: 50, justifyContent: "space-between", flex: 1}}>
                <Chats />
                <MessageChannel navigation={navigation} 
                user={user}/>

            </View>
             
        </View>
     
    )
}

export default InboxDetailed;

const MessageChannel = ({navigation,user}) => {
    const [message,setMessage]=useState("")
    return (
        <View style={{ flexDirection: "row", position:"absolute",bottom:10,flex:1,marginHorizontal:5,alignItems:"flex-end"}}>
        <View style={{flex:1}}>
            <TextInput
            multiline={true}
            value={message}
            onChangeText={(text)=>setMessage(text)}
                placeholder="Type a message" style={{ backgroundColor: "rgba(237, 237, 237, 1)", borderRadius: 30, flex: 1,paddingHorizontal: 20,paddingVertical:10,paddingRight:30}}
            />
            <View style={{flexDirection:"row",position:"absolute",right:message?0:10,bottom:11}}>
            <Image
            style={{marginRight:12}}
             source={require("../../assets/images/chat-files.png")} />
             {
                 !message ?     <TouchableOpacity
                  onPress={()=>{navigation.navigate("Map-Screen",{user})}}
                   >
                 <Image source={require("../../assets/images/location.png")} />
                 </TouchableOpacity>
                 :<View/>
             }
           
               </View>
            </View>

            {
                message ? <TouchableOpacity 
                style={{marginLeft:8}}
                >
                <Image source={require("../../assets/images/send.png")} />
            </TouchableOpacity>:<Text></Text>
            } 
        </View>
    ) 
}



const Chats = () => {
    const chats = [3, 4, 5, 3, 5]
    return (
        <View>
            <FlatList
                data={chats}
                renderItem={({ item }) => (
                    <Chat chat={item} />)}
            />
        </View>
    )
}


const Chat = ({ chat }) => {
    console.log(chat)
    return (
        <View style={{ alignItems: chat === 5 ? "flex-start" : "flex-end" }}>
            <View style={{ paddingHorizontal: 17, paddingVertical: 7, borderRadius: 20, backgroundColor: chat === 5 ? "rgba(245, 251, 255, 1)" : "rgba(33, 159, 255, 1)", marginBottom: 16 }}>
                <Text style={{ color: chat == 5 ? "rgba(33, 159, 255, 1)" : "#fff", marginBottom: 6 }}>
                    Hey, bruh what’s good?
                </Text>
                <Text style={{ fontSize: 12, color: chat === 5 ? "rgba(157, 165, 197, 1)" : "rgba(211, 236, 255, 1)", textAlign: "right" }}>
                    2:00PM
                </Text>
            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    tab: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 6
    }
})

