import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors/colors';

const Search = () => {
  return (
    <View style={styles.searchWrapper}>
      <Feather name="search" size={16} color={colors.textDark} />
      <View style={styles.searchView}>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          selectionColor={colors.textDark}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  searchView: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchInput: {
    color: colors.textDark,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    padding: 0,
    paddingBottom: 5,
  },
});
