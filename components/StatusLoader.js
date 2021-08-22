
import React from 'react'
import { View } from 'react-native';
import ProgressLoader from 'rn-progress-loader';

const StatuLoader=()=> {

        return (
            <View
                style={{backgroundColor: "#06566e", justifyContent: 'center', alignItems: 'center', flex: 1,position:"absolute"}}>

                <ProgressLoader
                visible={true}
                isModal={true} isHUD={true}
                hudColor={"rgba(0,0,0,1)"}
                color={"#FFFFFF"} />
            </View>
        )
    
}

export default StatuLoader;