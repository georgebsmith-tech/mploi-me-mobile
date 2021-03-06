import React, { useEffect, useState, useContext } from 'react'


import { View, Text, Image, FlatList, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import sendRequest from '../../utils/server-com/sendRequest'

import {getDate} from '../../utils/dateAndTime/getDate'

import StatusLoader from '../../components/StatusLoader'

const Explore = () => {
    const [isLoading,setIsloading] =useState(false)

    const when = ["All", "Ongoing", "Completed", "Closed", "Disputed"]
    const jobs = [{ price: 200 }, { price: 300 }, { price: 900 }, { price: 800 }, { price: 700 }, { price: 800 }, { price: 700 }]
    return (
        <View style={{ backgroundColor: "#fff", padding: 20, flex: 1 }}>
      

            <View style={{ marginTop: 20, marginBottom: 24, flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontWeight: "700", fontSize: 24 }}>
                    My Gigs
                </Text>
                <TouchableOpacity >
                    <Icon name="filter" size={28} />
                </TouchableOpacity>
            </View>


            <View>
                <TextInput placeholder="Explore gigs" style={styles.input} />
            </View>
            <View style={{ height: 80 }}>
                <ScrollView

                    style={{ marginVertical: 24, flex: 1, flexdire: "row", height: 0 }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {
                        when.map((text, idx) => {
                            return (
                                <TouchableOpacity>
                                    <Text style={{
                                        marginRight: 8,
                                        backgroundColor: idx === 0 ? "rgba(9, 29, 110, 1)" : "rgba(246, 246, 246, 1)",
                                        paddingHorizontal: 16,
                                        paddingVertical: 4,
                                        borderRadius: 100,
                                        color: idx === 0 ? "#fff" : "rgba(0, 0, 0, 1)"
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
            <JobListings />




        </View>
    )
}

export default Explore;


const When = () => {
    // const when = 
    return (
        <View>
            {
                ["All", "Ongoing", "Yesterday", "Last Week", "this month"].map((text) => {
                    return (
                        <Text>
                            {text}
                        </Text>
                    )
                })
            }

            <Text>
                thhejjjduuu
            </Text>

        </View>
    )
}


const JobListings = () => {
    const [jobs,setJobs]=useState([])
    const [isLoading,setIsLoading]=useState(true)
      const getData = async () => {    // log(route)

        // const data = await sendRequest("", "get", "users/" + id)
        // log(data)
        // userContext.setUser(data)
        // setUser(data)
   const theJobs = await sendRequest("", "get", "jobs/" )
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
        <View style={{marginBottom:20}}>
          {
            isLoading && <StatusLoader />
        }
            <FlatList
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
    console.log(job)

    console.log()
    return (
        <View style={{ flexDirection: "row", marginBottom: 15, backgroundColor: "rgba(251, 251, 251, 1)", padding: 10 }}>
            <View style={{ marginRight: 20 }}>
                <Image source={require("../../assets/images/explore1.png")} />
            </View>
            <View style={{ flex: 1 }}>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom: 10,alignItems:"center"}}>
                    <Text style={{ fontSize: 16, fontWeight: "400" }}>
                       {job.title}
                    </Text>
                    <Text>
{getDate(job.createdAt)}
                    </Text>
                </View>
                <View>
                    <Text style={{ fontSize: 14, color: "rgba(130, 130, 130, 1)" }}>
                           {(job.createdBy && job.createdBy.lastName)?  `${job.createdBy.lastName} ${job.createdBy.firstName}`:"User"}
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
        fontWeight: "700"
    }

})