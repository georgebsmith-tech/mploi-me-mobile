import React from 'react'

import { Button, View, TouchableOpacity, Text } from 'react-native'
import colors from '../../config/colors';



const CustomButtom = ({ title, mt = 20, next }) => {
    return (
        <View style={{ alignItems: "center", marginTop: mt }}>
            <TouchableOpacity
                onPress={() => next()}
                style={{ backgroundColor: colors.primary1, width: "90%", padding: 16, borderRadius: 8 }}>
                <Text style={{ color: "#fff", textAlign: "center", fontWeight: "700" }}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomButtom;