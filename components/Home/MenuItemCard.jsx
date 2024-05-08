import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";

const MenuItemCard = () => {
  return (
    <View style={styles.container}>
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
          <Text>Domino Pizza</Text>
        </View>
        <View style={styles.subTitle}>
          <Text>Pizza</Text>
        </View>
        <View style={styles.description}>
          <View style={styles.descItem}>
            <Text>4.5/5</Text>
          </View>
          <View style={styles.descItem}>
            <Text>$5</Text>
          </View>
          <View style={styles.descItem}>
            <Text>35 min</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MenuItemCard;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    flexDirection: "row",
    gap: wp(3),
  },
  image: {
    width: wp(25),
    height: wp(25),
    borderRadius: wp(2),
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
});
