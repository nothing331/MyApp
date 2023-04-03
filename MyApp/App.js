import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, Button} from 'react-native';
import  { useState , useEffect} from 'react';
import SomeOtherComponent from './components/SomeOtherComponent';
import ProfileScreen from './components/ProfileScreen';
import MyImagePicker from './components/MyImagePicker';
import SettingsScreen from './settings/SettingsScreen';
import generatePassword from './password/PasswordGenerator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PasswordDisplay from './password/PasswordDisplay';
import PasswordForm from './password/PasswordForm';
import getWeather from './components/Weather';
//import MyMap from './components/MyMap';
import MyButton from './components/MyButton';
import MyList from './components/MyList';



const Stack = createStackNavigator();

const App = () => {

  const [city, setCity] = useState('New York');
  const [temperature, setTemperature] = useState(null);
  const handlePress = () => {
    Alert.alert('Button Presses');
  }

  const items = [
    { id: 1, text: 'Ayush' },
    { id: 2, text: 'Aman' },
    { id: 3, text: 'Yash' },
    { id: 4, text: 'Adi' },
    { id: 5, text: 'Kush' },
  ];

  const fetchTemperature = async () => {
    try {
      const response = await getWeather(city);
      setTemperature(response.main.temp);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTemperature();
  }, []);

  const [imageUri, setImageUri] = useState(null);

  const [password, setPassword] = React.useState('');

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(8, true, true, true, false);
    setPassword(newPassword);
  }


  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="for profile screen" component={SomeOtherComponent} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      ) : (
        <Text>Please select an image</Text>
      )}
      <MyImagePicker onImageSelected={setImageUri} />

      <Text>{password}</Text>
      <Button title="Generate Password" onPress={handleGeneratePassword} />
      <Text>Current temperature in {city}: {temperature}</Text>
      <MyButton text='Click me' onPress={handlePress} />
      
    </View>
    </>

  );
};

export default App;
