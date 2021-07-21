import React from 'react';
import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../assets/colors/colors';

const data = [
  {
    title: 'Save time by tracking your studies',
    text: 'Schedule your classes, assignments, quizzes and more',
    image: require('..//assets/images/Onboard1.png'),
  },
  {
    title: 'Stay on top of your education',
    text: 'Reduce your stress, increase your productivity',
    image: require('..//assets/images/Onboard2.png'),
  },
  {
    title: 'Spend more time doing the things you love',
    text: 'Get started within five minutes',
    image: require('..//assets/images/Onboard3.png'),
  },
];

const OnBoard = ({setShowOnboard}) => {
  const renderDoneButton = () => (
    <LinearGradient
      colors={['#A5C8FF', '#23286B']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.doneButtonWrapper}>
      <Text style={styles.doneButtonText}>Done</Text>
    </LinearGradient>
  );
  const renderNextButton = () => (
    <View style={[styles.buttonTextWrapper, {marginRight: 20}]}>
      <Text style={styles.buttonText}>Next</Text>
    </View>
  );
  const renderPrevButton = () => (
    <View style={[styles.buttonTextWrapper, {marginLeft: 20}]}>
      <Text style={styles.buttonText}>Prev</Text>
    </View>
  );

  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={item => item.title}
        renderItem={renderItem}
        data={data}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        onDone={() => setShowOnboard(false)}
      />
    </View>
  );
};

export default OnBoard;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  image: {
    marginVertical: 60,
  },
  title: {
    color: colors.black,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
    marginHorizontal: 50,
  },
  text: {
    color: colors.gray,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    marginHorizontal: 50,
    marginTop: 20,
  },
  buttonTextWrapper: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.blue,
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
  },
  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: -40,
  },
  doneButtonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
  },
  dotStyle: {backgroundColor: colors.blueFaded},
  activeDotStyle: {backgroundColor: colors.blue},
});
