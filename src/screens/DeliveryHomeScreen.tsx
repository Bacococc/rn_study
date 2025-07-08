import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, StyleSheet, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SectionHeader from '../components/SectionHeader';
import SortButton from '../components/SortButton';
import { wp } from '../utils/resposive';
import CustomCard from '../components/CustomCard';
import { CustomModal } from '../components/CustomModal';

type RootStackParamList = {
  Home: undefined;
  DeliveryHome: undefined;
  RoomDetail: { roomId: number };
};

const DeliveryHomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [rooms, setRooms] = useState<any[]>([]);
  const [sortOrder, setSortOrder] = useState(0); 

  useFocusEffect(
  useCallback(() => {
    Promise.all([
      fetch("http://192.168.0.18:3001/foodFareRoom?_expand=restaurant").then(res => res.json()),
      fetch("http://192.168.0.18:3001/foodResult").then(res => res.json()),
      fetch("http://192.168.0.18:3001/FoodJoinUser").then(res => res.json()),
    ]).then(([rooms, results, joinUsers]) => {
      // 진행 중인 결과만 필터링
      const filteredResults = Array.isArray(results)
        ? results.filter((r: any) => r.progress === 0)
        : [];

      const merged = Array.isArray(rooms)
        ? rooms.map(room => {
            // 이 방에 참여한 유저 수
            const joinedCount = joinUsers.filter(
              (j: any) => j.food_fare_room_id === room.id
            ).length;

            return {
              ...room,
              foodResult: filteredResults.find(
                (r: any) => r.foodFareRoomId === room.id
              ),
              currentMembers: joinedCount
            };
          })
        : [];

      setRooms(merged);
    });
  }, [])
);
  const sortedRooms = useMemo(() => {
      const copied = [...rooms];
      if (sortOrder === 0) {
        // 마감 시간 가까운 순 정렬 (오름차순)
        copied.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());
      } else if (sortOrder === 1) {
        // 가게 이름 가나다순 정렬
        copied.sort((a, b) => {
          const nameA = a.restaurant?.restaurantName || '';
          const nameB = b.restaurant?.restaurantName || '';
          return nameA.localeCompare(nameB, 'ko');
        });
      }
      return copied;
    }, [rooms, sortOrder]);

  return (
    <View style={styles.container}>
      <SectionHeader title="배달 Delivery" subtitle="배달비 부담은 낮추고, 배는 든든하게!" />
      <View style={{ alignItems: 'left', flexDirection: 'row' }}>
      <SortButton 
        sortOrder={sortOrder} 
        setSortOrder={setSortOrder}
        style={{ elevation: 2 }}
        title="최신순"
        width={wp(20)}
      />
      </View>
      <FlatList
        data={sortedRooms}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <CustomCard
            width={wp(90)}
            height={wp(40)}
            room={item}
            onPress={() => {CustomModal}}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});

export default DeliveryHomeScreen;

