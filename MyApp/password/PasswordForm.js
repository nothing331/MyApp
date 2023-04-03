import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

function PasswordForm({ onGenerate }) {
  const [length, setLength] = useState('');
  const [complexity, setComplexity] = useState('');

  const handleGenerate = () => {
    onGenerate(length, complexity);
  };

  return (
    <View>
      <TextInput
        placeholder="Password length"
        value={length}
        onChangeText={setLength}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Password complexity"
        value={complexity}
        onChangeText={setComplexity}
      />
      <Button title="Generate password" onPress={handleGenerate} />
    </View>
  );
}

export default PasswordForm;
