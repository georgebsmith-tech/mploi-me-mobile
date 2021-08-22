import React from 'react';
import type { Node } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IDSelection from '../../components/idUploads/IDSelection'
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

const App = ({ navigation,route }) => {
    console.log("In id selection")
    console.log(route.params)
    return (
        // <View style={{marginTop:60}}>

        <IDSelection navigation={navigation} option={route.params.state} id={route.params.id} />

        //   </View>
    );
};

export default App;




const styles = StyleSheet.create({
    nextBtn: {

        width: "100%",
        color: "#000",
        padding: 16,

        borderColor: "rgba(224, 224, 224, 0.3)",
        borderRadius: 6,
        borderWidth: 1,
        backgroundColor: "rgba(224, 224, 224, 0.3)",

        flexDirection: "row",
        justifyContent: "space-between"
    }
    , input: {
        color: "#000",
        fontWeight: "700",
        fontSize: 14,
    }
})
