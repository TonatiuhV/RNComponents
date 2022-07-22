import React, {useContext, useState} from 'react';
import {Platform, Switch} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomeSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled); // Hasta que se renderiza cambia
  };
  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: colors.primary}}
      thumbColor={Platform.OS === 'android' ? colors.primary : ''}
      // ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
