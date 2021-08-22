import React from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

const UserHeader = ({ children, justify = { justifyContent: "space-between" }, navigation }) => {
  return (
    <View style={[justify, { flexDirection: "row", width: "100%", alignItems: "center"}]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Image source={require("../assets/images/back1.png")} />
      </TouchableOpacity>
      {children}
    </View>
  )
}


export default UserHeader;