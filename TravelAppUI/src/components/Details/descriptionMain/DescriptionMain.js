import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../../assets/colors/colors';
import Info from './Info';

const DescriptionMain = ({item}) => {
  return (
    <View style={styles.descriptionWrapper}>
      <View style={styles.heartWrapper}>
        <Entypo name="heart" size={32} color={colors.orange} />
      </View>

      <View style={styles.descriptionTextWrapper}>
        <Text style={styles.descriptionTextTitle}>Description</Text>
        <Text style={styles.descriptionTextPara}>{item.description}</Text>
      </View>

      <Info item={item} />

      <TouchableOpacity
        onPress={() => alert('Congrats! You book a trip.')}
        activeOpacity={0.9}
        style={styles.bookButtonWrapper}>
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DescriptionMain;

const styles = StyleSheet.create({
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderRadius: 25,
  },

  heartWrapper: {
    position: 'absolute',
    right: 40,
    top: -30,
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 64,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  descriptionTextWrapper: {marginTop: 30, marginHorizontal: 20},
  descriptionTextTitle: {
    color: colors.black,
    fontSize: 24,
    fontFamily: 'Lato-Bold',
  },
  descriptionTextPara: {
    marginTop: 20,
    color: colors.darkGray,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    textAlign: 'justify',
  },
  bookButtonWrapper: {
    marginTop: 40,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: colors.orange,
    alignItems: 'center',
  },
  bookButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Lato-Bold',
  },
});
