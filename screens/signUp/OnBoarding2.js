

import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';

import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable'
import CustomButton from '../../components/buttons/CustomButton'
import OnboardScreen from '../../components/onboarding/OnboardScreen'

const JobDetailed = ({ navigation }) => {
    return ( 
  <OnboardScreen
   navigation={navigation}
   text1=" Get notified when a"
   text2=" client wants to work"
   text3="with you."
   progressImage={require("../../assets/images/skip2.png")}
   coverImage1={require("../../assets/images/onboard5.png")}
    coverImage2={require("../../assets/images/onboard6.png")}
    nextPage="SignUpHome"
    />
    
    )
}

export default JobDetailed;

