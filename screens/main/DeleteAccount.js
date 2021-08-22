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
                    Delete Account
                </Text>
                <TouchableOpacity
                    onPress={() => { }}
                    style={{ backgroundColor: "rgba(9, 29, 110, 1)", paddingHorizontal: 12, paddingVertical: 4, borderRadius: 5 }}>
                    <Text style={{ color: "white", fontWeight: "700" }}>
                        Done
                    </Text>
                </TouchableOpacity>

            </UserHeader>
            <View style={{ padding: 7,marginTop:20 }}>
                <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 8 }}>
                    Things you should know
                </Text>
                <View>

                    <Text style={{ fontSize: 16, paddingVertical: 10, color: "rgba(79, 79, 79, 1)" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum dui vel arcu vulputate ultrices. Mauris ac massa id libero sollicitudin scelerisque.
                    </Text>
                    <Text style={{ fontSize: 16, paddingVertical: 10, color: "rgba(79, 79, 79, 1)" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum dui vel arcu vulputate ultrices. Mauris ac massa id libero sollicitudin scelerisque.
                    </Text>
                    <Text style={{ fontSize: 16, paddingVertical: 10, color: "rgba(79, 79, 79, 1)" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum dui vel arcu vulputate ultrices. Mauris ac massa id libero sollicitudin scelerisque.
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: 50 }}>
                <TouchableOpacity style={{ alignItems: "center" }}>
                    <Text style={{ fontWeight: "700", color: "rgba(235, 87, 87, 1)" }}>
                        Deactivate
                    </Text>
                </TouchableOpacity>
            </View>






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