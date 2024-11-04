import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../Component/Header';
import Otpbox from '../Component/Otpbox';
import PrimaryBtn from '../Component/PrimaryBtn';
import Color from '../Utlis/color';
import Back from '../Component/Back';

const OtpVerify = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#F4F4F3'} />
      <Back marginTop={15} />
      <Header title={'OTP Verification'} marginTop={30} />
      <Text style={styles.txt}>We have sent you aaa 6 digit verification</Text>
      <Text style={styles.txt1}>
        code on <Text style={styles.no}>+91 6556565656</Text>
      </Text>
      <Otpbox marginVertical={20} />
      <PrimaryBtn
        title={'Verify'}
        press={() => navigation.navigate('Signup')}
      />
      <TouchableOpacity style={{marginTop: 30}}>
        <Text style={styles.chngeno}>Change my mobile number</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpVerify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  txt: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: '400',
  },
  txt1: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '400',
  },
  chngeno: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Inter_18pt-Medium',
  },
  no: {
    fontSize: 14,
    fontWeight: '500',
    color: Color.black,
    fontFamily: 'Inter_18pt-Medium',
  },
});
