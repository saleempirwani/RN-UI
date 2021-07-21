import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import colors from '../../assets/colors/colors';

const PizzaInfo = ({item}) => {
  return (
    <View style={styles.infoWrapper}>
      <View style={styles.infoLeft}>
        <View style={styles.infoItem}>
          <Text style={styles.infoItemTitle}>Size</Text>
          <Text style={styles.infoItemText}>
            {item.sizeName} {item.sizeNumber}"
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoItemTitle}>Crust</Text>
          <Text style={styles.infoItemText}>{item.crust}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoItemTitle}>Delivery in</Text>
          <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
        </View>
      </View>
      <View>
        <Image source={item.image} style={styles.infoItemImage} />
      </View>
    </View>
  );
};

export default PizzaInfo;

const styles = StyleSheet.create({
  infoWrapper: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLeft: {
    paddingLeft: 20,
  },
  infoItem: {
    marginBottom: 20,
  },
  infoItemTitle: {
    color: colors.textLight,
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  },
  infoItemText: {
    color: colors.textDark,
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
  },
  infoItemImage: {
    resizeMode: 'contain',
    marginLeft: 50,
  },
});
