import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    async function getStoredValue() {
      try {
        const storedValue = await AsyncStorage.getItem(key);
        if (storedValue !== null) {
          setValue(JSON.parse(storedValue));
        }
      } catch (e) {
        console.error(`Error reading from local storage: ${e}`);
      }
    }
    getStoredValue();
  }, [key]);

  async function setStoredValue(newValue) {
    try {
      setValue(newValue);
      await AsyncStorage.setItem(key, JSON.stringify(newValue));
    } catch (e) {
      console.error(`Error writing to local storage: ${e}`);
    }
  }

  return [value, setStoredValue];
}

export default useLocalStorage;
