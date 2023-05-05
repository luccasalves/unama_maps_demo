import { Box, Button, Text, Image } from "native-base";
import React from "react";
import { View } from "react-native";
import { PageView } from "../components/PageView";

const HomeScreen: React.FC = () => {
  return (
    <View>
      <Image source={require("../../assets/map_base.png")} alt="mapa" />
    </View>
  );
};

export default HomeScreen;
