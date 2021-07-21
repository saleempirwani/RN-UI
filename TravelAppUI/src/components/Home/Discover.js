import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../assets/colors/colors';
import discoverData from '../../data/discoverData';

const Discover = ({navigation}) => {
  const renderDiscoverItems = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate('Details', {item})}>
        <ImageBackground
          source={item.image}
          style={[
            styles.discoverItem,
            {marginLeft: item.id === 'discover-1' ? 20 : 0},
          ]}
          imageStyle={styles.discoverItemImage}>
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.discoverItemLocationTitle}>
              {item.location}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.discoverWrapper}>
      <Text style={styles.discoverTitle}>Discover</Text>
      <View style={styles.discoverCategoriesWrapper}>
        <Text style={[styles.discoverCategoriesText, {color: colors.orange}]}>
          All
        </Text>
        <Text style={styles.discoverCategoriesText}>Destinations</Text>
        <Text style={styles.discoverCategoriesText}>Cities</Text>
        <Text style={styles.discoverCategoriesText}>Experiences</Text>
      </View>
      <View style={styles.discoverItemWrapper}>
        <FlatList
          data={discoverData}
          keyExtractor={item => item.id}
          renderItem={renderDiscoverItems}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  discoverWrapper: {marginTop: 20},
  discoverTitle: {
    marginHorizontal: 20,
    color: colors.black,
    fontSize: 32,
    fontFamily: 'Lato-Bold',
  },
  discoverCategoriesWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  discoverCategoriesText: {
    color: colors.darkGray,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
  },
  discoverItemWrapper: {paddingVertical: 20},
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginRight: 20,
  },
  discoverItemImage: {borderRadius: 20},
  discoverItemTitle: {
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Lato-Bold',
  },
  discoverItemLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discoverItemLocationTitle: {
    color: colors.white,
    marginLeft: 5,
    fontSize: 14,
    fontFamily: 'Lato-Bold',
  },
});
