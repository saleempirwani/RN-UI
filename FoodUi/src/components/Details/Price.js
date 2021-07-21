import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../assets/colors/colors';

const Price = ({item}) => {
  return (
    <View style={styles.priceWrapper}>
      <Text style={styles.price}>${item.price}</Text>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  priceWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  price: {
    color: colors.price,
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
  },
});
