import React,{useContext} from 'react'
import { View,Text,StatusBar, TouchableOpacity,Image } from 'react-native'
import UserHeader from '../../components/UserHeader'
import colors from '../../config/colors'
import { UserContext } from '../../context/provider/UserProvider';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function JobPaymentNotification({navigation,route}) {
   const notice=route.params.notice
    const statusBarheight=StatusBar.currentHeight

    const userContext=useContext(UserContext)
    return (
        <View style={{paddingTop:statusBarheight+10,paddingHorizontal:20}}>
        <UserHeader
        navigation={navigation}
        >
            <Text style={{fontSize:16,fontWeight:"700",color:"rgba(107, 119, 168, 1)"}}>
                Notification
            </Text>
            <TouchableOpacity>
                <Text style={{paddingVertical:6,paddingHorizontal:8,backgroundColor:colors.primary1,color:"#fff",borderRadius:4}}>
                Ok. Thanks
                </Text>
            </TouchableOpacity>
        </UserHeader>
        <View style={{ alignItems: "center", marginTop: 50 }}>
                <View>
  <View>
                    <Image source={{uri:userContext.user.avatar}} 
                    style={{width:80,height:80,resizeMode:"cover",borderRadius:24,borderColor:"rgba(237, 237, 237, 1)",borderWidth:2,borderRadius:24}}
                    />
                    </View>
                             
                </View>
                <Text style={{ fontWeight: "700", marginTop: 10, marginBottom: 3 }}>
                    {`${notice.who.lastName} ${notice.who.firstName}`}
                </Text>
                <Text>
                    @{notice.who.username}
                </Text>
         
        
                <Text style={{fontSize:16,fontWeight:"700",color:"rgba(58, 74, 139, 1)",marginTop:42}}>
            Paid N{notice.job.price} for your service
            </Text>
          
            <Text style={{marginTop:35,marginBottom:140}}>
            You’ll be credited Immediately you deliver
            </Text>
            <TouchableOpacity>
            <Text style={{paddingHorizontal:16,paddingVertical:10,borderRadius:4,color:"rgba(235, 87, 87, 1)",borderColor:"rgba(235, 87, 87, 1)",borderWidth:1}}>
            I don’t want this offer
            </Text>
            </TouchableOpacity>
            </View>
          

        </View>
    )
}
