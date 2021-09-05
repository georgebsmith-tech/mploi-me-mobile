import React,{useState,useEffect} from 'react'
import {Modal,TouchableOpacity,Pressable,View,Text,FlatList,StyleSheet,TouchableWithoutFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import sendRequest from '../../utils/server-com/sendRequest'
import { LinearGradient } from 'expo-linear-gradient';

const log = console.log

const ReviewsModal= ({navigation,isVisible,setIsVisible,user})=>{
    // const [modalVisible,setModalVisible]=useState(isVisible)
 
    const [reviews,setReviews]=useState(user.ratings)


    return (
        <Modal 
        transparent
        visible={isVisible}
     animationType="slide"
        >
                <View 
                  onPress={() => setIsVisible(false)}
                 style={{ backgroundColor: "rgba(0,0,0,0.5)", flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: "flex-end" }}>

     

<TouchableOpacity
onPress={() => setIsVisible(false)}
 style={{backgroundColor:"transparent",flex:1}} />
                        <View style={{ backgroundColor: "#fff", paddingHorizontal: 37,borderTopLeftRadius:24,borderTopRightRadius:24,maxHeight:"78%" }}>
                        <View style={{alignItems:"center",width:"100%"}}>
                        <Pressable 
                        onPress={() => setIsVisible(false)}
                        style={{width:56,height:6,backgroundColor:"rgba(224, 224, 224, 1)",marginTop:4,borderRadius:100}}>

                        </Pressable>

                        </View>
                        <View>
<Text style={{fontSize:18,color:"rgba(107, 119, 168, 1)",textAlign:"center",marginBottom:20,marginTop:25,fontWeight:"700"}}>
Reviews
</Text>
                        </View>
        
                     {
                         reviews.length===0?<View style={{alignItems:"center",paddingVertical:20}}>
<Text>
This User has no reviews yet
</Text>
                         </View>:  <FlatList
               
               data={reviews}

               renderItem={(item)=>(<Review review={item.item}/>)}

           showsVerticalScrollIndicator={false}
               keyExtractor={(item)=>item.createdAt}

                />
                     }   
             
                <TouchableOpacity onPress={() => {navigation.navigate("Home-Stack", { screen: "Ratings",params:{user} });setIsVisible(false) }} style={{marginTop:20,marginBottom:40,alignItems:"center"}}>
                <Text style={{color:"rgba(9, 29, 110, 1)",fontWeight:"700"}}>
    {`Rate ${user.lastName} ${user.firstName}`}

                </Text>

                </TouchableOpacity>

      
                           
                        </View>

                    </View>
                </View>

            </Modal>
    )
}


export default ReviewsModal;

const Review=({review})=>{
    console.log(review)
    return (
        <View style={{marginBottom:37}}>
    <View>
                            <View style={{flexDirection:"row",marginBottom:5}}>
                            <Text style={{color:"#000",fontWeight:"700"}}>
{`${review.ratedBy.lastName||"User"} ${review.ratedBy.firstName||"User"}`}
                            </Text>
                                <Text>
{" "}
                            </Text>

                                <Text style={{color:"rgba(47, 128, 237, 1)"}}>
{`${review.ratedBy.profession||"Profession"}`}
                            </Text>


                            </View>
                            <Text>
{review.text}
                            </Text>
                        </View>
                     
<Rate rating={review.rating}/>
        </View>
    )
}

const Rate=({rating})=>{
    const content=[]
    for (let i=1;i<=5;i++){
content.push(<View>
         <Icon name="star" size={17} style={{color:i<=rating?"rgba(224, 235, 56, 1)":"rgba(234, 234, 234, 1)",marginRight:7.7}}/>
        
        </View>)
    }
  return (
 <View style={{ width: "100%", marginTop: 8,flexDirection:"row" }}>
    {content}
      
      </View>
  )
  
}


const styles = StyleSheet.create({ });