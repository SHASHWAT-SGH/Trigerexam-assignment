import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colorScheme1 } from "../../constants/colors";

const Search = () => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={20} color="black" />
      <Text>Search all restaurants</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    gap: wp(2),
    alignItems: "center",
    backgroundColor: colorScheme1.mode2,
    borderRadius: hp(0.6),
  },
});
