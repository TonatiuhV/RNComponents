import React, {useState} from 'react';
import {Platform, StyleSheet, Switch, Text, View} from 'react-native';
import {CustomeSwitch} from '../components/CustomeSwitch';
import {HeaderTitle} from '../components/HeaderTitle';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const {isActive, isHungry, isHappy} = state;
  const onChange = (value: boolean, field: string) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={{marginHorizontal: 20}}>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isActive</Text>
        <CustomeSwitch
          onChange={isEnabled => onChange(isEnabled, 'isActive')}
          isOn={isActive}
        />
      </View>
      {/* isHungry */}
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHungry</Text>
        <CustomeSwitch
          onChange={isEnabled => onChange(isEnabled, 'isHungry')}
          isOn={isHungry}
        />
      </View>
      {/* isHappy */}
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHappy</Text>
        <CustomeSwitch
          onChange={isEnabled => onChange(isEnabled, 'isHappy')}
          isOn={isHappy}
        />
      </View>
      <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
