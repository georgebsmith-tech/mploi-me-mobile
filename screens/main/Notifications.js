import React,{useEffect,useState,useContext,useCallback} from 'react'


import { View, Text, Image, FlatList, StyleSheet, TextInput, TouchableOpacity, ScrollView,RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { UserContext } from '../../context/provider/UserProvider';

import CustomButton from '../../components/buttons/CustomButton';
import sendRequest from '../../utils/server-com/sendRequest'

import StatusLoader from '../../components/StatusLoader';
import NotificationList from '../../components/notification/NotificationList'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const Notifications = () => {
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
        <View style={{ backgroundColor: "#fff", flex: 1 }}>

            <View style={{ marginTop: 20, marginBottom: 24, flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
                <Text style={{ fontWeight: "700", fontSize: 24 }}>
                    Notifications
                </Text>
                <TouchableOpacity style={{ backgroundColor: "rgba(206, 210, 226, 1)", paddingHorizontal: 7, paddingVertical: 3, borderRadius: 5 }}>
                    <Text>
                        New
                    </Text>
                </TouchableOpacity>
            </View>
            <NotificationList 
            notices={notices} />
         
        </View>
    )
}

export default Notifications;













