import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import Search from "../../components/Home/Search";
import CousineFlatList from "../../components/Home/CousineFlatList";
import MenuItemCard from "../../components/Home/MenuItemCard";

export default Tab = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Location View */}
      <View>
        <View style={styles.locationWrapper}>
          <Text>1214 Hollywood Ht.</Text>
          <View style={styles.iconContainer}>
            <AntDesign name="down" size={12} color="black" />
          </View>
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
        <View style={{ marginTop: wp(8) }}>
          <CousineFlatList />
        </View>
        {/* Tabs */}
        <View style={{ marginTop: wp(6), flexDirection: "row", gap: wp(4) }}>
          <View>
            <Text>Recomended</Text>
          </View>
          <View>
            <Text>Popular</Text>
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
    paddingHorizontal: hp(1.2),
    paddingTop: hp(0.5),
  },
  locationWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
    marginLeft: wp(2),
  },
  tabDisplaySection: {
    flex: 1,
    marginTop: wp(6),
  },
});
