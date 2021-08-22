import React from 'react'


import { View, Text, Image, FlatList, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomButton from '../../components/buttons/CustomButton';


const Notifications = () => {

    const when = ["All", "Today", "Yesterday", "This month"]
    return (
        <View style={{ backgroundColor: "#fff", flex: 1 }}>

            <View style={{ marginTop: 20, marginBottom: 24, flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
                <Text style={{ fontWeight: "700", fontSize: 24 }}>
                    Notifications
                </Text>
                <TouchableOpacity style={{ backgroundColor: "rgba(206, 210, 226, 1)", paddingHorizontal: 7, paddingVertical: 3, borderRadius: 5 }}>
                    <Text>
                        New
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
            <View style={{ paddingLeft: 70, marginBottom: 24 }}>


                <View style={{ flexDirection: "row", marginBottom: 24 }}>
                    <View style={{ marginRight: 20 }}>
                        <View >
                            <Text>
                                <Text style={{ paddingRight: 5, fontWeight: "700" }}>
                                    Ayomide Asani
                                </Text>
                                <Text style={{ color: "white" }}>i</Text>
                                whats to hire you, for a pedicure service.
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-between" }}>
                            <TouchableOpacity style={[styles.actionButton, styles.acceptBtn]}>
                                <Text style={styles.acceptBtn}>
                                    I Accept, tnx.
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.actionButton, styles.declineBtn]}>
                                <Text style={styles.declineBtn}>
                                    I Decline, tnx.
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: "rgba(107, 119, 168, 1)" }}>
                            45m ago
                        </Text>
                    </View>

                </View>

            </View>

            <View style={{ paddingBottom: 20 }}>
                <View>
                    <Text style={{ backgroundColor: "rgba(231, 232, 240, 1)", paddingHorizontal: 31.5, paddingVertical: 5 }}>
                        Tue, 01 June 2021
                    </Text>
                </View>
                <View style={{ paddingHorizontal: 70, marginTop: 20.5 }}>
                    <Notice />
                    <Notice />

                </View>
            </View>


            </ScrollView>

        </View>
    )
}

export default Notifications;



const Notice = () => {
    return (
        <View style={{ flexDirection: "row", marginBottom: 32 }}>

            <Text>
                <Text style={{ paddingRight: 5, fontWeight: "700" }}>
                    Mazi Ibekwe
                </Text>
                <Text style={{ color: "white" }}>h</Text>
                has an offer for you. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ut eveniet natus consequatur nulla minima, corrupti sunt soluta reprehenderit quisquam error voluptas nobis, in dicta vitae illum officia, facilis itaque.
            </Text>
        </View>
    )
}









const styles = StyleSheet.create({
    input: {

        width: "100%",
        color: "#000",
        padding: 12,
        fontSize: 14,
        borderColor: "rgba(224, 224, 224, 0.3)",
        borderRadius: 6,
        borderWidth: 1,
        backgroundColor: "rgba(224, 224, 224, 0.3)",
        fontWeight: "700"
    },
    actionButton: {
        backgroundColor: "red",
        paddingHorizontal: 12,
        paddingVertical: 4.5
    },
    acceptBtn: {
        backgroundColor: "rgba(9, 29, 110, 1)",
        color: "#fff"
    },
    declineBtn: {
        backgroundColor: "rgba(246, 246, 246, 1)",
        color: "rgba(235, 87, 87, 1)"
    }

})