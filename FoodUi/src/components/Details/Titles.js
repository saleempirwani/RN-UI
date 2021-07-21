import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../assets/colors/colors';

const Titles = ({item}) => {
  return (
    <View style={styles.titlesWrapper}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

export default Titles;

const styles = StyleSheet.create({
  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    width: '50%',
    color: colors.textDark,
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
  },
});
