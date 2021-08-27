import React from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

const UserHeader = ({ children, justify = { justifyContent: "space-between" }, navigation }) => {
  return (
    <View style={[justify, { flexDirection: "row", width: "100%", alignItems: "center"}]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
     <View style={{padding:6}}>
     <Image source={require("../assets/images/back.png")}/>
     </View>
      </TouchableOpacity>
      {children}
    </View>
  )
}


export default UserHeader;