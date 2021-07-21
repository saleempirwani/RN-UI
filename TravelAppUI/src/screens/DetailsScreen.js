import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import BackgroundImage from '../components/Details/BackgroundImage';
import colors from '../assets/colors/colors';
import DescriptionMain from '../components/Details/descriptionMain/DescriptionMain';

const DetailsScreen = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <BackgroundImage navigation={navigation} item={item} />
        <DescriptionMain item={item} />
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
});
