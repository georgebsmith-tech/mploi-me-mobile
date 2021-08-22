import React ,{useEffect} from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';

import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity,AsyncStorage } from 'react-native';
// import {GestureHandler} from 'expo'


import CustomButton from '../buttons/CustomButton'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

// const {Swipeable} = GestureHandler
// console.log(Swipeable)


const JobDetailed = ({ 
  navigation,
  text1,
  text2,
  text3,
  progressImage,
  coverImage1 ,
    coverImage2 ,
    nextPage
  }) => {
  
 

useEffect(() => {
    

(  async function(){
        const id=await AsyncStorage.getItem("userID")
    if(id){
        navigation.navigate("Home")
    }
  })()
    // return () => {
    //     cleanup
    // };
}, []);


  const onSwipeUp=(gestureState)=> {
    console.log({myText: 'You swiped up!'});
  }
 
  const onSwipeDown=(gestureState)=> {
    console.log({myText: 'You swiped down!'});
  }
 
 const  onSwipeLeft=(gestureState) =>{
    navigation.push(nextPage)
  }
 
 const  onSwipeRight=(gestureState)=> {
    console.log({myText: 'You swiped right!'});
  }
  const onSwipe=(gestureName, gestureState)=> {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    console.log({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_UP:
        console.log({backgroundColor: 'red'});
        break;
      case SWIPE_DOWN:
        console.log({backgroundColor: 'green'});
        break;
      case SWIPE_LEFT:
        console.log({backgroundColor: 'blue'});
        break;
      case SWIPE_RIGHT:
        console.log({backgroundColor: 'yellow'});
        break;
    }
  }
  const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (
              <GestureRecognizer
        onSwipe={(direction, state) =>onSwipe(direction, state)}
        onSwipeUp={(state) => onSwipeUp(state)}
        onSwipeDown={(state) => onSwipeDown(state)}
        onSwipeLeft={(state) => onSwipeLeft(state)}
        onSwipeRight={(state) => onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: "blue"
        }}
        >
     
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
     
            <Image source={coverImage1} style={{ width: "100%", height: "100%", resizeMode: "cover" }} />
            <Image source={coverImage2} style={{ width: "100%", height: "100%", resizeMode: "cover", position: "absolute", zIndex: 1, top: 110 }} />
            <Image source={require("../../assets/images/cover.png")} style={{ width: "100%", height: "100%", resizeMode: "cover", position: "absolute", zIndex: 1, top: 170 }} />
            <View style={{ backgroundColor: "rgba(0,0,0)", width: "100%", height: "100%", position: "absolute", justifyContent: "flex-end", zIndex: 5 }}>
                
                <View style={{ padding: 18.5, borderRadius: 15,marginBottom:140 }}>

                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontWeight: "700", fontSize: 32, color: "#fff" }}>
                            {text1}
                        </Text>
                        <Text style={{ fontWeight: "700", fontSize: 32, color: "#fff" }}>
                            {text2}
                        </Text>
                        {
                          text3 &&   <Text style={{ fontWeight: "700", fontSize: 32, color: "#fff" }}>
                            with you.
                        </Text>
                        }
                       
                    </View>
                 
                    {/* <View style={{ paddingHorizontal: 0, paddingVertical: 16, marginTop: 25 }}>
                        <CustomButton title="Skip"
                            //   next={() => navigation.navigate("SelectID",{state:"text"})}
                            next={() => navigation.push("OnBoarding1")}
                            //    next={() => navigation.push("Interests")}

                        />

                    </View> */}
               
                  
                </View>
                  <View style={{ lex: 1, flexDirection: "row", justifyContent: "center", marginBottom: 20 }}>
                        <Image source={progressImage} style={{}} />
                    </View>

            </View>
                

        </View>
          </GestureRecognizer>
        
    )
}

export default JobDetailed;