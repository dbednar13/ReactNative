import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import {
  getMetricMetaInfo,
  timeToString,
  getDailyReminderValue,
} from '../utils/helpers';

export default class AddEntry extends Component {
  render() {
    return (
      <View>
        <Text> Hello World </Text>
      </View>
    );
  }
}
