import React from 'react';
import {StyleSheet, Text, View, FlatList, ImageBackground} from 'react-native';
import colors from '../../assets/colors/colors';
import learnMoreData from '../../data/learnMoreData';

const LearnMore = () => {
  const renderLearnMoreItems = ({item}) => {
    return (
      <ImageBackground
        source={item.image}
        style={[
          styles.learnMoreItem,
          {marginLeft: item.id === 'learnMore-1' ? 20 : 0},
        ]}
        imageStyle={styles.learnMoreItemImage}>
        <Text style={styles.learnMoreItemTitle}>{item.title}</Text>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.learnMoreWrapper}>
      <Text style={styles.learnMoreTitle}>Learn More</Text>
      <View style={styles.learnMoreItemWrapper}>
        <FlatList
          data={learnMoreData}
          keyExtractor={item => item.id}
          renderItem={renderLearnMoreItems}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default LearnMore;

const styles = StyleSheet.create({
  learnMoreWrapper: {
    marginTop: 10,
  },
  learnMoreTitle: {
    color: colors.black,
    marginHorizontal: 20,
    fontSize: 24,
    fontFamily: 'Lato-Bold',
  },
  learnMoreItemWrapper: {paddingVertical: 20},
  learnMoreItem: {
    width: 170,
    height: 180,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
  },
  learnMoreItemImage: {borderRadius: 20},
  learnMoreItemTitle: {
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 20,
    fontSize: 18,
    fontFamily: 'Lato-Bold',
  },
});
