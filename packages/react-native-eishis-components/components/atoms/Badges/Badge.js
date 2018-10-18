import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../styles';

const Badge = (props: Props) => {
  const {
    colorType,
    sizeType,
    badgeText,
    style,
    children,
  } = props;

  return (
    <View>
      {children}
      <View style={[
        styles.badgeStyle,
        (badgeText !== '' && { paddingHorizontal: 6 }),
        badgeColors[colorType || 'blue'],
        badgeSizes[sizeType || 'medium'],
        style
      ]}>
        <Text style={styles.countTextStyle}>{badgeText}</Text>
      </View>
    </View>
  ); 
};

const badgeColors = {
  blue: {
    backgroundColor: Colors.blue,
  },
  yellow: {
    backgroundColor: Colors.yellow,
  },
  gray: {
    backgroundColor: Colors.gray,
  },
  red: {
    backgroundColor: Colors.red,
  },
}

const badgeSizes = {
  small: {
    minWidth: 14,
    minHeight: 14,
    borderRadius: 7,
    top: 0,
    right: -2,
  },
  medium: {
    minWidth: 20,
    minHeight: 20,
    borderRadius: 10,
    top: -6,
    right: -8,
  },
}

const styles = StyleSheet.create({
  buttonBaseStyle: {
    position: 'relative',
  },
  badgeStyle: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countTextStyle: {
    color: '#ffffff',
  },
});

export default Badge;
