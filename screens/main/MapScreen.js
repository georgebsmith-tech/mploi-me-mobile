import React,{useContext,useState,useEffect} from 'react';
import MapView,{Marker} from 'react-native-maps';
import {View,StyleSheet,Dimensions ,Text,Image} from 'react-native';
import { UserContext } from '../../context/provider/UserProvider';
import ChatAndMapHeader from '../../components/ChatAndMapHeader'
import * as Location from 'expo-location';
import StatusLoader from '../../components/StatusLoader';

export default function({navigation,route}){
  
  const {user}=route.params||{}
    const userContext = useContext(UserContext)
      const loggedUser=userContext.user
        const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion,setMapRegion]=useState({})

   useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location)
      setMapRegion({
          latitude:location.coords.latitude,
          longitude:location.coords.longitude,
          longitudeDelta:0.0922,
          latitudeDelta:0.0421
      })
      setLocation(location);
    })();
  }, []);

    
    return (
        <View style={{flex:1}}>

<View style={{position:"absolute",top:220,zIndex:10,width:"100%",alignItems:"center"}}>
        <View style={{backgroundColor:"rgba(251, 251, 251, 1)",padding:25,width:"80%",flexDirection:"row",elevation:3,borderRadius:6}}>
        <Image source={require("../../assets/images/location-error.png")} style={{marginRight:16}} />
        <Text style={{color:"rgba(79, 79, 79, 1)",width:"80%"}}>
You can’t see the live location of this user till you pay for their service. 
        </Text>

        </View>
        </View>
        <View style={{width:"100%"}}>
            <ChatAndMapHeader user={user} navigation={navigation} show={false} />
            </View>

   <View style={styles.container}>
      <MapView 
      showsUserLocation={true}
    //   mapType="satellite"

       initialRegion={mapRegion} style={styles.map}>
{/* <Marker coordinate={mapRegion}
title={user.firstName.toUpperCase()}
description="Mploi-me User"
>


</Marker> */}
      </MapView>
    </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height-90,
    // flex:1
  },
});