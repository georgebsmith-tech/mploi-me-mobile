import React, { useContext, useState } from 'react';
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
import sendRequest from '../../utils/server-com/sendRequest'
import UserLink from '../../components/UserLink';
import UserLinksGroup from '../../components/UserLinksGroup';
import { UserContext } from '../../context/provider/UserProvider';
import StatusLoader from '../../components/StatusLoader'
const log = console.log

const App = ({ navigation, route }) => {
    console.log(route)
    const [error, setError] = useState("")
    const [submitting, setSubmitting] = useState(false)
    const account = route.name
    const userContext = useContext(UserContext)
    const [contact, setContact] = useState(userContext.user.phone)
        const [isLoading,setIsLoading]=useState(false)

    const sendInfo = async () => {
          setIsLoading(true)
        setError("")
        setSubmitting(true)
        log("cliecked")
        const body = { phone: contact }
        const data = await sendRequest(body, "put", `users/phone/` + userContext.user._id)
        userContext.setUser(data)
        // const data = await sendRequest("", "get", `users/local-registration`
        setSubmitting(false)
             setIsLoading(false)
        if (data.error) {
            log(error)
            setError(data.error)

        } else {
           alert("Your profile has been Successfully Updated!!")
            // navigation.navigate("Home", { id })
        }

    }




    console.log(userContext)
    return (
        <View
            style={{


                backgroundColor: 'white',
                flex: 1,
                padding: 20,
                paddingTop:40
            }}>
                {
                isLoading &&  <StatusLoader />
            }


            <UserHeader navigation={navigation} >
                <Text style={{ fontSize: 16, color: "rgba(107, 119, 168, 1)", fontWeight: "700", textAlign: "center" }}>
                    {account}
                </Text>
                <TouchableOpacity
                    onPress={sendInfo}
                    style={{ backgroundColor: "rgba(9, 29, 110, 1)", paddingHorizontal: 12, paddingVertical: 4, borderRadius: 5 }}>
                    <Text style={{ color: "white", fontWeight: "700" }}>
                        Done
                    </Text>
                </TouchableOpacity>

            </UserHeader>
            <View style={{marginTop:20}}>
                <TextInput
                    onChangeText={text => setContact(text)}
                    placeholder={`Enter Contact`} style={{ fontSize: 16 }} value={contact} />
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