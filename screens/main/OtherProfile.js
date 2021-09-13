import React, { useContext ,useState,useEffect} from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';
import { UserContext } from '../../context/provider/UserProvider';
import sendRequest from '../../utils/server-com/sendRequest'
import ReviewsModal from '../../components/modals/ReviewsModal'

import {
     View,
      Text, 
      Image,
       FlatList,
        StyleSheet,
         TouchableOpacity,
          TextInput, 
          TouchableWithoutFeedback,
           Modal,Pressable ,
           AsyncStorage,
           Dimensions ,
           Clipboard,
           SafeAreaView} from 'react-native';
import UserLinksGroup from '../../components/UserLinksGroup';
import UserHeader from '../../components/UserHeader';
import Loader from '../../components/Loader'
import ReportModal from '../../components/modals/ReportModal';
import ScreenWrapper from '../../components/ScreenWrapper';
import UserAvatar from '../../components/UserAvatar';


// import {} from '@react-native-community/async-storage'


const log = console.log


const OtherProfile = ({ navigation, route }) => {
    console.log(route)
    const [isLoading,setIsLoading]=useState(true)

const windowHeight = Dimensions.get('screen').height;

    const userContext = useContext(UserContext)
    const [user,setUser]=useState({ratings:[]})
    let totalRating=0;
    user.ratings?.forEach(rate=>{
      totalRating +=rate.rating
    })
    let avgRating=0
 avgRating =user.ratings.length!==0?(totalRating/user.ratings.length).toFixed(1):0

    
    const {id,job}=route.params
    const otherId=id
    const [isUser,setIsUser]=useState(true)

    const [settingsModalVisible,setSettingsModalVisible]=useState(false)
        const [reviewModalIsVisible,setReviewModalIsVisible]=useState(false)
        const [reportModalIsVisible,setReportModalIsVisible]=useState(false)
     const sendInfo = async (id) => {

    const data = await sendRequest("", "get", `users/`+id)
    setUser(data)
      setIsLoading(false)
    // const data = await sendRequest("", "get", `users/local-registration`
    if (data.message) {
    //   setError(data.message)

    } else {
      const id = data._id
    //   navigation.navigate("Home", { id })
    }

  }

    const getdata =async ()=>{
  
    

sendInfo(otherId)
            
        
    }
useEffect(() => {
    
    getdata()
     

}, []);
    // log(settingsModalVisible)
    if(isLoading){
 return (
        <Loader />
    )
    }

    return (
        <ScreenWrapper>
        <SafeAreaView style={{flex: 1,height:windowHeight}}>
        <ReviewsModal
         user={user} 
         navigation={navigation} 
         isVisible={reviewModalIsVisible}
         setIsVisible={setReviewModalIsVisible}
         />
         <ReportModal
                  navigation={navigation} 
                  isVisible={reportModalIsVisible}
                  setIsVisible={setReportModalIsVisible}
                  user={user} 
         />

        <View style={{ backgroundColor: "#fff",flex:1 }}>

        

            

            <View style={{paddingHorizontal:20}}>
 <UserHeader navigation={navigation}>
 {
     userContext.user.role==="buyer" && <TouchableOpacity 
 onPress={()=>navigation.navigate("Inbox-Detailed",{user,job})}
 >
<Image source={require("../../assets/images/start-convo.png")} />
 </TouchableOpacity>

 }

    </UserHeader>
            </View>
   

 
            <View style={{ alignItems: "center"}}>
                <View>
                  <UserAvatar
                  user={user}
                  size={80}
                  borderRadius={24}
                  fontSize={19}

                  />
                </View>
                <Text style={{ fontWeight: "700", marginTop: 20, marginBottom: 7 }}>
                    {`${user.lastName} ${user.firstName}`}
                </Text>
                <Text>
                    @{user.username}
                </Text>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                {
                    avgRating>=2.5?     <Image 
                 source={require("../../assets/images/star-good.png")}
                 style={{marginRight:3}}

                 />:
                      <Image 
                 source={require("../../assets/images/star-bad.png")}
                 style={{marginRight:3}}

                 />
                }
            
                 <Text style={{marginRight:3}}>
                     {avgRating}
                 </Text>
                 <Text>
                   ({user.ratings?user.ratings.length:0})
                 </Text>
                </View>

                <View style={{ backgroundColor:user.verified?"rgba(212, 239, 223, 1)": "rgba(251, 221, 221, 1)", padding: 7, paddingRight: 15, paddingLeft: 15, borderRadius: 100, marginTop: 30, flexDirection: "row", alignItems: "center", marginBottom: 40 }}>
                {
                   user.verified?<>
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

            <Info user={user} />
            <GuestExtra
             navigation={navigation} 
             user={user} 
             setReviewModalIsVisible={setReviewModalIsVisible} 
             setReportModalIsVisible={setReportModalIsVisible}

             />
          


        </View>
</SafeAreaView>
</ScreenWrapper>

    )
}

export default OtherProfile;




const GuestExtra = ({ navigation,user,setReviewModalIsVisible,setReportModalIsVisible}) => {
    const userContext = useContext(UserContext)
    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 30 }}>
              

                <View style={{ flex: 1 }}>
                    <Text style={{ color: "rgba(107, 119, 168, 1)", fontSize: 32, fontWeight: "300", textAlign: "center" }}>
                        {user.jobsDone||0}
                    </Text>
                    <Text style={{ textAlign: "center" }}>
                        jobs
                    </Text>
                </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 50 }}>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Icon name="star" style={{ marginRight: 3, color: "rgba(47, 128, 237, 1)" }} />
                    <TouchableOpacity onPress={() =>setReviewModalIsVisible(true)}>
                        <Text style={{ color: "rgba(47, 128, 237, 1)", fontWeight: "400", textAlign: "center" }}>
                            Reviews
                        </Text>

                    </TouchableOpacity>

                </View>

                <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Image source={require("../../assets/images/report.png")} style={{ marginRight: 3 }} />
<TouchableOpacity
onPress={() =>setReportModalIsVisible(true)}
>
<Text style={{ color: "rgba(235, 87, 87, 1)", fontWeight: "400", textAlign: "center" }}>
                        Report
                    </Text>


</TouchableOpacity>
                   
                </View>
            </View>
        </View>
    )
}

const Info = ({user}) => {
      const copyToClipboard =async  () => {
    Clipboard.setString("+234"+user.phone)
    
      const text = await Clipboard.getString()
      setCopied(true)
      setCopiedText(text)

    log(text)
  }

const [copiedText, setCopiedText] = useState('')
const [copied, setCopied] = useState(false)
  
    return (
        <View style={{ alignItems: "center" }}>
         

            <View style={styles.infoContainer}>
                <View style={styles.infoStyle}>
                    <Icon name="phone" size={20} style={styles.pr10} />
                    <TouchableOpacity
                    onPress={copyToClipboard}
                    >
                    <Text>
                        {user.phone||"No Phone No."}
                    </Text>
                    {
                        copied && <Text style={{elevation:3,borderWidth:1,borderColor:"#fff",justifyContent:"center",alignItems:"center",borderRadius:5,paddingHorizontal:15,paddingVertical:4,position:"absolute",right:-40,bottom:-23,fontSize:10,color:"rgba(29, 29, 29, 1)"}}>
Copied!
                    </Text>
                    }
      

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
