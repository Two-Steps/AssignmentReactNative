import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Screen/Login";
import Flickr from "./Screen/Flickr";
import SignIn from "./Screen/SignIn";
import SaveImage from "./SaveImage";
import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login Page" }}
        />
        <Stack.Screen
          name="Flickr"
          component={Flickr}
          options={{ title: "Flickr Page" }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: "SignIn Page" }}
        />
        <Stack.Screen
          name="Save"
          component={SaveImage}
          options={{ title: "Image Detal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
