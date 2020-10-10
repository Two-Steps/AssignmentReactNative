import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList, Button } from "react-native";

export default function Flickr() {
  const favorites =
    "https://www.flickr.com/services/rest/?method=flickr.favorites.getList&api_key=07ad9c0bb5463e6af93b86251e755f77&user_id=190430470%40N02&extras=id%2C+url_z&per_page=10&page=1&format=json&nojsoncallback=1";
  const myPhotos =
    "https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=b3e3c573b2072587226c9efeed90f39e&user_id=190430470%40N02&extras=views%2C+url_z&format=json&nojsoncallback=1";
  const [arr, setArr] = useState([]);
  const [color1, setColor1] = useState("#53c29f");
  const [color2, setColor2] = useState("#53c29f");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.vButton}>
        <View>
          <Button
            color={color1}
            title="my photos"
            onPress={() => {
              setColor1("#d027d6");
              setColor2("#53c29f");
              fetch(myPhotos)
                .then((response) => response.json())
                .then((responseJson) => {
                  setArr(responseJson.photos.photo);
                });
            }}
          />
        </View>
        <View>
          <Button
            color={color2}
            title="favorites"
            onPress={() => {
              setColor2("#d027d6");
              setColor1("#53c29f");
              fetch(favorites)
                .then((response) => response.json())
                .then((responseJson) => {
                  setArr(responseJson.photos.photo);
                });
            }}
          />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <FlatList
          numColumns={2}
          data={arr}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image
                style={{ width: 200, height: 150 }}
                source={{ uri: item.url_z }}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    padding: 3,
  },
  vButton: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 20,
    justifyContent: "space-around",
  },
});
