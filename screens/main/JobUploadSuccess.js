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

import CustomButton from '../../components/buttons/CustomButton'


import colors from '../../config/colors';


const App = ({ navigation }) => {
    return (
        <View
            style={{
                backgroundColor: 'white',
                width: "100%",
                padding: 20,
                flex: 1,
                justifyContent: "center",
            }}>



            <View style={{ alignItems: "center", marginTop: 50 }}>
                <Image source={require("../../assets/images/success.png")} />
            </View>
            <View style={{ alignItems: "center", marginTop: 30 }}>
                <Text style={{ fontSize: 24, fontWeight: "700" }}>
                    Success! 🎉
                </Text>
                <Text style={{ textAlign: "center", marginTop: 20,paddingHorizontal:30 }}>
               You’ve just created an item for business, we will approve in no time before showing to your customers. kudos 👍
                </Text>
            </View>
            <CustomButton title="Thanks!" mt={80} next={() => navigation.navigate("Profile")} />


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
