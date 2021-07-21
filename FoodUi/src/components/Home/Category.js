import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors/colors';

const Category = ({categoriesData}) => {
  const renderCategoryItem = ({item}) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {backgroundColor: item.selected ? colors.primary : colors.white},
        ]}>
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}> {item.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {backgroundColor: item.selected ? colors.white : colors.secondary},
          ]}>
          <Feather
            name="chevron-right"
            size={8}
            color={item.selected ? colors.black : colors.white}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.categoriesWrapper}>
      <Text style={styles.categoriesTitle}>Categories</Text>
      <View style={styles.categoriesListWrapper}>
        <FlatList
          horizontal
          data={categoriesData}
          keyExtractor={item => item.id}
          renderItem={renderCategoryItem}
        />
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoriesWrapper: {marginTop: 30},
  categoriesTitle: {
    paddingHorizontal: 20,
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 20,
  },
  categoryItemWrapper: {
    backgroundColor: '#f5ca48',
    marginRight: 20,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  },
  categorySelectWrapper: {
    marginTop: 20,
    marginBottom: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
