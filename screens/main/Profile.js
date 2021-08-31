import React, { useContext ,useState,useEffect,useCallback} from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';
import { UserContext } from '../../context/provider/UserProvider';

import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Modal,Pressable ,AsyncStorage,ScrollView,RefreshControl} from 'react-native';
import UserLinksGroup from '../../components/UserLinksGroup';
import { wait } from '../../utils/wait';
import ScreenWrapper from '../../components/ScreenWrapper';
import ImagePickerOptionsModal from '../../components/modals/ImagePickerOptionsModal';
import ProfileSettingsModal from '../../components/modals/ProfileSettingsModal'
import sendData from '../../utils/server-com/sendRequest';
import { UserJobsContext, UserJobsProvider } from '../../context/provider/UserJobsProvider';

// import {} from '@react-native-community/async-storage'


const log = console.log


const Profile = ({ navigation, route }) => {

const userJobsContext= useContext(UserJobsContext)
console.log(userJobsContext)
    const userContext = useContext(UserContext)
    const [uri,setUri]=useState(userContext.user.avatar)
    const [refreshing, setRefreshing] = useState(false);
    const [pickCameraModalIsOpen,setPickCameraModalIsOpen]=useState(false)

    const [settingsModalVisible,setSettingsModalVisible]=useState(false)

    console.log(uri)

      const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

    const getData =async ()=>{
        const id= await AsyncStorage.getItem("userID")
    const theJobs=await sendData("","get","jobs/"+id)
   userJobsContext.setJobs(theJobs)
    }
useEffect(() => {
    
    getData()
    // return () => {
    //     cleanup
    // };
}, []);
    // log(settingsModalVisible)

    return (
<ScreenWrapper>
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <ImagePickerOptionsModal 
        isVisible={pickCameraModalIsOpen}
        navigation={navigation} 
        setIsVisible={setPickCameraModalIsOpen}
        setUri={setUri}

        />

            <ProfileSettingsModal 
            navigation={navigation} 
             isVisible={settingsModalVisible}
              setIsVisible={setSettingsModalVisible}

              />
      
            <View style={{ justifyContent: "flex-end", flexDirection: "row", paddingHorizontal: 20 }}><TouchableOpacity
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
                                  onPress={()=>setPickCameraModalIsOpen(true)}
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
       
            <MyJobs navigation={navigation} jobs={[...userJobsContext.jobs,{addNew:true}]}/>
</ScrollView>

        </View>
        </ScreenWrapper>


    )
}

export default Profile;

const Job=({job,navigation})=>{
    if(job.item.addNew){
        return <AddNewJob  navigation={navigation} />
    }
    return (
        <TouchableOpacity
        onPress={()=>{}}
         style={{marginRight:8,width:96,height:96,backgroundColor:"rgba(0,0,0,0.32)",borderRadius:2,marginBottom:8}}>
         <Image source={{uri:job.item.imageURL}} style={{width:"100%",height:"100%",resizeMode:"cover",borderRadius:2}} />
        <Text style={{color:"#fff",fontWeight:"700",textAlign:"center",position:"absolute",bottom:8,width:"100%"}}>
    {job.item.title}
        </Text>
        
        </TouchableOpacity>
    )
}

const JobRow=({navigation})=>{
    return (
        <View style={{marginBottom:8}}>
<FlatList
horizontal={true}
data={[{title:"Table"},{title:"Sofa"},{title:"Bed Making"}]}
renderItem={(job)=>(
   <Job job={job}/>
)}
 />

        </View>
    )
}

const AddNewJob =({navigation})=>{
    return (
        <View style={{alignItems:"center"}}>
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

const MyJobs=({navigation,jobs})=>{
    return (
        <View style={{alignItems:"center"}}>
        <FlatList
        data={jobs}
        numColumns={3}
        renderItem={(item)=>(
            <Job job={item} navigation={navigation} />
        )}
        keyExtractor={(item, index) => index}

        />
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
