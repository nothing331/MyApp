import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  function handleDarkModeSwitch(value) {
    setDarkMode(value);
  }

  function handleNotificationsSwitch(value) {
    setNotifications(value);
  }

  return (
    <View>
      <Text>Settings</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Switch value={darkMode} onValueChange={handleDarkModeSwitch} />
        <Text style={{ marginLeft: 10 }}>Dark Mode</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Switch value={notifications} onValueChange={handleNotificationsSwitch} />
        <Text style={{ marginLeft: 10 }}>Notifications</Text>
      </View>
    </View>
  );
}

