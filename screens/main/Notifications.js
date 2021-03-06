import React,{useEffect,useState,useContext,useCallback} from 'react'


import { View,
     Text, Image, FlatList, StyleSheet, TextInput, TouchableOpacity, ScrollView,RefreshControl,
    StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { UserContext } from '../../context/provider/UserProvider';

import CustomButton from '../../components/buttons/CustomButton';
import sendRequest from '../../utils/server-com/sendRequest'

import StatusLoader from '../../components/StatusLoader';
import NotificationList from '../../components/notification/NotificationList'
import ScreenWrapper from '../../components/ScreenWrapper';


const Notifications = ({navigation}) => {
        const [error, setError] = useState("")
 const [notices, setNotices] = useState([])
    const userContext = useContext(UserContext)
    const [isLoading,setIsLoading]=useState(true)
   const sendInfo = async () => {
          setIsLoading(true)
        setError("")

        const data = await sendRequest("", "get", `notifications/` + userContext.user._id)
  console.log(data)
            
           
        if (data.error) {
        
            setError(data.error)

        } else {
        setNotices(data)
        }
 setIsLoading(false)
    }


    useEffect(() => {
  sendInfo()
    }, [])


    const when = ["All", "Today", "Yesterday", "This month"]

    if(isLoading){
        return <StatusLoader

         
          />
    }
    return (
        <ScreenWrapper>
        <View style={{ backgroundColor: "#fff", flex: 1 }}>

            <View style={{  marginBottom: 24, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20 }}>
                <Text style={{ fontWeight: "700", fontSize: 24 }}>
                    Notifications
                </Text>
                {
                    notices.length!==0 && <TouchableOpacity style={{ backgroundColor: "rgba(206, 210, 226, 1)", paddingHorizontal: 7, paddingVertical: 3, borderRadius: 5 }}>
                    <Text>
                        New
                    </Text>
                </TouchableOpacity>
                }
                
            </View>
            <NotificationList 
            notices={notices}
            navigation={navigation} />
         
        </View>
        </ScreenWrapper>
    )
}

export default Notifications;













