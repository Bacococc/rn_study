import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SectionHeader from '../components/SectionHeader';


type RootStackParamList = {
  Home: undefined;
  DeliveryHome: undefined;
};

const TaxiHomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <SectionHeader title="택시 Taxi" subtitle="택시비 부담은 낮추고, 속도는 2배로!" />
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddPartyDV1')}>
        <Text style={styles.buttonText}>Go to Add party</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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

export default TaxiHomeScreen;

