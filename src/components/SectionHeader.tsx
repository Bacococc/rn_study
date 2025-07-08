import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { wp, hp } from '../utils/resposive';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <SafeAreaView style={styles.header}>
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
    paddingHorizontal: wp(2),
    height: hp(16),
  },
  container: {
    width : '100%',
    left : wp(4),
    top: 0,
    marginTop: hp(0.6),
  },
  title: {
    fontSize: wp(6),
    fontWeight: 'semibold',
    color: '#000',
  },
  subtitle: {
    fontSize: wp(4),
    color: '#888',
    marginTop: wp(1),
  },
});

export default SectionHeader;