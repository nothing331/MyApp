import React from 'react';
import { View, Text } from 'react-native';
import { Switch } from './Switch';

export const SettingsForm = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  return (
    <View>
      <Text>Dark Mode</Text>
      <Switch
        value={darkModeEnabled}
        onValueChange={handleDarkModeToggle}
      />
    </View>
  );
};
export default SettingsForm;