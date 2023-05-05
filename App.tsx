import { NativeBaseProvider, StatusBar } from "native-base";

import { NavigationContainer } from "@react-navigation/native";
import AppRouterTabs from "./src/config/AppRouterTab";
import React from "react";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar backgroundColor={"#059669"} />
        <AppRouterTabs />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
