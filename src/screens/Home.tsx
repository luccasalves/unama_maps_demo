import React from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import { StyleSheet } from "react-native";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -1.4388,
          longitude: -48.4788,
          latitudeDelta: 0.000199,
          longitudeDelta: 0.0009,
        }}
      />
      {/* <Image source={require("../../assets/map_base.png")} alt="mapa" /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
