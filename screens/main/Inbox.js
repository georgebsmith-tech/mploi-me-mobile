import React, { useState, UseState } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';

import { View, Text, Image, FlatList, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';


const Inbox = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState(1)

    return (
        <View style={{ backgroundColor: "#fff", flex: 1, padding: 20 }}>
            <View style={{ alignItems: "center" }}>


                <View style={{ backgroundColor: "rgba(250, 250, 250, 1)", flexDirection: "row", padding: 3, borderRadius: 6, justifyContent: "center" }}>

                    <TouchableOpacity
                        onPress={() => setActiveTab(1)}
                        style={[styles.tab, { backgroundColor: activeTab === 1 ? "#fff" : "transparent", marginRight: 3 }]}>
                        <Text>
                            Messages (0)
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
                    activeTab === 1 ? <Messages navigation={navigation} /> : <Requests navigation={navigation} />
                }

            </View>
        </View>
    )
}

export default Inbox;


const Messages = ({ navigation }) => {
    const messages = [{ read: true, content: "This is wha i meant" }, { read: false, count: 2, content: "This is wha i meant" }, { read: false, count: 10, content: "Come to my House" }, { read: false, count: 10, content: "Come to my House" },
    { read: false, count: 10, content: "Come to my House" }]
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

const Message = ({ message, navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.push("Inbox-Detailed")}
            style={{ marginBottom: 10, padding: 10, borderBottomWidth: 1.5, borderBottomColor: "#f1f1f1", flexDirection: "row" }}>
            <View style={{ width: 48, height: 45, borderRadius: 100, marginRight: 16 }}>
                <Image source={require("../../assets/images/place-holder.png")} style={{
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
                        Mba Bright
                    </Text>
                    <Text style={{ fontSize: 10, color: "rgba(107, 119, 168, 1)" }}>
                        20mins ago
                    </Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 12 }}>
                        {message.content.substr(0, 40)}...
                    </Text>
                    <View style={{ fontSize: 10, color: "rgba(107, 119, 168, 1)", backgroundColor: "rgba(206, 210, 226, 1)", width: 25, height: 25, justifyContent: "center", alignItems: "center", borderRadius: 100 }}>
                        {
                            message.read ? <Icon name="check" /> : <Text style={{ fontSize: 10, fontWeight: "700" }}>
                                {message.count}
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

