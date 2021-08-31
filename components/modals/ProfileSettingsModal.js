
import React from 'react';

import {View,TouchableOpacity,AsyncStorage,Text,Pressable,Modal,TouchableWithoutFeedback, ScrollView} from 'react-native'
import UserLinksGroup from '../UserLinksGroup';
log=console.log

const ProfileSettingsModal= ({navigation,isVisible,setIsVisible})=>{
    // const [modalVisible,setModalVisible]=useState(isVisible)
    log(isVisible)
        const details = [{
        text: "Account Details", page: "Account-Details",stack:"Home-Stack"
    },
    { text: "Interest", page: "Interests" },

    ]

       const details2 = [{
        text: "Terms of service", page: "",stack:"Home-S"
    },
    { text: "Privacy Policy", page: "" },
    {
        text:"FAQ/Contact us",page:"",stack:""
    }

    ]

    const logOut=async ()=>{
log("log out")
        await AsyncStorage.removeItem("userID")

        navigation.navigate("Auth",{screen:"SignIn"})

    }
    return (
        <Modal 
        transparent
        visible={isVisible}
     animationType="slide"
        >
                <Pressable
                
                 style={{ backgroundColor: "rgba(0,0,0,0.5)", flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: "flex-end" }}>


                        <View style={{ backgroundColor: "#fff", paddingHorizontal: 37,borderTopLeftRadius:24,borderTopRightRadius:24,maxHeight:"85%" }}>
                     
                        <View style={{alignItems:"center",width:"100%"}}>
                        <TouchableWithoutFeedback 
                        onPress={() => setIsVisible(false)}
                        >
                        <View style={{width:56,height:6,backgroundColor:"rgba(224, 224, 224, 1)",marginTop:4,borderRadius:100}}>
                            
                        </View>

                        </TouchableWithoutFeedback>

                        </View>
                        <View>
<Text style={{fontSize:18,color:"rgba(107, 119, 168, 1)",textAlign:"center",marginBottom:20,marginTop:25,fontWeight:"700"}}>
Settings
</Text>
                        </View>
                        <ScrollView
                        showsVerticalScrollIndicator={false}
                        >
                        <View>
<Text style={{color:"rgba(79, 79, 79, 1)"}}>
Upgrade
</Text>
                        </View>
                        <View style={{backgroundColor:"rgba(211, 236, 255, 0.3)",paddingVertical:16,paddingHorizontal:20,marginTop:5,borderRadius:8}}>
                        <Text style={{textAlign:"center",fontWeight:"700",marginBottom:7}}>
                       Account not upgraded
                        </Text>
                        <Text style={{textAlign:"center",fontSize:12,color:"rgba(107, 119, 168, 1)"}}>
                        Adding a means of identification helps us increase the authenticity and keep everyone safe from fake accounts.
                        </Text>
                        </View>
                        <View style={{marginBottom:10}}>

                            <UserLinksGroup details={details} navigation={navigation} />

                            <UserLinksGroup details={details2} navigation={navigation} imageType={2}/>
                            </View>
                  
                            <View style={{ alignItems: "center", marginBottom: 35 }}>
                                <TouchableOpacity
                                onPress={logOut}>
                                    <Text style={{ color: "rgba(235, 87, 87, 1)", fontWeight: "700" }}>
                                        Log out
                                    </Text>
                                </TouchableOpacity>
                                <View style={{marginTop:20}}>
                                       <Text style={{ color: "rgba(79, 79, 79, 1)",fontSize:12 }}>
                                     Version 1.0
                                    </Text>

                                </View>

                            </View>
                            </ScrollView>
                        </View>
                    </View>
                </Pressable>

            </Modal>
    )
}

export default ProfileSettingsModal;