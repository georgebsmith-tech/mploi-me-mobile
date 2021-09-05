import React,{useState,useContext} from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';

import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Loader from '../../components/Loader'
import { UserContext } from '../../context/provider/UserProvider';
import sendRequest from "../../utils/server-com/sendRequest"
import ScreenWrapper from '../../components/ScreenWrapper';
import UserHeader from '../../components/UserHeader';


const JobDetailed = ({ navigation,route }) => {
    const {job}=route.params
    const [isLoading,setIsLoading]=useState(true)

    const userContext=useContext(UserContext)

    const applyForJob=async ()=>{
        try {
            const body={
                type:"has applied",
                by:userContext.user._id,
                text:"Applied for the job",
                job:job._id
        }
    
        const data =await sendRequest(body,"post","notifications/"+job.createdBy.userId)
        console.log(data)
            alert("You just applied for the job")
            
        } catch (error) {
            alert("network error")
        }
       
    }
    return (
     

    
        <View style={{ backgroundColor: "rgba(0,0,0,1)", flex: 1 }}>
        
            <Image source={{uri:job.imageURL}} style={{ width: "100%", height: "100%", resizeMode: "contain" }} />

            <View style={{ backgroundColor: "rgba(0,0,0,0.64)", width: "100%", height: "100%", position: "absolute", justifyContent: "space-between" }}>
               <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
               <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ paddingHorizontal: 20, marginVertical: 16.5 }}>
                    <Image source={require("../../assets/images/back.png")} />
                </TouchableOpacity>
                {
                    !(userContext.user.role==="seller") &&
                    <TouchableOpacity
                    onPress={applyForJob}
                    style={{ paddingHorizontal: 20, marginVertical: 16.5 }}>
            <Text style={{backgroundColor:"white",paddingHorizontal:16,paddingVertical:8,borderRadius:4}}>
                Apply
            </Text>
                </TouchableOpacity>
                }
               
                
               </View>
                <View style={{ backgroundColor: "rgba(255, 255, 255, 0.16)", padding: 18.5,borderTopLeftRadius:15,borderTopRightRadius:15, marginHorizontal: 20 }}>
                    <Text style={{ color: "rgba(206, 210, 226, 1)", fontWeight: "700", marginBottom: 15 }}>
                        Description
                    </Text>
                    <Text style={{ color: "rgba(206, 210, 226, 1)", fontSize: 12 }}>
                       {job.description}
                    </Text>
                    <Text style={{ color: "rgba(206, 210, 226, 1)", fontSize: 12,fontWeight:"700",marginTop:5 }}>
                       N{job.price}
                    </Text>
                    <View style={{ backgroundColor: "#fff", paddingHorizontal: 67.17, paddingVertical: 16, marginTop: 40,borderRadius:12 }}>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate("Other-Profile",{id:job.createdBy._id,job})}
                    >
                        <Text style={{ color: "rgba(9, 29, 110, 1)", fontWeight: "700" }}>
                           {`${job.createdBy.lastName} ${job.createdBy.firstName}`}
                        </Text>
                        </TouchableOpacity>
                        <Text style={{ color: "rgba(107, 119, 168, 1)", fontSize: 12, marginTop: 8 }}>
                            Stylist
                        </Text>
                    </View>
                </View>

            </View>

        </View>
      
    )
}

export default JobDetailed;

