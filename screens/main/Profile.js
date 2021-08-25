import React, { useContext ,useState,useEffect,useCallback} from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';
import { UserContext } from '../../context/provider/UserProvider';

import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Modal,Pressable ,AsyncStorage,ScrollView,RefreshControl} from 'react-native';
import UserLinksGroup from '../../components/UserLinksGroup';
import { wait } from '../../utils/wait';

// import {} from '@react-native-community/async-storage'


const log = console.log


const SettingsModal= ({navigation,isVisible,setIsVisible})=>{
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
                  onPress={() => setIsVisible(false)}
                 style={{ backgroundColor: "rgba(0,0,0,0.5)", flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: "flex-end" }}>


                        <View style={{ backgroundColor: "#fff", paddingHorizontal: 37,borderTopLeftRadius:24,borderTopRightRadius:24 }}>
                        <View style={{alignItems:"center",width:"100%"}}>
                        <Pressable 
                        onPress={() => setIsVisible(false)}
                        style={{width:56,height:6,backgroundColor:"rgba(224, 224, 224, 1)",marginTop:4,borderRadius:100}}>

                        </Pressable>

                        </View>
                        <View>
<Text style={{fontSize:18,color:"rgba(107, 119, 168, 1)",textAlign:"center",marginBottom:20,marginTop:25,fontWeight:"700"}}>
Settings
</Text>
                        </View>
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
                        </View>
                    </View>
                </Pressable>

            </Modal>
    )
}


const Profile = ({ navigation, route }) => {

    const userContext = useContext(UserContext)
    const [refreshing, setRefreshing] = useState(false);

    const [settingsModalVisible,setSettingsModalVisible]=useState(false)

      const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

    const getdata =async ()=>{
        const id= await AsyncStorage.getItem("userID")
        console.log("Id:"+id)
    }
useEffect(() => {
    
    getdata()
    // return () => {
    //     cleanup
    // };
}, []);
    // log(settingsModalVisible)

    return (

        <View style={{ backgroundColor: "#fff", flex: 1 }}>

            <SettingsModal navigation={navigation}  isVisible={settingsModalVisible} setIsVisible={setSettingsModalVisible}/>
       

            {/* <View

                style={{ width: "100%", height: "100%", position: "absolute", backgroundColor: "rgba(0,0,0,0.1)", top: 0, right: 0, zIndex: 10, justifyContent: "flex-end" }}>
                <TouchableWithoutFeedback onPress={() => console.log("done")}>
                    <View style={{ flex: 1 }}>

                    </View>
                </TouchableWithoutFeedback>
                <View style={{ backgroundColor: "#fff", paddingTop: 30, borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
                    <View style={{ alignItems: "center", marginBottom: 20 }}>
                        <TouchableOpacity>
                            <Text style={{ color: "rgba(107, 119, 168, 1)", fontWeight: "700" }}>
                                Report This guy
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ padding: 20 }}>

                        <Text style={{ fontWeight: "700", marginBottom: 10 }}>
                            Why do you want report this account?
                        </Text>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum dui vel arcu vulputate ultrices dui vel arcu vulputate ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum dui vel arcu vulputate ultrices dui vel arcu vulputate ultrices.
                        </Text>
                    </View>

                    <View style={{ marginBottom: 25, padding: 17.5 }}>

                        <TextInput
                            placeholder={`Rate armstrong`}
                            multiline={true}
                            numberOfLines={8}
                            onChangeText={() => { }}
                            style={{ backgroundColor: "rgba(224, 224, 224, 0.3)", borderRadius: 8, padding: 16, textAlignVertical: 'top' }}
                        />

                    </View>
                    <View style={{ alignItems: "center", marginBottom: 35 }}>
                        <TouchableOpacity>
                            <Text style={{ color: "rgba(235, 87, 87, 1)", fontWeight: "700" }}>
                                Report This guy
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>



            </View> */}
            <View style={{ justifyContent: "flex-end", flexDirection: "row", padding: 20 }}><TouchableOpacity
            onPress={()=>setSettingsModalVisible(!settingsModalVisible)}
            //  onPress={() => navigation.navigate("Home-Stack", { screen: "Account-Details" })}
             >
             <Image source={require("../../assets/images/settings.png")} />
            </TouchableOpacity>
            </View>
                 <ScrollView
                   refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
                 >
            <View style={{ alignItems: "center", marginTop: 30 }}>
                <View>
  <View>
                    <Image source={{uri:userContext.user.avatar}} 
                    style={{width:80,height:80,resizeMode:"cover",borderRadius:24,borderColor:"rgba(237, 237, 237, 1)",borderWidth:2,borderRadius:24}}
                    />
                    </View>
                                  <TouchableOpacity
                                  style={{position:"absolute",top:7.5,right:7.5}}
                                  >
 <Image source={require("../../assets/images/edit-profile.png")} />
                </TouchableOpacity>
                </View>
                <Text style={{ fontWeight: "700", marginTop: 10, marginBottom: 3 }}>
                    {`${userContext.user.lastName} ${userContext.user.firstName}`}
                </Text>
                <Text>
                    @{userContext.user.username}
                </Text>
                {
                    userContext.user.profession &&  <Text style={{ fontWeight: "700", marginTop: 10, marginBottom: 3,marginTop: 16 }}>
                    {`${userContext.user.profession} `}
                </Text>
                }
                  
                <View style={{ backgroundColor:userContext.user.verified?"rgba(212, 239, 223, 1)": "rgba(251, 221, 221, 1)", padding: 7, paddingRight: 15, paddingLeft: 15, borderRadius: 100, flexDirection: "row",marginTop:userContext.user.profession?7:16, alignItems: "center", marginBottom: 40 }}>
                
                {
                   userContext.user.verified?<>
                     <Image source={require("../../assets/images/verified.png")} style={{ marginRight: 5}} />
                    <Text style={{ color: "rgba(39, 174, 96, 1)" }}>
                        Verified
                    </Text>
                    </>:<>
                     <Icon name="check-circle" style={{ color: "rgba(235, 87, 87, 1)", marginRight: 7 }} size={17} />
                    <Text style={{ color: "rgba(235, 87, 87, 1)" }}>
                        Unverified
                    </Text>
                    </>
                }
                   
                </View>
            </View>

            <Info navigation={navigation}/>
       
            <MyJobs navigation={navigation} />
</ScrollView>

        </View>


    )
}

export default Profile;

const JobRow=({navigation})=>{
    return (
        <View style={{marginBottom:8}}>
<FlatList
horizontal={true}
data={[{title:"Table"},{title:"Sofa"},{title:"Bed Making"}]}
renderItem={(job)=>(
    <TouchableOpacity
    onPress={()=>navigation.navigate("Home-Stack",{screen:"Add-Item"})}
     style={{marginRight:8,width:96,height:96,backgroundColor:"rgba(0,0,0,0.32)",borderRadius:2}}>
    <Text style={{color:"#fff",fontWeight:"700",textAlign:"center",position:"absolute",bottom:8,width:"100%"}}>
{job.item.title}
    </Text>
    
    </TouchableOpacity>


)}
 />

        </View>
    )
}

const MyJobs=({navigation})=>{
    return (
        <View style={{marginHorizontal:30,alignItems:"center"}}>
  <TouchableOpacity
    onPress={()=>navigation.navigate("Home-Stack",{screen:"Add-Item"})}
     style={{marginRight:8,width:96,height:96,backgroundColor:"rgba(250, 250, 250, 1)",borderRadius:2,justifyContent:"center",alignItems:"center"}}>
     <Image source={require("../../assets/images/add-a-job.png")} /> 
    <Text style={{color:"rgba(0,0,0,0.3)",fontWeight:"700",textAlign:"center",position:"absolute",bottom:8,width:"100%"}}>

Add a job

    </Text>
    
    </TouchableOpacity>
{/* <FlatList
data={[1,2]}
renderItem={(item)=>(
    <JobRow navigation={navigation} />
    
)}
 /> */}

        </View>
    )
}


const Info = ({navigation}) => {
    const userContext = useContext(UserContext)
    return (
        <View style={{ alignItems: "center" }}>
            {/* <View style={styles.infoContainer}> */}
                {/* <View style={styles.infoStyle}>
                    <Icon name="instagram" size={20} style={styles.pr10} />
                    <Text>
                        {userContext.user.instagram||"Add Intagram"}
                    </Text>
                </View>
                <View style={styles.infoStyle}>
                    <Icon name="twitter" size={20} style={styles.pr10} />
                    <Text>
                        {userContext.user.twitter || "Add Twitter"}
                    </Text>
                </View>
            </View> */}
<View>
           <Text style={{color:"rgba(58, 74, 139, 1)",marginBottom:24,marginTop:-17,textAlign:"center",paddingHorizontal:30}}>
{userContext.user.bio}
            </Text>
</View>
            <View style={styles.infoContainer}>
 
                <View>
                

                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("Home-Stack",{screen:"Add Contact",account:"Phone Number"})}
                    style={{flexDirection:"row"}}>
                    <Icon name="phone" size={20} style={styles.pr10} />
                    <Text>
                          {userContext.user.phone||"Add Contact"}
                    </Text>

                    </TouchableOpacity>


                
                    
                </View>
           
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    infoStyle: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "center"
    },
    pr10: {
        paddingRight: 10
    },

    infoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    }
})
