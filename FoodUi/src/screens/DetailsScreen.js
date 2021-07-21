import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import colors from '../assets/colors/colors';
import {
  Header,
  Titles,
  Price,
  PizzaInfo,
  IngredientList,
  PlaceOrderButton,
} from '../components/Details';

const DetailsScreen = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header navigation={navigation} />
        <Titles item={item} />
        <Price item={item} />
        <PizzaInfo item={item} />
        <IngredientList item={item} />
        <PlaceOrderButton />
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
});
