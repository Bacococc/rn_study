import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddPartyDV1Screen from './src/screens/AddPartyDV1Screen';
import AddPartyDV2Screen from './src/screens/AddPartyDV2Screen';
import BottomTabs from './src/navigations/BottomTabs';
import RoomDetailScreen from './src/screens/RoomDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* 탭 바 포함된 메인 화면 */}
        <Stack.Screen name="Main" component={BottomTabs} />
        {/* 스택으로 이동하는 추가 화면 */}
        <Stack.Screen name="AddPartyDV1" component={AddPartyDV1Screen} />
        <Stack.Screen name="AddPartyDV2" component={AddPartyDV2Screen} />
        <Stack.Screen name="RoomDetail" component={RoomDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}