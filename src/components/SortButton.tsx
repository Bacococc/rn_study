import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { wp, hp } from '../utils/resposive';


const SortButton = ({ sortOrder, setSortOrder }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => setSortOrder(prev => (prev === 0 ? 1 : 0))}
    >
      <Text style={styles.buttonText}>
        {sortOrder === 0 ? '배달 시간 순' : '가게 이름 순'}
      </Text>
    </TouchableOpacity>
  );
};

export default SortButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightgray',
    paddingHorizontal: wp(4),
    borderRadius: wp(4),
    marginTop: hp(2),
    marginBottom: hp(2),
    justifyContent: 'center',
    height: hp(3),
  },
  buttonText: {
    fontSize: wp(3.5),
    fontWeight: 'light'
  },
});