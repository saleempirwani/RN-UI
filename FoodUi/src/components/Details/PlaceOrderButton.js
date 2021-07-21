import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors/colors';

const PlaceOrderButton = () => {
  return (
    <TouchableOpacity
      onPress={() => alert('Congrats! Your Order has been Placed.')}
      style={styles.orderWrapper}>
      <Text style={styles.orderText}>Place an order</Text>
      <Feather name="chevron-right" size={18} color={colors.textDark} />
    </TouchableOpacity>
  );
};

export default PlaceOrderButton;

const styles = StyleSheet.create({
  orderWrapper: {
    marginTop: 60,
    marginBottom: 30,
    marginHorizontal: 20,
    borderRadius: 50,
    paddingVertical: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  orderText: {
    color: colors.textDark,
    marginRight: 10,
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
});
