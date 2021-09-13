import React from 'react'
import { View, Text ,Image} from 'react-native'

const UserAvatar =({user,borderRadius=100,size=40,fontSize=16})=>{
    return (
        <>
  {
                    user.avatar.length<=15?
                    <View style={{width:size,
                    height:size,alignItems:"center",
                    justifyContent:"center",
                    backgroundColor:user.userColor,
                    borderRadius}}>
                    <Text style={{color:"#fff",fontSize,fontWeight:"700"}}>
                    {`${user.lastName[0]}${user.firstName[0]}`}
                    </Text>
                    </View>

              
                    :
                    <Image source={{uri:user.avatar}} style={{width:size,height:size,borderRadius,resizeMode:"cover"}}/>
                }
        </>
    )
}

export default UserAvatar