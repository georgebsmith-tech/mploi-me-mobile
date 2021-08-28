import React from 'react'

import { StatusBar, View, } from 'react-native';


const ScreenWrapper=({children})=>{
    const statusBarHeight= StatusBar.currentHeight
    console.log(statusBarHeight)
    return (
        <View style={{paddingTop:statusBarHeight+10,flex:1,backgroundColor:"white"}}>

{children}
        </View>
    )
}


export default ScreenWrapper;