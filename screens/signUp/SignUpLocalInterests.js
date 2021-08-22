import React,{useEffect,useState} from 'react';
import type { Node } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import sendRequest from '../../utils/server-com/sendRequest'
import {
    StyleSheet,
    Text,
    useColorScheme,
    TouchableOpacity,
    TextInput,
    View,
    Image,
      AsyncStorage
} from 'react-native';
import UserHeader from '../../components/UserHeader'


import colors from '../../config/colors';
const Categories = ({ navigation,route }) => {

    const [selesctedItems, setSelectedItems]=useState([])

    const [categories,setCategories]=useState([])

    console.log(selesctedItems)
 
      const sendInfo = async () => {
   
    const data = await sendRequest("", "get", `categories/`)
    // const data = await sendRequest("", "get", `users/local-registration`
    console.log(data)
    setCategories(data)
  


  }

  useEffect(() => {
      sendInfo()
    //   return () => {
    //       cleanup
    //   }
  }, [])
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 30 }}>

        
            {
               categories.map((item, idx) => {
                    let pos
                    if (idx === 1) {
                        pos = "center"
                    } else if (idx === 2) {
                        pos = "flex-end"
                    } else {
                        pos = "flex-start"
                    }
                    return (
                      <Category 
                      setSelectedItems={setSelectedItems}
                      selesctedItems={selesctedItems}
                      key={item._id} item={item} />
                    )
                }
                )
            }

        </View>

    )
}


const Category=({item,setSelectedItems,selesctedItems})=>{
    const [selected,setSelected]=useState(false)
    console.log(selesctedItems)
    return (
          <TouchableOpacity
                      
onPress={()=>{
    if(selected){
        setSelectedItems(selesctedItems.filter((obj)=>obj._id!==item._id))
    }else{
   setSelectedItems([...selesctedItems,{title:item.title,_id:item._id}])
    }
 
    setSelected(!selected)
    }}
                            

                            style={{ flex: 1, alignItems: "center" }}>
                            <Image source={require("../../assets/images/cat-1.png")} style={{ marginBottom: 15 }} />
                            <Text style={{ fontWeight: "700" }}>{item.title}</Text>
{
selected  ?      <Image source={require("../../assets/images/pick.png")} style={{ marginBottom: 15 ,position:"absolute"}} />:<View />
}
                        
                        </TouchableOpacity>
    )
}

const App = ({ navigation,route }) => {

      const [id,setId]=useState(null)

    useEffect(() => {
    
   ( async function(){
        const val=await AsyncStorage.getItem("signUpID")

        setId(val)
    })()
        // return () => {
        //     cleanup
        // }
    }, [])

    return (
        <View
            style={{
                backgroundColor: 'white',
                width: "100%",
                padding: 20,
                flex: 1,
                marginTop:30
            }}>
              <UserHeader navigation={navigation} >
                <TouchableOpacity
                   onPress={async () => {
                       console.log(route.params)

                       if(id){
   await AsyncStorage.setItem("userID",id)
                       }
   
                       navigation.push("SignUpSuccess")}}
                    style={{ backgroundColor: "rgba(9, 29, 110, 1)", paddingHorizontal: 12, paddingVertical: 4, borderRadius: 5 }}>
                    <Text style={{ color: "white", fontWeight: "700" }}>
                        Done
                    </Text>
                </TouchableOpacity>

            </UserHeader>

            <View style={{ marginBottom: 50,marginTop:20 }}>
                <Text style={{ fontSize: 14, fontWeight: "700" }}>
                    You’re close 🙃.
                </Text>
                <Text style={{ fontSize: 24, fontWeight: "700", marginTop: 16 }}>
                    Pick your Interest.
                </Text>
            </View>
            <Categories navigation={navigation} route={route} />
            <Categories navigation={navigation} route={route} />
            <Categories navigation={navigation} route={route} />





        </View>
    );
};

export default App;




const styles = StyleSheet.create({
    input: {

        width: "100%",
        color: "#000",
        padding: 16,
        fontSize: 14,
        borderColor: "rgba(224, 224, 224, 0.3)",
        borderRadius: 6,
        borderWidth: 1,
        backgroundColor: "rgba(224, 224, 224, 0.3)",
        fontWeight: "700"
    }

})
