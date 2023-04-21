import React from 'react';
import {Text, View, Button} from 'react-native';

export default function PlannerScreen({navigation}: any) {
  return (
    <View>
      <Text>I am a planner screen</Text>
      <Button title="Go to Home" onPress={() => navigation.push('Home')} />
    </View>
  );
}
