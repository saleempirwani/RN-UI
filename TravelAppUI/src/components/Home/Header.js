import React from 'react';
import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors/colors';
import profile from '../../assets/images/person.png';

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerWrapper}>
        <Feather
          name="menu"
          size={32}
          color={colors.black}
          style={styles.headerIcon}
        />
        <Image source={profile} style={styles.headerProfileImage} />
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerProfileImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
});
