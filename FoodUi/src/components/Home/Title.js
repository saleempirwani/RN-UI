import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../assets/colors/colors';

const Title = () => {
  return (
    <View style={styles.titlesWrapper}>
      <Text style={styles.titlesSubTitle}>Food</Text>
      <Text style={styles.titlesTitle}>Delivery</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubtitle: {
    fontSize: 16,
    color: colors.textDark,
    fontFamily: 'Montserrat-Regular',
  },
  titlesTitle: {
    marginTop: 5,
    fontSize: 32,
    color: colors.textDark,
    fontFamily: 'Montserrat-Bold',
  },
});
