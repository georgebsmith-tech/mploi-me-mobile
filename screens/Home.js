/* eslint-disable prettier/prettier */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';



const Home = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "rgba(9, 29, 110, 1)", flex: 1 }}>

      <Image source={require("../assets/images/logo-dark.png")} />
    </View>
  );
};

export default Home;
