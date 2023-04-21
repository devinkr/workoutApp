import React from 'react';
import {Text, View, Button} from 'react-native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack/lib/typescript/src/types';

export default function HomeScreen({navigation}: NativeStackHeaderProps) {
  return (
    <View>
      <Text>I am a home screen</Text>
      <Button
        title="Go to Planner"
        onPress={() => navigation.navigate('Planner')}
      />
    </View>
  );
}
