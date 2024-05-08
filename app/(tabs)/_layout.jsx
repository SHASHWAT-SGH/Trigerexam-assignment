import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { colorScheme1 } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
export default TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme1.mode2,
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: fonts.font_600,
          fontSize: hp(1.45),
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="food"
        options={{
          title: "Food",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="shopping-bag" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
