import React, { useState } from 'react';
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
    Image
} from 'react-native';


import colors from '../../config/colors'
const log = console.log

const App = ({ navigation, route }) => {
    log(route.params)
    const {email,id,firstName} = route.params

    const [gender, setGender] = useState("")

    const sendInfo = async (gender) => {
        const body = { email, gender }
        const data = await sendRequest(body, "post", `users/register-gender`)
        // const data = await sendRequest("", "get", `users/local-registration`
        log(data)
        navigation.navigate("Country", { email,id })


    }
    return (
        <View
            style={{
                backgroundColor: 'white',
                width: "100%",
                padding: 20,
                flex: 1,
            }}>

            <View style={{ marginBottom: 30 }}>
                <Text style={{ fontSize: 14, fontWeight: "700" }}>
                    Let’s get to know you😉, {firstName}
                </Text>
                <Text style={{ fontSize: 24, fontWeight: "800", marginTop: 16 }}>
                    Whats your gender?
                </Text>
            </View>

            <View style={{ paddingRight: 40, paddingLeft: 40 ,flex:1,justifyContent:"center"}}>
                <View>
                    <TouchableOpacity
                        onPress={() => sendInfo("male")}
                        style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={require("../../assets/images/male.png")} />
                        <Text style={{ fontSize: 16, fontWeight: "700", marginLeft: 25, color: colors.primary1 }}>Male</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 70, justifyContent: "flex-end", flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity
                        onPress={() => sendInfo("female")}
                        // onPress={() => navigation.push("Country")}
                        style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 16, fontWeight: "700", marginRight: 25, color: colors.primary1 }}>Female</Text>
                        <Image source={require("../../assets/images/female.png")} />
                    </TouchableOpacity>
                </View>


            </View>


        </View>
    );
};

export default App;






const styles = StyleSheet.create({
    borderLeftAndright: {
        backgroundColor: "rgba(224, 224, 224, 1)",
        flex: 1,
        height: 2
    }
})