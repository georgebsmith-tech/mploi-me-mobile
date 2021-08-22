import React from 'react';


import { TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView, Keyboard } from 'react-native';


const KeyboardAvoidingWrapper = ({ children }) => {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}


export default KeyboardAvoidingWrapper;