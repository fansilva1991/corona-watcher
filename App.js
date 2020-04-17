/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';

import CoronaProvider from './Provider';
import {context} from './Context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataContainer: {
    borderColor: '#D3D3D3',
    borderWidth: 1,
    padding: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  mainText: {
    fontSize: 32,
  },
  littleText: {
    fontSize: 16,
  },
  lastUpdateContainer: {marginHorizontal: 16, marginTop: 8},
  lastUpdateView: {
    flexDirection: 'row',
  },
  lastUpdateText1: {fontSize: 16, fontWeight: 'bold'},
  lastUpdateText2: {fontSize: 16, marginStart: 8},
  infectedContainer: {marginHorizontal: 16, flex: 1},
  infectedTextContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    justifyContent: 'space-between',
  },
  infectedStateText: {fontSize: 16, fontWeight: 'bold'},
  infectedScrollView: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginTop: 8,
  },
});

const App: () => React$Node = () => {
  const {Consumer} = context;
  console.log('Consumer', Consumer);
  return (
    <CoronaProvider>
      <StatusBar barStyle="dark-content" />
      <Consumer>
        {(value) => (
          <SafeAreaView style={styles.container}>
            <View style={styles.dataContainer}>
              {value && value.country && (
                <Text style={styles.mainText}>{value.infected}</Text>
              )}
              <Text style={styles.littleText}>Casos Confirmados</Text>
            </View>
            <View style={styles.dataContainer}>
              {value && value.country && (
                <Text style={styles.mainText}>{value.deceased}</Text>
              )}
              <Text style={styles.littleText}>Número de Mortos</Text>
            </View>
            {value && value.infectedByRegion && (
              <View style={styles.infectedContainer}>
                <Text style={styles.mainText}>Casos por região</Text>
                <ScrollView contentContainerStyle={styles.infectedScrollView}>
                  {value.infectedByRegion.map((region) => {
                    return (
                      <View style={styles.infectedTextContainer}>
                        <Text style={styles.infectedStateText}>
                          {region.state}
                        </Text>
                        <Text style={styles.littleText}>{region.count}</Text>
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            )}
            <View style={styles.lastUpdateContainer}>
              {value && value.lastUpdatedAtSource && (
                <View style={styles.lastUpdateView}>
                  <Text style={styles.lastUpdateText1}>Atualizado em:</Text>
                  <Text style={styles.lastUpdateText2}>
                    {value.lastUpdatedAtSource}
                  </Text>
                </View>
              )}
            </View>
          </SafeAreaView>
        )}
      </Consumer>
    </CoronaProvider>
  );
};

export default App;
