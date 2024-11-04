import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Src/Screen/Splash';
import Walkthough from './Src/Screen/Walkthough';
import Login from './Src/Screen/Login';
import Otp from './Src/Screen/Otp';
import Register from './Src/Screen/Register';
import OtpVerify from './Src/Screen/OtpVerify';
import Signup from './Src/Screen/Signup';
import Otpverifyemail from './Src/Screen/Otpverifyemail';
import Complete from './Src/Screen/Complete';
import BottomTab from './Src/Navigation/BottomTab';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="Walkthough" component={Walkthough} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="OtpVerify" component={OtpVerify} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Otpverifyemail" component={Otpverifyemail} />
        <Stack.Screen name="Complete" component={Complete} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import PrimaryBtn from './Src/Component/PrimaryBtn';
// import PrimaryInput from './Src/Component/PrimaryInput';
// import Color from './Src/Utlis/color';
// import Header from './Src/Component/Header';
// import Otp from './Src/Component/Otp';
// import Secondary from './Src/Component/Secondary';

// const App = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         // alignItems: 'center',
//         backgroundColor: Color.backgroundclr,
//       }}>
//      <Secondary/>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});
