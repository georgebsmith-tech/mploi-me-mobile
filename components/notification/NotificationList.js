import React,{useState,useCallback} from 'react'
import {View,Text,ScrollView,RefreshControl,TouchableOpacity,StyleSheet,StatusBar} from 'react-native' 
import Notice from './Notice'


import {wait} from '../../utils/wait'
import {getDate} from '../../utils/dateAndTime/getDate'
import toWhen, { toTimeStamp } from '../../utils/dateAndTime/toWhen'
import NoticeDate from './NoticeDate'
import NoticeTime from './NoticeTime'

const NotificationList=({notices,navigation})=>{

            const [refreshing, setRefreshing] = useState(false);
            const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const gottenDates=[]

    return (
        <View>
         <ScrollView
             refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
            >
            

            <View style={{ paddingBottom: 20 }}>
            {


                notices.map(notice=>
                {
                     const preFormatedToday = new Date()
                     const today =getDate(preFormatedToday)
                
                    const date = notice.createdAt
                    
const formatedDate= getDate(date)

let when =toWhen(date)
const isToday=formatedDate===today 


let showNewDate=true
if(formatedDate===today ||gottenDates.includes(formatedDate)){
    showNewDate=false
}else if(!gottenDates.includes(formatedDate)){
  gottenDates.push(formatedDate)
}
{/* console.log(notice) */}

  if(notice.type==="has paid"){
      return (
          <>
          { showNewDate && <NoticeDate notice={notice} />}
          <TouchableOpacity
          onPress={()=>navigation.navigate("Home-Stack",{screen:"Job-Payment-Notification",params:{notice}})}
           style={{paddingLeft:30,paddingRight:20,marginBottom:24}}>
          <Text style={{flexDirection:"row",flex:1}}>
          <Text style={{color:"black",fontWeight:"700"}}>
{
    `${notice.who.lastName} ${notice.who.firstName} `
}
          </Text>
          <Text>
has an paid for the job
          </Text>
          <Text style={{fontWeight:"700"}}>
{` ${notice.job?.title}. `}
          </Text>
          <Text>
You can commence. Click to see details.
          </Text>

          </Text>
          {
                        isToday &&       <NoticeTime />
                    }
          </TouchableOpacity>
          </>
      )
  }else if (notice.type==="to hire"){
      console.log(showNewDate)
      return (
<>
{ showNewDate && <NoticeDate notice={notice} />}
       <View style={{ paddingLeft: 30, marginBottom: 24,paddingRight:20 }}>


                <View style={{ flexDirection: "row"}}>
                    <View style={{ flex:1 }}>
                        <View >
                            <Text>
                                <Text style={{ paddingRight: 5, fontWeight: "700" }}>
                                   {`${notice?.who.lastName} ${notice.who?.firstName}`}
                                </Text>
                                <Text style={{ color: "white" }}>i</Text>
                                wants to hire you, for a pedicure service.
                            </Text>
                        </View>
                 
                    </View>
                    {
                        isToday &&       <NoticeTime when ={when} />
                    }
        

                </View>

            </View>
            </>
      )


  }else if (notice.type==="has applied"){
      return (
        <>
          { showNewDate && <NoticeDate notice={notice} />}
          <View style={{paddingLeft:30,paddingRight:20,marginBottom:24,flexDirection:"row"}}>
      
      <Text style={{flexDirection:"row",flex:1}}>
          <Text style={{color:"black",fontWeight:"700"}}>
{
    `${notice.who.lastName} ${notice.who.firstName} `
}
          </Text>
          <Text>
applied for the job
          </Text>
          <Text style={{fontWeight:"700"}}>
{` ${notice.job?.title}. `}
          </Text>

          </Text>
      
          {
            isToday &&       <NoticeTime when ={when} />
                    }
          </View>
          </>
      )


  }

                }
               )
            }
               
            </View>


            </ScrollView>

        </View>

    )
}


export default NotificationList;



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
    },
    actionButton: {
        backgroundColor: "red",
        paddingHorizontal: 12,
        paddingVertical: 4.5,
        borderRadius:5
    },
    acceptBtn: {
        backgroundColor: "rgba(9, 29, 110, 1)",
        color: "#fff"
    },
    declineBtn: {
        backgroundColor: "rgba(246, 246, 246, 1)",
        color: "rgba(235, 87, 87, 1)"
    }

})