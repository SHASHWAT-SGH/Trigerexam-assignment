import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { fonts } from "../../constants/fonts";

const data = [
  {
    id: "1",
    title: "Pizza",
    image: require("../../assets/Cousine images/pizza.jpeg"),
  },
  {
    id: "2",
    title: "Burger",
    image: require("../../assets/Cousine images/burger.jpg"),
  },
  {
    id: "3",
    title: "Noodles",
    image: require("../../assets/Cousine images/noodles.jpg"),
  },
  {
    id: "4",
    title: "Tacco",
    image: require("../../assets/Cousine images/tacco.jpeg"),
  },
  {
    id: "5",
    title: "Momos",
    image: require("../../assets/Cousine images/momos.jpg"),
  },
];

const CousineFlatList = () => {
  return (
    <>
      <FlatList
        horizontal={true}
        data={data}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Image
              style={styles.image}
              source={item.image}
              contentFit="cover"
              transition={500}
            />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default CousineFlatList;

const styles = StyleSheet.create({
  item: {
    // backgroundColor: "red",
    padding: wp(4),
    marginVertical: wp(3),
    marginRight: wp(5),
    gap: wp(1),
  },
  image: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(20),
  },
  title: {
    fontFamily: fonts.font_500,
    fontSize: hp(1.8),
    textAlign: "center",
  },
});
