import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <SafeAreaView style={styles.header}>
      {/* SafeAreaView로 헤더 영역을 감싸서 안전한 영역에 위치하도록 함 */}
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>         {/* 큰 제목 */}
      <Text style={styles.subtitle}>{subtitle}</Text>   {/* 소제목 */}
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f9f9f9',
    width: '100%',
    paddingHorizontal: 10,
  },
  container: {
    width : '100%',
    left : 20,
    top: 0,
    marginTop: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'semibold',
    color: '#000',
  },
  subtitle: {
    fontSize: 20,
    color: '#888',
    marginTop: 6,
  },
});

export default SectionHeader;