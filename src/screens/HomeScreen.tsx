import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton'; // Assuming CustomButton is in the components folder
import { wp } from '../utils/resposive';

type RootStackParamList = {
  Home: undefined;
  DeliveryHome: undefined;
};

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text>글로벌 캠퍼스 입주생들을 위한 캠퍼스 라이프 메이트</Text>
      <Text>함께 모여! 배달비 아껴!</Text>
      <CustomButton
        navigation={navigation}
        buttonText="배달비 아끼기"
        screenName="DeliveryHome"
        backgroundColor="#ef792a"
        textColor="#fff"
        width={wp(50)}
      />
      <CustomButton
        navigation={navigation}
        screenName="TaxiHome"
        backgroundColor="#ef792a"
        textColor="#fff"
        width={wp(50)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;