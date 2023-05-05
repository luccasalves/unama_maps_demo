import HomeScreen from "../screens/Home";
import ContactsScreen from "../screens/Contacts";
import { useTheme } from "native-base";
import GalleryScreen from "../screens/Gallery";
import Icons from "@expo/vector-icons/AntDesign";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

export default function AppRouterTabs() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      activeColor="#f0edf6"
      inactiveColor={theme.colors.emerald[300]}
      barStyle={{ backgroundColor: theme.colors.emerald[600] }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => {
            return (
              <Icons
                name="home"
                color={
                  props.focused ? theme.colors.black : theme.colors.emerald[300]
                }
                size={24}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Contatos"
        component={ContactsScreen}
        options={{
          tabBarIcon: (props) => {
            return (
              <Icons
                name="contacts"
                color={
                  props.focused ? theme.colors.black : theme.colors.emerald[300]
                }
                size={24}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Galeria"
        component={GalleryScreen}
        options={{
          tabBarIcon: (props) => {
            return (
              <Icons
                name="bars"
                color={
                  props.focused ? theme.colors.black : theme.colors.emerald[300]
                }
                size={24}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
