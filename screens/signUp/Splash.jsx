import React ,{useEffect} from 'react';
import {View, StyleSheet,ImageBackground,Text,Image,AsyncStorage} from 'react-native';

const Splash = ({navigation}) => {

    useEffect(() => {
    
let setTime
        (  async function(){
                const id=await AsyncStorage.getItem("userID")
            if(id){
                navigation.navigate("Home")
                return 
            }else{
                setTime =setTimeout(()=>{
                    navigation.navigate("OnBoarding")
                  },1000) 
            }
          })()
          
          
            return () => {
                clearTimeout(setTime)
                console.log("Cleaned")
            };
        }, []);
        
    return (
        <View style={{flex:1}}>
            <Image 
            style={ {
    flex: 1,resizeMode:"cover"
  }}
            source={require("../../assets/images/splash.png")}/> 
            <View style={{flex:1,position:"absolute",bottom:53,left:47}}>
       <Image
       source={require("../../assets/images/logo-white.png")}
        />
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({})

export default Splash;
