import React from 'react';
import { Text,View } from 'react-native';

const NoticeTime =({when})=>{
    return (
        <View style={{flex:0.4,marginLeft:8,alignItems:"flex-end"}}>
        <Text style={{ color: "rgba(107, 119, 168, 1)" }}>
            {when}
        </Text>
    </View>
    )
}

export default NoticeTime;