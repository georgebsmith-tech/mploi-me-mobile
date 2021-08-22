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

    const [userType, setUserType] = useState("");

    const {email,id} = route.params

    return (
        <View
            style={{
                backgroundColor: 'white',
                width: "100%",
                padding: 20,
                flex: 1,
            }}>

            <View style={{ marginBottom: 65 }}>
                <Text style={{ fontSize: 14, fontWeight: "700" }}>
                    Let’s help you curate your page 😉.
                </Text>
                <Text style={{ fontSize: 24, fontWeight: "800", marginTop: 16 }}>
                    What do you want to do on Mploi-me?
                </Text>
            </View>

            <UserCategory
                image="sell"
                text="Sell a product or service"
                next="SelectID"
                navigation={navigation}
                option="seller"
                email={email}
                id={id}
            />
            <UserCategory
                navigation={navigation}
                text="Find a service provider"
                option="buyer"
                next="SelectID"
                email={email}
                id={id}

            />

        </View>
    );
};

export default App;


const UserCategory = ({ image, text, navigation, option, email,id }) => {
    const theSource = image === "sell" ? require('../../assets/images/sell.png') : require('../../assets/images/buy.png')// : `../assets/images/buy.png`

    const sendInfo = async () => {
        const body = { email, userType: option }
        log(body)
        const data = await sendRequest(body, "post", `users/register-userType`)
        // const data = await sendRequest("", "get", `users/local-registration`
        log(data)
        navigation.navigate("SelectID", { email,state:"Select ID" ,id})


    }
    console.log(theSource)
    return (
        <View style={{ flexDirection: "row", padding: 10 }}>

            <Image source={theSource} style={{
                top: 20,
                left: 26,
                position: "absolute"
            }} />
            <TouchableOpacity
                onPress={sendInfo}
                style={{ fontSize: 14, fontWeight: "700", padding: 20, paddingLeft: 16, paddingRight: 1, backgroundColor: "rgba(224, 224, 224, 0.1)", borderRadius: 8, width: "100%", flexDirection: "row" }}>

                <Text style={{ width: "100%", textAlign: "center" }}>
                    {text}
                </Text>
            </TouchableOpacity>

        </View>
    )
}




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
