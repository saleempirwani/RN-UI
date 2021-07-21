import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Header from '../components/Home/Header';
import Discover from '../components/Home/Discover';
import Activities from '../components/Home/Activities';
import LearnMore from '../components/Home/LearnMore';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Discover navigation={navigation} />
        <Activities />
        <LearnMore />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default HomeScreen;
