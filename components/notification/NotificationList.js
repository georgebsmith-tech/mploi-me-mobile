import React,{useState,useCallback} from 'react'
import {View,Text,ScrollView,RefreshControl,TouchableOpacity,StyleSheet} from 'react-native' 
import Notice from './Notice'


import {wait} from '../../utils/wait'
import {getDate} from '../../utils/dateAndTime/getDate'
import toWhen from '../../utils/dateAndTime/toWhen'

const NotificationList=({notices})=>{

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
                     const todayInTimeStamp= (Date.parse(preFormatedToday))/1000
                    const date = notice.createdAt
                    
const formatedDate= getDate(date)

let when =toWhen(date)

console.log(when)

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
          <View style={{paddingLeft:30,paddingRight:20,marginBottom:24}}>
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
You can commence.
          </Text>

          </Text>
          {
                        showNewDate &&       <NoticeTime />
                    }
          </View>
          </>
      )
  }else if (notice.type==="to hire"){
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
                        !showNewDate &&       <NoticeTime when ={when} />
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
                        !showNewDate &&       <NoticeTime when ={when} />
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


const NoticeDate =({notice})=>{
    return (
        <View>
                    <Text style={{ backgroundColor: "rgba(231, 232, 240, 1)", paddingHorizontal: 31.5, paddingVertical: 5 }}>
                       {getDate(notice.createdAt)}
                    </Text>
                </View>
    )
}

const NoticeTime =({when})=>{
    return (
        <View style={{flex:0.4,marginLeft:8,alignItems:"flex-end"}}>
        <Text style={{ color: "rgba(107, 119, 168, 1)" }}>
            {when}
        </Text>
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