import React,{useState} from 'react'

 import {View,Text,TouchableOpacity,TextInput,TouchableWithoutFeedback,Modal} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../config/colors';

export default function ReportModal({navigation,isVisible,setIsVisible,user}) {
    const [selected,setSelected]=useState("All")
    return (
        <Modal 
        transparent
        visible={isVisible}
     animationType="slide"
        >
        <View

        style={{ width: "100%", height: "100%", position: "absolute", backgroundColor: "rgba(0,0,0,0.5)", top: 0, right: 0, zIndex: 10, justifyContent: "flex-end" }}>
        <TouchableWithoutFeedback onPress={() =>  {setIsVisible(false)}}>
            <View style={{ flex: 1}}>

            </View>
        </TouchableWithoutFeedback>
        <View style={{ backgroundColor: "#fff", paddingTop: 30, borderTopLeftRadius: 40, borderTopRightRadius: 40 ,paddingHorizontal:20,paddingBottom:20,alignItems:"center"}}>
            <Text style={{fontSize:18,color:colors.primary1,fontWeight:"700"}}>
                Category
            </Text>
        <FlatList 
data={[{cat:"All"},{cat:"Phone"},{cat:"Home"},{cat:"Mechanic"},{cat:"technology"}]}
numColumns={3}
renderItem={(item)=>(
    <TouchableOpacity
    onPress={()=>setSelected(item.item.cat)}
     style={{margin:5}}>
        <Text style={{backgroundColor:item.item.cat===selected?colors.primary1:"rgba(246, 246, 246, 1)",paddingHorizontal:16,paddingVertical:5,borderRadius:100,textAlign:"center",color:item.item.cat===selected?"white":"rgba(0, 0, 0, 1)"}}>
            {item.item.cat}
        </Text>
    </TouchableOpacity>
)}

keyExtractor={(item,idx)=>idx}

/>

<View style={{marginTop:15}}>
<TouchableOpacity
onPress={()=>setIsVisible(false)}
>
    <Text style={{fontWeight:"700",color:colors.primary1,padding:10}}>
        Apply
    </Text>
</TouchableOpacity> 
</View>

        </View>


    </View> 
     </Modal>
    )
}
