import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Constant
import Constants from 'expo-constants';

// Component LifeCycle
import LifeCycle from './components/LifeCycle'

// Functional Component
import FunctionalComponent from './components/FunctionalComponent'

// Props Dinamis
import PropsDinamis from './components/PropsDinamis'

// Random Latihan
import { ToggleButton } from './components/RandomLatihan'

// Slider Up
import SliderUp from './components/SliderUp'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FunctionalComponent /> */}
      {/* <LifeCycle /> */}
      {/* <PropsDinamis /> */}
      {/* <ToggleButton /> */}

      <SliderUp />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
});
