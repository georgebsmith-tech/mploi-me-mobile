import React from 'react'
import {View,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ({rate,fc,bc}){
    return (
          <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 2, paddingHorizontal:5,backgroundColor:bc|| "rgba(212, 243, 204, 0.2)",borderRadius:5 }}>
                            <Icon name="star" size={11} style={{ color: "green", marginRight: 3 }} />
                            <Text style={{ color:fc|| "white",fontSize:10 }}>
                                {rate.toFixed(1)}
                            </Text>
                        </View>
    )
}