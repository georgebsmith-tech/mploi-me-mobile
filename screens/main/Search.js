import React, { useEffect, useState, useContext ,useCallback,useRef
} from 'react'


import { View, Text, Image, FlatList, StyleSheet, TextInput, TouchableOpacity, ScrollView,RefreshControl,Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import sendRequest from '../../utils/server-com/sendRequest'

import {getDate} from '../../utils/dateAndTime/getDate'

import StatusLoader from '../../components/StatusLoader'
import ScreenWrapper from '../../components/ScreenWrapper';
import SearchFilterModal from '../../components/modals/SearchFilterModal'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Explore = ({navigation}) => {

    const [searchTerm,setSearchTerm]=useState("")
    const searchInputref=useRef()
   const searchForTerm=()=>{
       console.log("clicked to search")
   }


useEffect(() => {
setCurrent(0)
}, [current])
    const [isLoading,setIsloading] =useState(false)
const [current,setCurrent]=useState(0)
    const when = ["All", "Today", "Yesterday", "This month", "Last Month"]
    const jobs = [{ price: 200 }, { price: 300 }, { price: 900 }, { price: 800 }, { price: 700 }, { price: 800 }, { price: 700 }]

    const clearSearchInput=()=>{
        console.log("clicked")
        searchInputref.current.clear()
        setSearchTerm("")
        Keyboard.dismiss()
    }
const [isVisible,setIsVisible]=useState(false)

    return (
        <ScreenWrapper>
        
            <SearchFilterModal 
            navigation={navigation} 
             isVisible={isVisible}
              setIsVisible={setIsVisible}

              />
        <View style={{ backgroundColor: "#fff", paddingHorizontal: 20, flex: 1 }}>
      

            <View style={{  marginBottom: 24, flexDirection: "row", justifyContent: "space-between" ,alignItems:"center"}}>
                <Text style={{ fontWeight: "700", fontSize: 24 }}>
                    Explore
                </Text>
                <TouchableOpacity
                onPress={()=>setIsVisible(true)}
                 >
                <Image source={require("../../assets/images/filter.png")} />
                </TouchableOpacity>
            </View>


            <View>

                <TextInput
                ref={searchInputref}
                onChangeText={text=>setSearchTerm(text)}
                 placeholder="Explore gigs" style={styles.input} />
{
searchTerm ? 
<>
<TouchableOpacity
style={{position:"absolute",top:15,padding:5}}
onPress={searchForTerm}
>
<Image source={require("../../assets/images/search.png")}  />
</TouchableOpacity>
              
                <TouchableOpacity
onPress={clearSearchInput}
style={{position:"absolute",right:20,top:20}}>
<Image source={require("../../assets/images/cancel.png")}  />
</TouchableOpacity>
</>
:<View />

                }
          
            </View>
            <View style={{ height: 80 }}>
                <ScrollView

                    style={{ marginVertical: 24, flex: 1, flexdire: "row", height:0 }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {
                        when.map((text, idx) => {
                            return (
                                <TouchableOpacity
                                onPress={()=>setCurrent(idx)}
                                >
                                    <Text style={{
                                        marginRight: 8,
                                        backgroundColor: idx === current ? "rgba(9, 29, 110, 1)" : "rgba(246, 246, 246, 1)",
                                        paddingHorizontal: 16,
                                        paddingVertical: 4,
                                        borderRadius: 100,
                                        color: idx === current? "#fff" : "rgba(0, 0, 0, 1)"
                                    }}>
                                        {text}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
            {/* <When /> */}
            <JobListings current={current}/>
        </View>
        </ScreenWrapper>
    )
}

export default Explore;



const JobListings = ({current}) => {
     const [refreshing, setRefreshing] = useState(false);
   
const date= new Date()



    const [allJobs,setAllJobs]=useState([])
        const [jobs,setJobs]=useState([])
    const [isLoading,setIsLoading]=useState(true)


       const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
useEffect(() => {
if(current===1){
    setJobs(allJobs.filter(job=>getDate(job.createdAt)===getDate(date)))
}else if (current===0){
    setJobs(allJobs)
}else if (current===2){
    const date= new Date()
    date.setDate(date.getDate()-1)
    // console.log(getDate(date))
    setJobs(allJobs.filter(job=>getDate(job.createdAt)===getDate(date)))
}
}, [current])

      const getData = async () => {    // log(route)

        // const data = await sendRequest("", "get", "users/" + id)
        // log(data)
        // userContext.setUser(data)
        // setUser(data)
   const theJobs = await sendRequest("", "get", "jobs/" )
   setAllJobs(theJobs)
    setJobs(theJobs)
   setIsLoading(false)


    }

        useEffect(() => {
        getData()
        // return () => {
        //     cleanup
        // };
    }, []);

    return (
        <View style={{paddingBottom:40}}>
          {
            isLoading && <StatusLoader />
        }
            <FlatList
             refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}
                data={jobs}
                  keyExtractor={(item) => item._id}
                  showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Job job={item} 

                    />
                )}
            />
        </View>

    )
}



const Job = ({ job }) => {

    return (
        <View style={{ flexDirection: "row", marginBottom: 15, backgroundColor: "rgba(251, 251, 251, 1)", padding: 10 }}>
            <View style={{ marginRight: 20 }}>
                <Image 
                source={{uri:job.imageURL}} 
style={{width:52,height:52,borderRadius:16,resizeMode:"cover"}}
                />
            </View>
            <View style={{ flex: 1 }}>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom: 7,alignItems:"center"}}>
                    <Text style={{ fontSize: 16, fontWeight: "400" }}>
                       {job.title}
                    </Text>
                    <Text style={{fontSize:12}}>
{getDate(job.createdAt)}
                    </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 14, color: "rgba(130, 130, 130, 1)" }}>
                           {job.description.substr(0,65)}...
                    </Text>
                </View>

                {/* <Text style={{ fontSize: 12, fontWeight: "700", marginTop: 10 }}>
                    ???{job.price}
                </Text> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {

        width: "100%",
        color: "#000",
        padding: 12,
        fontSize: 14,
        borderColor: "rgba(224, 224, 224, 0.3)",
        borderRadius: 6,
        borderWidth: 1,
        backgroundColor: "rgba(224, 224, 224, 0.3)",
        fontWeight: "700",
        paddingLeft:30
    }

})