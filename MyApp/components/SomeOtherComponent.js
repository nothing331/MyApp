import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SomeOtherComponent = () => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate('ProfileScreen', {
      name: 'John Doe',
      email: 'johndoe@example.com',
      profilePic: 'https://example.com/profilepic.jpg'
    });
  };

  return (
    <Button title="Go to profile" onPress={handleProfilePress} />
  );
};

export default SomeOtherComponent;
