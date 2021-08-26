import React from 'react';
import {Text,View} from 'react-native'
import { getDate } from '../../utils/dateAndTime/getDate';


const NoticeDate =({notice})=>{
    return (
        <View>
                    <Text style={{ backgroundColor: "rgba(231, 232, 240, 1)", paddingHorizontal: 31.5, paddingVertical: 5 }}>
                       {getDate(notice.createdAt)}
                    </Text>
                </View>
    )
}


export default NoticeDate;