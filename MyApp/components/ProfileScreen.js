import React from 'react';
import { View, Text, Image } from 'react-native';

const ProfileScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    <View>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  );
};

export default ProfileScreen;