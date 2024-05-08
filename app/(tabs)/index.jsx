import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
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

export default Tab = () => {
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
            <Text style={styles.text}>Recomended</Text>
          </View>
          <View>
            <Text style={styles.text}>Popular</Text>
          </View>
        </View>
        {/* Tab Display Section */}
        <ScrollView
          style={styles.tabDisplaySection}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flex: 1, gap: wp(2) }}>
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
          </View>
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
