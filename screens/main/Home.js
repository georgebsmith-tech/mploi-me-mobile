import React, { useEffect, useState, useContext ,useCallback} from 'react'


import { View, Text, Image, FlatList, TouchableOpacity,AsyncStorage,ScrollView,RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FloatingMessageButton from '../../components/buttons/FloatingMessageButton'
import sendRequest from '../../utils/server-com/sendRequest'
import { UserContext } from '../../context/provider/UserProvider';
import Rate from '../../components/Rate'
import {Location,Permissions} from 'expo'
import Loader from '../../components/Loader'
import ScreenWrapper from '../../components/ScreenWrapper';
import StatuLoader from '../../components/StatusLoader';
import { commafy } from '../../utils/commafy';
import UserAvatar from '../../components/UserAvatar';



const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const log = console.log
const Home = ({ navigation, route }) => {
    const [selectedCallingCode, setSelectedCallingCode] = useState('90');
// console.log(countries)

const getLocation=async ()=>{
    const {status} = await Permissions.askAsync(permissions.Location)

}

    const userContext = useContext(UserContext)
        const [refreshing, setRefreshing] = useState(false);
const [jobs,setJobs]=useState([])
const [isLoading,setIsLoading]=useState(true)
const [selectedCat,setSelectedCat]=useState(0)
    const [user, setUser] = useState({ username: "" })
    let id 

    useEffect(() => {
        getData()
        getLocation()
        // return () => {
        //     cleanup
        // };
    }, []);
    const getData = async () => {    // log(route)
    id  =await AsyncStorage.getItem("userID")


        const data = await sendRequest("", "get", "users/" + id)
        // log(data)
        userContext.setUser(data)
        setUser(data)
   const jobs = await sendRequest("", "get", "jobs/" )
   setJobs(jobs)
   setIsLoading(false)


    }

      const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

    const [categories,setCategories]=useState([
        "Events","Programs","Home"
    ])
    if(isLoading){
 return (
        <StatuLoader />
    )
    }
   
    return (
<ScreenWrapper>
        <View style={{ backgroundColor: "#fff", flex: 1, paddingHorizontal:20}}>
            <FloatingMessageButton navigation={navigation} />

            <View style={{}}>
                <Text style={{ fontSize: 14, fontWeight: "700", color: "rgba(130, 130, 130, 1)" }}>
                    Hey {user.username},
                </Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <Text style={{ fontSize: 24, fontWeight: "400", marginTop: 16,paddingBottom:10 }}>
                    Let???s Explore jobs ????
                </Text>

              <UserAvatar 
              user={userContext.user}

              />
             

                </View>
            </View>

  
            <View style={{ alignItems: "center", paddingVertical: 36.4 }}>
                <View style={{ position: "absolute", bottom: 30, zIndex: 10, width: "100%", paddingHorizontal: 16, height: "100%", paddingTop: 80 }}>
                    <Text style={{ fontSize: 16, fontWeight: "700", color: "#fff" }}>
                        Phone Sales
                    </Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between",alignItems:"center" }}>
                    <View style={{flexDirection:"row",alignItems:"center",marginTop:9}}>
                    <Image source={require("../../assets/images/location-home.png")} />
                        <Text style={{ fontSize: 16, fontWeight: "700", color: "rgba(255, 255, 255, 1)" ,marginLeft:4}}>
                            Port Harcourt, Nigeria
                        </Text>
                        </View>
                      <Rate rate={4.0} />
                    </View>
                </View>
                <Image source={require("../../assets/images/home.png")} 
                    style={{resizeMode:"cover",width:"100%",height:160,borderRadius:20}}
                />
            </View>
  <View style={{ height: 80 }}>
                <ScrollView

                    style={{ marginVertical: 5, flex: 1, flexdire: "row", height: 0 }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {
                        categories.map((text, idx) => {
                            return (
                                <TouchableOpacity 
                                onPress={()=>setSelectedCat(idx)}
                                >
                                    <Text style={{
                                        marginRight: 8,
                                        backgroundColor:"#fff",
                                        paddingHorizontal: 16,
                                        paddingLeft:40,
                                        paddingVertical: 11,
                                        borderRadius: 8,
                                        color: idx === selectedCat? "rgba(9, 29, 110, 1)" : "rgba(157, 165, 197, 1)",
                                        borderColor:"#CED2E2",
                                        borderWidth:1,
                                        elevation:idx===selectedCat?4:0
                                    
                                    }}>
                                        {text}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
                      <ScrollView
                    refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
            
            >
            <JobListings navigation={navigation} jobs={jobs}/>
            </ScrollView>
        </View>
        </ScreenWrapper>

    )
}

export default Home;





const JobListings = ({ navigation,jobs }) => {

    // const jobs = [{ price: 200 }, { price: 300 }, { price: 900 }, { price: 800 }, { price: 700 }, { price: 800 }, { price: 700 }]
    return (
        <View style={{marginBottom:20}}>
            <View style={{ marginBottom:20, flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 16, fontWeight: "400" }}>
                    Top Rated Offers
                </Text>
                <TouchableOpacity
                onPress={()=>navigation.navigate("Search")}
                >
                    <Text style={{ fontSize: 16, fontWeight: "400", color: "rgba(17, 122, 202, 1)" }}>
                        View All
                    </Text>
                </TouchableOpacity>

            </View>
            <FlatList
                data={jobs}
                renderItem={({ item }) => (
                    <Job job={item} navigation={navigation} />
                )}
            />
        </View>

    )
}



const Job = ({ job, navigation }) => {

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Home-Stack", { screen: "Job-Detailed",job})}
            style={{ flexDirection: "row",marginBottom: 15 }}>
            <View style={{ marginRight: 20 }}>
                <Image
                style={{width:80,height:80,borderRadius:16}}
                 source={{uri:job.imageURL}} 

                 />
            </View>
            <View style={{ flex: 1 }}>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <Text style={{ fontSize: 16, fontWeight: "400", marginBottom: 8 }}>
                    {job.title}
                    </Text>
                             <Rate rate={4.0} fc="rgba(40, 193, 1, 1)" bc="rgba(212, 243, 204, 1)" />
                </View>
                <View>
                    <Text style={{ fontSize: 13, color: "rgba(130, 130, 130, 1)",fontFamily:"Open Sans" }}>
                     {job.description.substr(0,68)}...
                    </Text>
                </View>

                <Text style={{ fontSize: 12, fontWeight: "700", marginTop: 9,color:"rgba(58, 74, 139, 1)" }}>
                    ???{commafy(job.price)}
                </Text>
            </View>
        </TouchableOpacity>
    )
}