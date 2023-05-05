import { NativeBaseProvider, StatusBar } from "native-base";
import HomeScreen from "./src/screens/Home";

import { NavigationContainer } from "@react-navigation/native";
import AppRouterTabs from "./src/config/AppRouterTab";

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
