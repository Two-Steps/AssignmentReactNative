import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Screen/Login";
import Flickr from "./Screen/Flickr";
import SignIn from "./Screen/SignIn";
import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";
import * as FileSystem from "expo-file-system";

// https://live.staticflickr.com/65535/50403246157_4e0eb9d790_z.jpg
export default function SaveImage({ route }) {
  const { data } = route.params;
  console.log(data);
  let _downloadFile = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status === "granted") {
      const fileUri = FileSystem.documentDirectory + "aaa.jpg";
      FileSystem.downloadAsync(data, fileUri).then(({ uri }) => {
        console.log("Finished downloading to ", uri);
        MediaLibrary.createAssetAsync(fileUri);
      });
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={{ flex: 0.95, width: "100%", height: "100%" }}
        source={{ uri: data }}
      />
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => {
            _downloadFile();
          }}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={require("./Image/ic_d.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
  },
});
