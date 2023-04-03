import React from 'react';
import { View, Text, Button } from 'react-native';
import useLocalStorage from './useLocalStorage';

function MyComponent() {
  const [count, setCount] = useLocalStorage('count', 0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={handleIncrement} />
      <Button title="Reset" onPress={handleReset} />
    </View>
  );
}

export default MyComponent;

