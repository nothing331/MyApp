import React from 'react';
import { Switch as RNSwitch } from 'react-native';

export const Switch = ({ value, onValueChange }) => {
  return (
    <RNSwitch
      value={value}
      onValueChange={onValueChange}
    />
  );
};
export default Switch;