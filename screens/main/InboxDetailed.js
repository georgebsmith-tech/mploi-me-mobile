import React, { useState, useEffect,useContext } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';

import { View, Text, Image, FlatList, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, TextInput,Dimensions } from 'react-native';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper'
import { getDateAndTime, getDateAndTime2, getTime } from '../../utils/dateAndTime/getDate';
import { UserContext } from '../../context/provider/UserProvider';
import sendRequest from '../../utils/server-com/sendRequest'
// import ChatAndMapHeader from '../../components/ChatAndMapHeader'



const ChatAndMapHeader=({user,navigation,job})=>{
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
onPress={()=>navigation.navigate("Make-Payment",{job,user})}
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
    const [chats,setChats]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const userContext = useContext(UserContext)
  const {job}=route.params


    const deviceHeight=Dimensions.get("window").height
    const user=route.params.user

    const sendInfo = async () => {
      const body = {primaryUser:userContext.user._id,
        job:job._id,
        secondaryUser:user._id}
        console.log(body)
        let data 
         data = await sendRequest("", "get", `chats/${body.primaryUser}/${body.secondaryUser}?job=${body.job}`)
     
         setChats(data)
           setIsLoading(false)
         if (data.error) {
         //   setError(data.message)
     
         } else {
        
         }
     
       }
 
    useEffect(() => {
        sendInfo()
     //    return () => {
     //        cleanup
     //    }
    }, [])



    return (
     
        <View style={{ backgroundColor: "#fff", flex: 1}}>
        <ChatAndMapHeader
         user={user} 
         job={job}
         navigation={navigation} />
         
          
            <View style={{ marginTop: 50, justifyContent: "space-between", flex: 1}}>
                <Chats chats={chats} />
                <MessageChannel
                 navigation={navigation} 
                 chats={chats}
                 setChats={setChats}
                user={user}
                job={job}
                />

            </View>
             
        </View>
     
    )
}

export default InboxDetailed;

const MessageChannel = ({navigation,user,setChats,chats,job}) => {
    const userContext=useContext(UserContext)
    const createdAt=new Date()
    const [message,setMessage]=useState("")
    const sendMessage=async ()=>{
        try {
            const chat={message,createdAt,sender:userContext.user._id,recipient:user._id,job:job._id}
            setChats([...chats,chat])
           delete chat["createdAt"]
           console.log(chat)
setMessage("")
const data = await sendRequest(chat,"post","chats")
console.log(data)
        } catch (error) {
            console.log(error)
        }



    }
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
                onPress={sendMessage}
                >
                <Image source={require("../../assets/images/send.png")} />
            </TouchableOpacity>:<Text></Text>
            } 
        </View>
    ) 
}



const Chats = ({chats}) => {
    
    return (
        <View style={{paddingHorizontal:10,marginBottom:60}}>
            <FlatList
                data={chats}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Chat chat={item} />)}
            />
        </View>
    )
}


const Chat = ({ chat }) => {
    
    const userContext=useContext(UserContext)
    const left =chat.recipient._id===userContext.user._id
    return (
        <View style={{ alignItems: left ? "flex-start" : "flex-end" }}>
            <View style={{ paddingHorizontal: 17, paddingVertical: 7, borderRadius: 20, backgroundColor: left ? "rgba(245, 251, 255, 1)" : "rgba(33, 159, 255, 1)", marginBottom: 5,maxWidth:"80%" }}>
                <Text style={{ color: left ? "rgba(33, 159, 255, 1)" : "#fff", marginBottom: 6 }}>
                  {chat.message}
                </Text>
                <Text style={{ fontSize: 12, color: left ? "rgba(157, 165, 197, 1)" : "rgba(211, 236, 255, 1)", textAlign: "right" }}>
                    {getTime(chat.createdAt
                    )}
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

