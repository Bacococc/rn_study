import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../components/CustomHeader';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const AddPartyDelivery1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomHeader title="파티 타입 선택" />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DeliveryHome')}>
        <Text style={styles.buttonText}>Go to Delivery Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddPartyDV2')}>
          <Text style={styles.buttonText}>Go to Add Party 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 80,
  },
  button: {
    backgroundColor: '#841584',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
  },
}); 

export default AddPartyDelivery1;