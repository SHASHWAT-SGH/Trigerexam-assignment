import { View, FlatList, StyleSheet, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    image: "../../assets/Cousine images/pizza.jpeg",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    image: "../../assets/Cousine images/pizza.jpeg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    image: "../../assets/Cousine images/pizza.jpeg",
  },
  {
    id: "58694a0f-3da1-471f-bd9-145571e29d72",
    title: "Third Item",
    image: "../../assets/Cousine images/pizza.jpeg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e2d72",
    title: "Third Item",
    image: "../../assets/Cousine images/pizza.jpeg",
  },
];

const Item = ({ title, image }) => (
  <View style={styles.item}>
    <Image
      style={styles.image}
      source={require("../../assets/Cousine images/pizza.jpeg")}
      contentFit="cover"
      transition={500}
    />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const CousineFlatList = () => {
  return (
    <>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default CousineFlatList;

const styles = StyleSheet.create({
  item: {
    // backgroundColor: "#f9c2ff",
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
});
