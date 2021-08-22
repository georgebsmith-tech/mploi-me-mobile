import React from 'react'

import { View } from 'react-native';
import UserLink from './UserLink';
const UserLinksGroup = ({ details, navigation,imageType }) => {
    return (
        <View style={{ marginBottom: 10, width: "100%", marginTop: 20 }}>
            {
                details.map((detail, idx) => <UserLink
                 key={idx}
                imageType={imageType}
                    detail={detail}
                     page={() =>detail.stack?navigation.navigate(detail.stack,{screen:detail.page,account:detail.text}) :navigation.navigate(detail.page, { account: detail.text })} />)
            }

        </View>
    )
}

export default UserLinksGroup;