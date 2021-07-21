import React, {useState} from 'react';
import {View, Text} from 'react-native';
import OnboardScreen from './src/screens/OnboardScreen';

const Home = () => (
  <View>
    <Text>Home</Text>
  </View>
);

const App = () => {
  const [showOnboard, setShowOnboard] = useState('true');

  return (
    <>
      {showOnboard && <OnboardScreen setShowOnboard={setShowOnboard} />}
      {!showOnboard && <Home />}
    </>
  );
};

export default App;
