import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HistoryScreen from './src/app/history/history-screen';
import HomeScreen from './src/app/home/home-screen';
import PaymentScreen from './src/app/payment/payment-screen';
import MessageScreen from './src/app/message/message-screen';
import AccountScreen from './src/app/account/account-screen';
import homeIconActive from './assets/img/icon/footer-home-active.png';
import homeIcon from './assets/img/icon/footer-home.png';
import paymentIconActive from './assets/img/icon/footer-payment-active.png';
import paymentIcon from './assets/img/icon/footer-payment.png';
import historyIcon from './assets/img/icon/footer-riwayat.png';
import messageIcon from './assets/img/icon/footer-pesan.png';
import profileIcon from './assets/img/icon/footer-profile.png';
import historyIconActive from './assets/img/icon/footer-riwayat-active.png';
import messageIconActive from './assets/img/icon/footer-pesan-active.png';
import profileIconActive from './assets/img/icon/footer-profile-active.png';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let sourceIcon;

            if (route.name === 'Home') {
              sourceIcon = focused ? homeIconActive : homeIcon;
            } else if (route.name === 'Payment') {
              sourceIcon = focused ? paymentIconActive : paymentIcon;
            } else if (route.name === 'History') {
              sourceIcon = focused ? historyIconActive : historyIcon;
            } else if (route.name === 'Message') {
              sourceIcon = focused ? messageIconActive : messageIcon;
            } else if (route.name === 'Account') {
              sourceIcon = focused ? profileIconActive : profileIcon;
            }

            // You can return any component that you like here!
            return (
              <Image
                source={sourceIcon}
                style={{width: 30}}
                resizeMode="contain"
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#17A34F',
          inactiveTintColor: '#CCC',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Payment" component={PaymentScreen} />
        <Tab.Screen name="Message" component={MessageScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
