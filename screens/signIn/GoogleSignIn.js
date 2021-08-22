import React from "react";
import { StyleSheet, View, Button } from "react-native";
import * as Google from "expo-google-app-auth";

const GoogleSignIn = ({ navigation }) => {
  const signInAsync = async () => {
    console.log("LoginScreen.js 6 | loggin in");
    try {
      const { type, user } = await Google.logInAsync({
        iosClientId: `<YOUR_IOS_CLIENT_ID>`,
        androidClientId: `<YOUR_ANDROID_CLIENT_ID>`,
      });

      if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to profile");
        navigation.navigate("Profile", { user });
      }
    } catch (error) {
      console.log("LoginScreen.js 19 | error with login", error);
    }
  };

  return (
    <View style={{marginTop:40}}>
      <Button title="Login with Google" onPress={signInAsync} />
    </View>
  );
};

export default GoogleSignIn;

const styles = StyleSheet.create({});