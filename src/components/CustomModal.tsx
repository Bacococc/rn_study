import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { wp, hp } from '../utils/resposive';

const CustomModal = ({ visible, room, onClose }) => {
  if (!room) return null; // room이 설정되기 전이면 렌더링 X
  const deadline = new Date(room.deadline);
  const formatted = `${deadline.getMonth() + 1}월 ${deadline.getDate()}일 ${deadline.getHours()}시 ${deadline.getMinutes()}분`;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{room.restaurant?.restaurantName} 파티에 참가하시겠어요?</Text>
          <Text style={styles.text}>배달 시작 시간 : {formatted}</Text>
          {room.maxMember === 0 ? (
            <Text style={styles.text}>
              해당 파티는 참여 인원에 관계없이
              {'\n'}
              배달 시간이 만족되면 배달이 시작됩니다.
            </Text>
          ) : (
            <Text style={styles.text}>
              해당 파티는 참여 인원이 만족되면
              {'\n'}
              배달이 시작됩니다.
            </Text>
          )}
          

          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={{ color: 'white' }}>파티 참가하기</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.navigateButton}>
            <Text style={{ color: 'black' }}>닫기</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: wp(4),
    padding: wp(4),
    alignItems: 'center',
  },
  title: {
    fontSize: wp(5),
    fontWeight: 'bold',
    marginBottom: hp(2),
  },
  text: {
    fontSize: wp(4),
    marginVertical: hp(0.6),
    textAlign: 'center',

  },
  closeButton: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: hp(2),
    backgroundColor: '#333',
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
    borderRadius: wp(4),
  },
  navigateButton: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: hp(2),
    backgroundColor: 'lightgray',
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
    borderRadius: wp(4),
  }
});

export default CustomModal;