import React, { useContext, useEffect, useState, UseState } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';

import { View, Text, Image, FlatList, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import sendRequest from '../../utils/server-com/sendRequest'
import { UserContext } from '../../context/provider/UserProvider';
import toWhen from '../../utils/dateAndTime/toWhen';
import StatuLoader from '../../components/StatusLoader';
import ScreenWrapper from '../../components/ScreenWrapper';


const Inbox = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState(1)
    const [lastChats,setLastChats]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const newChatsCounts= lastChats.length===0?0:lastChats.filter(chat=>!(chat.seen)).length
//   const [time,setTime]=useState(0)
const userContext = useContext(UserContext)
    const sendInfo = async () => {
       console.log(userContext.user._id)
        const data = await sendRequest("", "get", "last-chats/"+userContext.user._id)
        console.log(data)
        setLastChats(data)
          setIsLoading(false)
        if (data.error) {
        //   setError(data.message)
    
        } else {
       
        }
    
      }

    //   let timeKeeper
   useEffect(() => {
       sendInfo()
// timeKeeper =setInterval(()=>{
//     setTime(time+1)
// },6000)
    //    return () => {
    //        cleanup
    //    }
   }, [])
//    if (isLoading){
//        return (
//            <StatuLoader/>
//        )
//    }

    return (
        <ScreenWrapper>
        <View style={{ backgroundColor: "#fff", flex: 1, paddingHorizontal: 20 }}>
            <View style={{ alignItems: "center" }}>


                <View style={{ backgroundColor: "rgba(250, 250, 250, 1)", flexDirection: "row", padding: 3, borderRadius: 6, justifyContent: "center" }}>

                    <TouchableOpacity
                        onPress={() => setActiveTab(1)}
                        style={[styles.tab, { backgroundColor: activeTab === 1 ? "#fff" : "transparent", marginRight: 3 }]}>
                        <Text>
                            Messages ({newChatsCounts})
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setActiveTab(0)}
                        style={[styles.tab, { backgroundColor: activeTab === 0 ? "#fff" : "transparent" }]}>
                        <Text>
                            Request (0)
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>

            <View style={{ marginTop: 50 }}>
                {
                    activeTab === 1 ? <Messages 
                    navigation={navigation} 
                    lastChats={lastChats}

                    /> : <Requests navigation={navigation} />
                }

            </View>
        </View>
        </ScreenWrapper>
    )
}

export default Inbox;


const Messages = ({ navigation,lastChats }) => {
   
    return (
        <View>
        {

       lastChats.length!==0?
            <FlatList
                data={lastChats}
                renderItem={({ item }) => (
                    <Message chat={item}
                        navigation={navigation}
                    />
                )}
            />:<View style={{alignItems:"center"}}>
                <Image source={require("../../assets/images/no-message.png")} />
                <Text>
You have no chat yet
                </Text>
            </View>
         }
        </View>
    )
}

const Requests = ({ navigation }) => {
    const messages = [{ read: true, content: "This is wha i meant", id: 1 }, { read: false, count: 2, content: "This is wha i meant", id: 2 }, { read: false, count: 10, content: "Come to my House", id: 3 }, { read: false, count: 10, content: "Come to my House", id: 4 }]
    return (
          <View>
        {

       messages.length===0?
            <FlatList
                data={messages}
                renderItem={({ item }) => (
                    <Message message={item}
                        navigation={navigation}
                    />
                )}
            />:<View style={{alignItems:"center"}}>
                <Image source={require("../../assets/images/no-message.png")} />
                <Text>
You have no requests yet
                </Text>
            </View>
         }
        </View>
    )
}

const Message = ({ chat, navigation }) => {
    const userContext=useContext(UserContext)
    const name=chat.recipient._id===userContext.user._id?
    `${chat.sender.lastName} ${chat.sender.firstName}`:
    `${chat.recipient.lastName} ${chat.recipient.firstName}`
    const avatar=chat.recipient._id===userContext.user._id?
    chat.sender.avatar:
    chat.recipient.avatar
    const user=chat.recipient._id===userContext.user._id?chat.sender:chat.recipient
    return (
        <TouchableOpacity
            onPress={() => navigation.push("Inbox-Detailed",{job:chat.job,user})}
            style={{ marginBottom: 10, padding: 10, borderBottomWidth: 1.5, borderBottomColor: "#f1f1f1", flexDirection: "row" }}>
            <View style={{ width: 48, height: 45, borderRadius: 100, marginRight: 16 }}>
                <Image source={{uri:avatar}} style={{
                    alignSelf: 'center',
                    height: '100%',
                    width: '100%', 
                    resizeMode: "cover",
                    borderRadius: 100
                }} />
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
                    <Text style={{ fontWeight: "700", fontSize: 16 }}>
                        {`${name}`}
                    </Text>
                    <Text style={{ fontSize: 10, color: "rgba(107, 119, 168, 1)" }}>
                       {toWhen(chat.createdAt)}
                    </Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 12 }}>
                        {chat.message.substr(0, 40)}...
                    </Text>
                    <View style={{ fontSize: 10, color: "rgba(107, 119, 168, 1)", backgroundColor: "rgba(206, 210, 226, 1)", width: 25, height: 25, justifyContent: "center", alignItems: "center", borderRadius: 100 }}>
                        {
                            chat.seen ? <Icon name="check" /> : <Text style={{ fontSize: 10, fontWeight: "700" }}>
                                {chat.count}
                            </Text>
                        }


                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
    tab: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 6
    }
})

