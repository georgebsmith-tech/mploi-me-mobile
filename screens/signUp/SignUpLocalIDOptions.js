import React,{useEffect} from 'react';
import type { Node } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
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


import colors from '../../config/colors'

const App = ({ navigation,route }) => {
    return (
        <View
            style={{
                backgroundColor: 'white',
                width: "100%",
                padding: 20,
                flex: 1,
            }}>

            <View style={{ marginBottom: 65 }}>
                <Text style={{ fontSize: 24, fontWeight: "700", marginTop: 16, fontFamily: "Gilroy" }}>
                    Select available card
                </Text>
            </View>
            <Option text="National Identification Number (NIN)" navigation={navigation} />
            <Option text="Voters ID card" navigation={navigation} />
            <Option text="International Passport" navigation={navigation} />


        </View>
    );
};

export default App;


const Option = ({ text, navigation }) => {


    return (

        <TouchableOpacity
            onPress={() => navigation.navigate("SelectID",{state:text})}
            style={styles.option} >
            <Text style={styles.input} >
                {text}
            </Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    option: {

        width: "100%",

        padding: 16,

        borderColor: "rgba(237, 237, 237, 1)",
        borderRadius: 6,
        borderWidth: 1,
        backgroundColor: "#fff",
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between"
    }
    , input: {
        color: colors.primary1,
        fontWeight: "700",
        fontSize: 14,
    }
})
