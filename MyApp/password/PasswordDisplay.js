// PasswordDisplay.js

import React from 'react';
import { View, Text } from 'react-native';

function PasswordDisplay({ password }) {
  return (
    <View>
      <Text>Generated password:</Text>
      <Text>{password}</Text>
    </View>
  );
}

export default PasswordDisplay;
