import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import colors from '../../assets/colors/colors';

const IngredientList = ({item}) => {
  return (
    <View style={styles.ingredientWrapper}>
      <Text style={styles.ingredientTitle}>Ingredients</Text>
      <View style={styles.ingredientListWrapper}>
        <FlatList
          horizontal
          data={item.ingredients}
          keyExtractor={key => key.id}
          renderItem={renderCategoryItem}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const renderCategoryItem = ({item}) => {
  return (
    <View
      style={[
        styles.ingredientItemWrapper,
        {marginLeft: item.id === '1' ? 20 : 0},
      ]}>
      <Image source={item.image} style={styles.ingredientImage} />
    </View>
  );
};

export default IngredientList;

const styles = StyleSheet.create({
  ingredientWrapper: {
    marginTop: 40,
  },
  ingredientTitle: {
    paddingHorizontal: 20,
    color: colors.textDark,
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  ingredientListWrapper: {
    paddingVertical: 20,
  },
  ingredientItemWrapper: {
    paddingHorizontal: 20,
    marginRight: 15,
    borderRadius: 15,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientImage: {
    resizeMode: 'contain',
  },
});
