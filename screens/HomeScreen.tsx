import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import data from '../data.json';
import {Workout} from '../types/data';
import WorkoutItem from '../components/WorkoutItem';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Workouts</Text>
      <FlatList
        data={data as Array<Workout>}
        renderItem={WorkoutItem}
        keyExtractor={item => item.slug}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'Montserrat-Bold',
  },
});
