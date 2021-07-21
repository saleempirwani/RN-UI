import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import colors from '../../assets/colors/colors';
import activitiesData from '../../data/activitiesData';

const Activities = () => {
  return (
    <View style={styles.activitiesWrapper}>
      <Text style={styles.activitiesTitle}>Activities</Text>
      <View style={styles.activitiesItemWrapper}>
        <FlatList
          data={activitiesData}
          keyExtractor={item => item.id}
          renderItem={renderActivityItems}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const renderActivityItems = ({item}) => {
  return (
    <View
      style={[
        styles.activityItems,
        {marginLeft: item.id === 'activities-1' ? 20 : 0},
      ]}>
      <Image source={item.image} style={styles.activityItemsImage} />
      <Text style={styles.activityItemsText}>{item.title}</Text>
    </View>
  );
};

export default Activities;

const styles = StyleSheet.create({
  activitiesWrapper: {marginTop: 10},
  activitiesTitle: {
    marginHorizontal: 20,
    color: colors.black,
    fontSize: 24,
    fontFamily: 'Lato-Bold',
  },
  activitiesItemWrapper: {
    paddingVertical: 20,
  },
  activityItems: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 30,
  },
  activityItemsImage: {width: 36},
  activityItemsText: {
    marginTop: 15,
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    color: colors.gray,
  },
});
