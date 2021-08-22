import React from 'react'
import type { Node } from 'react';
import { TouchableOpacity, Text } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';


const CusButton = ({ bg, fg, title, icon, iColor }) => {
    return (
        <TouchableOpacity style={{ position: "relative" }}>
            <Text style={{ left: 30, top: 40, zIndex: 10 }}>
                <Icon name={icon} size={30} color={iColor} />
            </Text>
            <Text style={{ fontSize: 14, backgroundColor: bg, textAlign: "center", padding: 15, color: fg, fontWeight: "700", borderRadius: 5, borderColor: "#f2f2f2", borderWidth: 2 }}>

                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CusButton