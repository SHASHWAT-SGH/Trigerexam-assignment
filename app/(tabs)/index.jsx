import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Search from "../../components/Home/Search";
import CousineFlatList from "../../components/Home/CousineFlatList";
import MenuItemCard from "../../components/Home/MenuItemCard";
import LocationDropDown from "../../components/Home/LocationDropDown";
import { colorScheme1 } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import { useState } from "react";

const dataForTab1 = [
  {
    id: 1,
    image: "",
    title: "Domino's",
    subTitle: "Pizza",
    rating: "4.5",
    money: "5",
    time: "35",
  },
  {
    id: 2,
    image: "",
    title: "Crispy Corn",
    subTitle: "Corn",
    rating: "5",
    money: "2",
    time: "15",
  },
  {
    id: 3,
    image: "",
    title: "Burger King",
    subTitle: "Burger",
    rating: "4.2",
    money: "4",
    time: "25",
  },
  {
    id: 4,
    image: "",
    title: "KFC",
    subTitle: "Chicken",
    rating: "4.3",
    money: "5",
    time: "30",
  },
  {
    id: 5,
    image: "",
    title: "Subway",
    subTitle: "Sandwich",
    rating: "4.5",
    money: "4",
    time: "20",
  },
  {
    id: 6,
    image: "",
    title: "Starbucks",
    subTitle: "Coffee",
    rating: "4.7",
    money: "3",
    time: "15",
  },
  {
    id: 7,
    image: "",
    title: "McDonald's",
    subTitle: "Burger",
    rating: "4.0",
    money: "4",
    time: "25",
  },
  {
    id: 8,
    image: "",
    title: "Taco Bell",
    subTitle: "Taco",
    rating: "4.1",
    money: "3",
    time: "20",
  },
  {
    id: 9,
    image: "",
    title: "Papa John's",
    subTitle: "Pizza",
    rating: "4.4",
    money: "5",
    time: "30",
  },
  {
    id: 10,
    image: "",
    title: "Dunkin' Donuts",
    subTitle: "Donuts",
    rating: "4.3",
    money: "2",
    time: "15",
  },
  {
    id: 11,
    image: "",
    title: "Sushi Express",
    subTitle: "Sushi",
    rating: "4.6",
    money: "5",
    time: "40",
  },
  {
    id: 12,
    image: "",
    title: "Pasta House",
    subTitle: "Pasta",
    rating: "4.5",
    money: "4",
    time: "30",
  },
];

const dataForTab2 = [
  {
    id: 3,
    image: "",
    title: "Burger King",
    subTitle: "Burger",
    rating: "4.2",
    money: "4",
    time: "25",
  },
  {
    id: 4,
    image: "",
    title: "KFC",
    subTitle: "Chicken",
    rating: "4.3",
    money: "5",
    time: "30",
  },
  {
    id: 5,
    image: "",
    title: "Subway",
    subTitle: "Sandwich",
    rating: "4.5",
    money: "4",
    time: "20",
  },
  {
    id: 10,
    image: "",
    title: "Dunkin' Donuts",
    subTitle: "Donuts",
    rating: "4.3",
    money: "2",
    time: "15",
  },
  {
    id: 11,
    image: "",
    title: "Sushi Express",
    subTitle: "Sushi",
    rating: "4.6",
    money: "5",
    time: "40",
  },
  {
    id: 12,
    image: "",
    title: "Pasta House",
    subTitle: "Pasta",
    rating: "4.5",
    money: "4",
    time: "30",
  },
];

export default Tab = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <SafeAreaView style={styles.container}>
      {/* Location View */}
      <View>
        <View style={styles.locationWrapper}>
          <LocationDropDown />
        </View>
      </View>
      {/* Main Window */}
      <View style={{ flex: 1 }}>
        <View
          style={{
            marginTop: wp(8),
            alignItems: "center",
            paddingHorizontal: wp(5),
          }}
        >
          <Search />
        </View>
        {/* Cousine */}
        <View style={{ marginTop: wp(5) }}>
          <CousineFlatList />
        </View>
        {/* Tabs */}
        <View style={{ marginTop: wp(6), flexDirection: "row", gap: wp(4) }}>
          <View>
            <TouchableOpacity
              onPress={() => {
                setActiveTab("tab1");
              }}
            >
              <Text style={styles.text}>Recomended</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setActiveTab("tab2");
              }}
            >
              <Text style={styles.text}>Popular</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Tab Display Section */}
        <ScrollView
          style={styles.tabDisplaySection}
          showsVerticalScrollIndicator={false}
        >
          {activeTab == "tab1" ? (
            <View style={{ flex: 1, gap: wp(2) }}>
              {dataForTab1.map((item) => {
                return (
                  <MenuItemCard
                    key={item.id}
                    title={item.title}
                    subTitle={item.subTitle}
                    rating={item.rating}
                    money={item.money}
                    time={item.time}
                  />
                );
              })}
            </View>
          ) : (
            <View style={{ flex: 1, gap: wp(2) }}>
              {dataForTab2.map((item) => {
                return (
                  <MenuItemCard
                    key={item.id}
                    title={item.title}
                    subTitle={item.subTitle}
                    rating={item.rating}
                    money={item.money}
                    time={item.time}
                  />
                );
              })}
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: hp(1.5),
    paddingTop: hp(0.5),
    backgroundColor: colorScheme1.mode5,
  },
  locationWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: wp(1),
    paddingHorizontal: wp(25),
    // backgroundColor: "red",
  },

  tabDisplaySection: {
    flex: 1,
    marginTop: wp(6),
  },
  text: {
    fontFamily: fonts.font_500,
    fontSize: hp(2),
  },
});
