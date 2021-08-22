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
} from 'react-native';



import colors from '../../config/colors'
import CustomButton from '../../components/buttons/CustomButton';
import UserHeader from '../../components/UserHeader';

import UserLink from '../../components/UserLink';
import UserLinksGroup from '../../components/UserLinksGroup';

const App = ({ navigation }) => {
    const details = [{
        text: "Connect Instagram", page: "Add Contact"
    },
    { text: "Connect Twitter", page: "Add Contact" },
    { text: "Connect Whatsapp", page: "Add Contact" },
    { text: "Add Contact I", page: "Add Contact" },
    { text: "Add Contact II", page: "Add Contact" }

    ]
    return (
        <View
            style={{


                backgroundColor: 'white',
                flex: 1,
                padding: 20,
                paddingTop:40
            }}>
            <UserHeader navigation={navigation} >

                <Text style={{ fontSize: 16, color: "rgba(107, 119, 168, 1)", fontWeight: "700", textAlign: "center" }}>
                    Contact
                </Text>
                <View>
                    <Text style={{ color: "#fff" }}>
                        this is it
                    </Text>
                </View>
            </UserHeader>
            <UserLinksGroup details={details} navigation={navigation} />







        </View>
    );
};

export default App;








const styles = StyleSheet.create({
    input: {
        width: '100%',
        color: 'rgba(189, 189, 189, 1)',
        padding: 16,
        fontSize: 14,
        borderColor: 'rgba(224, 224, 224, 0.3)',
        borderWidth: 1,
        backgroundColor: 'rgba(224, 224, 224, 0.3)',
        borderRadius: 8
    }
    ,
    borderLeftAndright: {
        backgroundColor: "rgba(224, 224, 224, 1)",
        flex: 1,
        height: 2
    }
})