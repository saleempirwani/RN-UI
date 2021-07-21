import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import colors from '../assets/colors/colors';
import {Header, Title, Search, Category, Popular} from '../components/Home';
import categoriesData from '../data/categoriesData';
import popularData from '../data/popularData';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <Header />
        <Title />
        <Search />
        <Category categoriesData={categoriesData} />
        <Popular popularData={popularData} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default HomeScreen;
