import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import { fonts } from "../../constants/fonts";
import { colorScheme1 } from "../../constants/colors";

const MenuItemCard = ({ image, title, subTitle, rating, money, time }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.left}>
        <Image
          source={
            "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
          }
          style={styles.image}
        />
      </View>
      <View style={styles.right}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.subTitle}>
          <Text style={styles.subTitleText}>{subTitle}</Text>
        </View>
        <View style={styles.description}>
          <View style={styles.descItem}>
            <Text style={styles.descItemText}>{rating}/5</Text>
          </View>
          <View style={styles.descItem}>
            <Text style={styles.descItemText}>${money}</Text>
          </View>
          <View style={styles.descItem}>
            <Text style={styles.descItemText}>{time} min</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItemCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorScheme1.mode4,
    flexDirection: "row",
    gap: wp(3),
    borderRadius: hp(1.2),
  },
  image: {
    width: wp(25),
    height: wp(25),
    borderRadius: wp(2),
  },
  left: {
    padding: wp(1.2),
  },
  right: {
    justifyContent: "space-around",
  },
  description: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "red",
    width: wp(60),
  },
  titleText: {
    fontFamily: fonts.font_500,
    fontSize: hp(2),
  },
  subTitleText: {
    fontFamily: fonts.font_400,
    fontSize: hp(1.8),
  },
  descItemText: {
    fontFamily: fonts.font_300,
    fontSize: hp(1.8),
  },
});
