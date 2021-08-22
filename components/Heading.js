
import React from 'react';

import {View,Text,TouchableOpacity,Image} from 'react-native';

const Heading =({caption,question})=>{
    return (
   

      <View style={{ fontWeight:"700" ,color:"rgba(130, 130, 130, 1)"}}>
      <Text style={{marginBottom:16}}>
     {caption}
      </Text>
      <Text style={{fontSize:24,fontWeight:"700",color:"rgba(79, 79, 79, 1)"}}>
{question}
      </Text>

      </View>)
}


export default Heading;

