import React from 'react'

 import {View,Text,TouchableOpacity,TextInput,TouchableWithoutFeedback,Modal} from 'react-native';

export default function ReportModal({navigation,isVisible,setIsVisible,user}) {
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
        <View style={{ backgroundColor: "#fff", paddingTop: 30, borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
            <View style={{ alignItems: "center", marginBottom: 20 }}>
                <TouchableOpacity>
                    <Text style={{ color: "rgba(107, 119, 168, 1)", fontWeight: "700" }}>
                        Report
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={{ padding: 20 }}>

                <Text style={{ fontWeight: "700", marginBottom: 10 }}>
                    Why do you want report this account?
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum dui vel arcu vulputate ultrices dui vel arcu vulputate ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum dui vel arcu vulputate ultrices dui vel arcu vu
                </Text>
            </View>

            <View style={{ marginBottom: 25, padding: 17.5 }}>

                <TextInput
                    placeholder= {`Report ${user.lastName} ${user.firstName}`}
                    multiline={true}
                    numberOfLines={8}
                    onChangeText={() => { }}
                    style={{ backgroundColor: "rgba(224, 224, 224, 0.3)", borderRadius: 8, padding: 16, textAlignVertical: 'top' }}
                />

            </View>
            <View style={{ alignItems: "center", marginBottom: 35 }}>
                <TouchableOpacity
                onPress={()=>setIsVisible(false)}
                >
                    <Text style={{ color: "rgba(235, 87, 87, 1)", fontWeight: "700" }}>
                    {`Report ${user.lastName} ${user.firstName}`}
                    </Text>
                </TouchableOpacity>

            </View>

        </View>



    </View> 
     </Modal>
    )
}
