import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../Component/Header';
import Back from '../Component/Back';
import LinearGradient from 'react-native-linear-gradient';
import PrimaryInput from '../Component/PrimaryInput';
import PrimaryBtn from '../Component/PrimaryBtn';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Register = ({navigation}) => {
  return (
    <LinearGradient colors={['#FFFFFF', '#EEEEEC']} style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#FFFFFF'}
        hidden={true}
      />
      <Back marginTop={60} />
      <Header title={'Enter Your Mobile No.'} marginTop={20} />
      <PrimaryInput marginVertical={30} />
      <PrimaryBtn
        title={'Submit'}
        press={() => navigation.navigate('OtpVerify')}
      />

      <Text style={styles.txt}>
        By regestering, you are agreeing to Mobox’s
      </Text>
      <Text style={styles.txt1}>
        <Text style={{color: 'black'}}>Terms & Conditions</Text> and{' '}
        <Text style={{color: 'black'}}>Privacy and Polcies</Text>
      </Text>
    </LinearGradient>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  txt: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Inter_18pt-Medium',
    color: Colors.grey,
  },
  txt1: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Inter_18pt-Medium',
    color: Colors.grey,
  },
});
