import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Text,
  SafeAreaView,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../assets/colors/colors';

const height = Dimensions.get('window').height;

const BackgroundImage = ({navigation, item}) => {
  return (
    <ImageBackground source={item.imageBig} style={styles.backgroundImage}>
      <SafeAreaView>
        <View style={styles.goBackButton}>
          <Entypo
            name="chevron-left"
            size={28}
            color={colors.white}
            onPress={() => navigation.goBack()}
          />
        </View>
      </SafeAreaView>
      <View style={styles.titlesWrapper}>
        <Text style={styles.titlesText}>{item.title}</Text>
        <View style={styles.locationWrapper}>
          <Entypo name="location-pin" size={24} color={colors.white} />
          <Text style={styles.locationText}>{item.location}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default BackgroundImage;

const styles = StyleSheet.create({
  backgroundImage: {
    height: height * 0.52,
    justifyContent: 'space-between',
  },
  goBackButton: {
    marginTop: 30,
    marginLeft: 20,
    width: 28,
    height: 28,
  },
  titlesWrapper: {marginLeft: 20, marginBottom: 40},
  titlesText: {color: colors.white, fontSize: 32, fontFamily: 'Lato-Bold'},
  locationWrapper: {flexDirection: 'row', marginTop: 5},
  locationText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Lato-Bold',
  },
});
