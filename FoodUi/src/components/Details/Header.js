import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/colors/colors';

const Header = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.headerWrapper}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.goBack()}
          style={styles.headerLeft}>
          <Feather name="chevron-left" size={12} color={colors.textDark} />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <MaterialCommunityIcons name="star" size={12} color={colors.white} />
        </View>
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
  headerLeft: {
    padding: 12,
    borderWidth: 2,
    borderColor: colors.textLight,
    borderRadius: 10,
  },
  headerRight: {
    padding: 12,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
});
