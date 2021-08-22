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
   text1="Swiftly hire the best"
   text2=" in the industry.."
   progressImage={require("../../assets/images/skip2.png")}
   coverImage1={require("../../assets/images/onboard3.png")}
    coverImage2={require("../../assets/images/onboard4.png")}
    nextPage="OnBoarding2"
    />
    
    )
}

export default JobDetailed;

