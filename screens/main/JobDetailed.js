import React,{useState} from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';

import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Loader from '../../components/Loader'


const JobDetailed = ({ navigation,route }) => {
    const {job}=route.params
    const [isLoading,setIsLoading]=useState(true)
    return (
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
            <Image source={require("../../assets/images/detailed.png")} style={{ width: "100%", height: "100%", resizeMode: "cover" }} />
            <View style={{ backgroundColor: "rgba(0,0,0,0.64)", width: "100%", height: "100%", position: "absolute", justifyContent: "space-between" }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ paddingHorizontal: 20, marginVertical: 16.5 }}>
                    <Image source={require("../../assets/images/back.png")} />
                </TouchableOpacity>
                <View style={{ backgroundColor: "rgba(255, 255, 255, 0.16)", padding: 18.5, borderRadius: 15, marginHorizontal: 20 }}>
                    <Text style={{ color: "rgba(206, 210, 226, 1)", fontWeight: "700", marginBottom: 15 }}>
                        Description
                    </Text>
                    <Text style={{ color: "rgba(206, 210, 226, 1)", fontSize: 12 }}>
                       {job.description}
                    </Text>
                    <View style={{ backgroundColor: "#fff", paddingHorizontal: 67.17, paddingVertical: 16, marginTop: 40 }}>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate("Other-Profile",{id:job.createdBy.userId})}
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

