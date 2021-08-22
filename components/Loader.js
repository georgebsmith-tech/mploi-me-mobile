import React from 'react'


import {View,Image,StyleSheet} from 'react-native'


const Loader=()=>{
    return (
        <View style={styles.loader}>
<Image
source={require("../assets/images/loader.png")}
 />
        </View>
    )
}

export default Loader;


const styles=StyleSheet.create({
    loader:{
        justifyContent:"center",
        alignItems:"center",
        flex:1
    }
})