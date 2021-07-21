import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/colors/colors';

const Popular = ({popularData, navigation}) => {
  return (
    <View style={styles.popularWrapper}>
      <Text style={styles.popularTitle}>Popular</Text>
      {popularData.map(item => (
        <TouchableOpacity
          activeOpacity={0.9}
          key={item.id}
          onPress={() => navigation.navigate('Details', {item})}>
          <View
            style={[
              styles.popularCardWrapper,
              {marginTop: item.id === 1 ? 10 : 20},
            ]}>
            <View>
              <View>
                <View style={styles.popularTopWrapper}>
                  <MaterialCommunityIcons
                    name="crown"
                    size={12}
                    color={colors.primary}
                  />
                  <Text style={styles.popularTopText}>Top of the week</Text>
                </View>
                <View style={styles.popularTitlesWrapper}>
                  <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                  <Text style={styles.popularTitlesWeight}>
                    Weight {item.weight}
                  </Text>
                </View>
              </View>
              <View style={styles.popularCardBottom}>
                <View style={styles.addPizzaButton}>
                  <Feather name="plus" size={10} color={colors.textDark} />
                </View>
                <View style={styles.ratingWrapper}>
                  <MaterialCommunityIcons
                    name="star"
                    size={8}
                    color={colors.textDark}
                  />
                  <Text style={styles.rating}>{item.rating}</Text>
                </View>
              </View>
            </View>
            <View style={styles.popularCardRight}>
              <Image source={item.image} style={styles.popularCardImage} />
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({
  popularWrapper: {paddingHorizontal: 20, marginBottom: 20},
  popularTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  popularCardWrapper: {
    flexDirection: 'row',
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: colors.white,
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textDark,
  },
  popularTitlesWeight: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: colors.textLight,
    marginTop: 10,
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 20,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});
