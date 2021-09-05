import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import sendRequest from '../../utils/server-com/sendRequest'
import ScreenWrapper from '../../components/ScreenWrapper'
import {
    StyleSheet,
    Text,
    useColorScheme,
    TouchableOpacity,
    TextInput,
    View,
    Image
} from 'react-native';
import RNCountries from '../../utils/countries'


import colors from '../../config/colors'
import UserHeader from '../../components/UserHeader'
import { FlatList } from 'react-native-gesture-handler';
const log = console.log
const App = ({ navigation, route }) => {
    const {email,id} = route.params
    const [country, setCountry] = useState("Nigeria")

    const sendInfo = async () => {
        const body = { email, country }
        log(body)
        const data = await sendRequest(body, "post", `users/register-country`)
        // const data = await sendRequest("", "get", `users/local-registration`
        log(data)
        navigation.navigate("UserType", { email,id })


    }

    const [countries, setCountries] = useState([])

    const searchCountries =(text)=>{
        setCountry(text)
        console.log(country)
        setCountries(RNCountries.filter(deCountry=>deCountry.name.toLowerCase().includes(text.toLowerCase())))

    }
    return (
      <ScreenWrapper>
        <View
            style={{
                backgroundColor: 'white',
                width: "100%",
                paddingHorizontal: 20,
                flex: 1
               
            }}>
            <UserHeader navigation={navigation} >
                <TouchableOpacity
                    onPress={sendInfo}
                    style={{ backgroundColor: "rgba(9, 29, 110, 1)", paddingHorizontal: 12, paddingVertical: 4, borderRadius: 5 }}>
                    <Text style={{ color: "white", fontWeight: "700" }}>
                        Done
                    </Text>
                </TouchableOpacity>

            </UserHeader>

            <View style={{ marginBottom: 15 }}>

                <Text style={{ fontSize: 24, fontWeight: "800", marginTop: 16 }}>
                    Select Your Country.
                </Text>
            </View>

            <View style={{ flexDirection: "row", marginBottom: 0 }}>
                <TextInput 
                placeholder="Find your Country" style={styles.input}
                    value={country}
                    onChangeText={(text) => searchCountries(text)} />
                {/* <TouchableOpacity
                    onPress={() => navigation.push("UserType")}
                    style={{ position: "relative", right: 40, top: 15 }}>
                    <Icon name="search" size={30} />
                </TouchableOpacity> */}

            </View>
            <FlatList
            data={countries} 
            renderItem={(item)=>(
                <TouchableOpacity 
                onPress={()=>{setCountry(item.item.name);setCountries([])}}
                style={{padding:5,backgroundColor:"#f2f2f2",marginBottom:2}}>
                    <Text>
                        {item.item.name}
                    </Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item,index)=>index}
            />

        </View>
        </ScreenWrapper>
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
