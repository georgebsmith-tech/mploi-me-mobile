import React from 'react';
import type { Node } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
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
import UserHeader from '../../components/UserHeader'

const App = ({ navigation }) => {
    return (
        <View
            style={{
                backgroundColor: 'white',
                width: "100%",
                padding: 20,
                flex: 1,
            }}>
            <UserHeader />

            <View style={{ marginBottom: 65 }}>
                <Text style={{ fontSize: 14, fontWeight: "700" }}>
                    Let’s get to know you😉, Bright
                </Text>
                <Text style={{ fontSize: 24, fontWeight: "800", marginTop: 16 }}>
                    Select Your Country.
                </Text>
            </View>

            <TouchableOpacity
                onPress={() => navigation.push("UserType")}
                style={{
                    marginBottom: 25, padding: 16, flexDirection: "row", justifyContent: "space-between", width: "100%", backgroundColor: "red",
                    alignItems: "center", backgroundColor: "rgba(224, 224, 224, 0.3)", borderRadius: 8
                }}>
                <Text style={{ fontWeight: "700" }}>
                    Find Your Country
                </Text>
                {/* <TouchableOpacity
                    onPress={() => navigation.push("UserType")}
                    style={{}}> */}
                <View>
                    <Image source={require("../../assets/images/arrow-right.png")} />
                </View>

                {/* </TouchableOpacity> */}


            </TouchableOpacity>

        </View>
    );
};

export default App;




const styles = StyleSheet.create({
    navigate: {

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
