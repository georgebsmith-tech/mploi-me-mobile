/* eslint-disable prettier/prettier */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
} from 'react-native';



const Home = ({ navigation }) => {
    return (
        <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "rgba(9, 29, 110, 1)", flex: 1 }}>

            <Button title="next" onPress={() => navigation.push("SignIn")} />
            <Button title="previous" />
        </View>
    );
};

export default Home;
