import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const UserLink = ({ detail, page, company,imageType }) => {
    
    const image= imageType*1===2?require("../assets/images/nav-pointer2.png"):require("../assets/images/arrow-right.png")
    return (
        <TouchableOpacity
            onPress={() => page()}
            style={{ flexDirection: "row", justifyContent: "space-between", }}>
            <Text style={{ fontSize: 16, marginBottom: 23.8, color: "rgba(9, 29, 110, 1)" }}>
                {detail.text}
            </Text>
            {
                company ? <Image source={require("../assets/images/nav-pointer2.png")} /> : <Icon name="angle-right" size={20} />
            }

        </TouchableOpacity>
    )
}

export default UserLink;