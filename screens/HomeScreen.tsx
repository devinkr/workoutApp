import React from 'react';
import {Text, View, Button} from 'react-native';

export default function HomeScreen({navigation}: any) {
  return (
    <View>
      <Text>I am a home screen</Text>
      <Button
        title="Go to Planner"
        onPress={() => navigation.push('Planner')}
      />
    </View>
  );
}
