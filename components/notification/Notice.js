import React from 'react'

import {View,TouchableOpacity,Text} from 'react-native'


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

export default Notice;