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
   text1="Get jobs safely"
   text2="and with ease."
   progressImage={require("../../assets/images/skip1.png")}
   coverImage1={require("../../assets/images/Onboard1.png")}
    coverImage2={require("../../assets/images/onboard2.png")}
    nextPage="OnBoarding1"
    />
    
    )
}

export default JobDetailed;

