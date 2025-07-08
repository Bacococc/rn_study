import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton'; // Assuming CustomButton is in the components folder
import { wp } from '../utils/resposive';
import CustomHeader from '../components/CustomHeader';


const RoomDetail = () => {
  return (
    <View> 
      <CustomHeader title="파티 타입 선택" />

    </View>
  );
};


export default RoomDetail;