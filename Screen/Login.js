import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.mText}>WELCOME</Text>
      <View style={styles.vPhoto}>
        <Image
          source={require("../Image/photo-camera-with-flash.png")}
          style={styles.imgP}
        />
        <Text style={styles.txtPhoto}>Your Photo</Text>
      </View>
      <View style={styles.vInput}>
        <Image source={require("../Image/email.png")} style={styles.imgInput} />
        <TextInput
          style={{ color: "#fff", flex: 1 }}
          placeholder="E-mail address"
          placeholderTextColor="#ccc"
        />
      </View>
      <View style={styles.vInput}>
        <Image source={require("../Image/lock.png")} style={styles.imgInput} />
        <TextInput
          secureTextEntry
          style={{ color: "#fff", flex: 1 }}
          placeholder="Password"
          placeholderTextColor="#ccc"
        />
      </View>
      <View style={styles.btnSignIn}>
        <Button
          title="sign in"
          color="#53c29f"
          onPress={() => navigation.navigate("Flickr")}
        />
      </View>
      <View style={styles.vSignUp}>
        <Text style={styles.txt1}>Don't have an account? </Text>
        <Text
          style={styles.txt2}
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          Sing Up
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222226",
    alignItems: "center",
  },
  mText: {
    marginTop: 80,
    fontFamily: "tahoma",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  txtPhoto: {
    color: "#fff",
    fontFamily: "tahoma",
  },
  vPhoto: {
    marginTop: 80,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#fff",
    borderRadius: 80,
    borderWidth: 2,
    width: 120,
    height: 120,
    backgroundColor: "#4d4d54",
    marginBottom: 20,
  },
  imgP: { width: 50, height: 50 },
  imgInput: { width: 15, height: 15, marginRight: 8 },
  vInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4d4d54",
    padding: 5,
    marginTop: 10,
    width: 250,
    borderRadius: 10,
  },
  btnSignIn: {
    width: 250,
    marginTop: 20,
  },
  vSignUp: {
    flexDirection: "row",
    marginTop: 80,
  },
  txt1: {
    fontFamily: "tahoma",
    color: "#fff",
  },
  txt2: {
    fontFamily: "tahoma",
    color: "#53c29f",
  },
});
