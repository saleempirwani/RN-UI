import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colors from '../../../assets/colors/colors';

const Info = ({item}) => {
  return (
    <View style={styles.infoWrapper}>
      <View style={styles.infoItem}>
        <Text style={styles.infoItemTitle}>Price</Text>
        <View style={styles.infoItemTextWrapper}>
          <Text style={styles.infoItemTextTitle}>${item.price}</Text>
          <Text style={styles.infoItemTextSubTitle}>/person</Text>
        </View>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoItemTitle}>Rating</Text>
        <View style={styles.infoItemTextWrapper}>
          <Text style={styles.infoItemTextTitle}>${item.rating}</Text>
          <Text style={styles.infoItemTextSubTitle}>/5</Text>
        </View>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoItemTitle}>Duration</Text>
        <View style={styles.infoItemTextWrapper}>
          <Text style={styles.infoItemTextTitle}>${item.duration}</Text>
          <Text style={styles.infoItemTextSubTitle}>/hours</Text>
        </View>
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  infoItem: {},
  infoItemTitle: {
    color: colors.darkGray,
    fontSize: 12,
    fontFamily: 'Lato-Bold',
    textTransform: 'uppercase',
  },
  infoItemTextWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  infoItemTextTitle: {
    color: colors.orange,
    fontSize: 24,
    fontFamily: 'Lato-Bold',
  },
  infoItemTextSubTitle: {
    color: colors.gray,
    fontSize: 14,
    fontFamily: 'Lato-Bold',
  },
});
