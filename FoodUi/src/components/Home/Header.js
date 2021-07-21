import React from 'react';
import {StyleSheet, SafeAreaView, Image, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors/colors';

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerWrapper}>
        <Image
          source={require('../../assets/images/profile.png')}
          style={styles.profileImage}
        />
        <Feather name="menu" size={24} color={colors.textDark} />
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});
