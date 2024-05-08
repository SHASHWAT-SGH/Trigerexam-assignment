import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { colorScheme1 } from "../../constants/colors";

import { Searchbar } from "react-native-paper";
import { fonts } from "../../constants/fonts";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <Searchbar
      placeholder="Search all restaurants"
      onChangeText={setSearchQuery}
      value={searchQuery}
      inputStyle={{
        fontFamily: fonts.font_400,
        fontSize: hp(2.1),
        color: "black",
      }}
      style={
        {
          // fontFamily: fonts.font_700,
        }
      }
    />
  );
};

export default Search;

const styles = StyleSheet.create({});
