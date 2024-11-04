import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    const rr = setTimeout(() => {
      navigation.navigate('Walkthough');
    }, 2000);
    return () => clearTimeout(rr);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image
        source={require('./../Assets/Images/Group.png')}
        style={styles.imagee}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagee: {
    width: 150,
    resizeMode: 'contain',
  },
});
