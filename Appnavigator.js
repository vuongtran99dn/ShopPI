import React from 'react'
import { View, Text,Button,Image,StyleSheet } from 'react-native';
import CategoriesScreen from './screen/CategoriesScreen'
import CategoryScreen from './screen/CategoryScreen'
import { createStackNavigator } from '@react-navigation/stack';
import crystal from './resource/picture/logo.png'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesScreen}
      options={homeLogo} 
      />
      <Stack.Screen name='Category' component={CategoryScreen}
      options={({ route }) => ({ title: route.params.cateName })}
      />
    </Stack.Navigator>
  );
}

export default MyStack;









// Đây chỉ là logo thôi chứ không có gì đáng xem cả

const homeLogo = {
  headerTitle: props => <LogoTitle {...props} />,
    headerStyle: {
      backgroundColor: '#8e9491',
    },
    headerTintColor:'#fff',
    headerTitleStyle: {
      alignSelf:'center',
      textAlign: 'center',
    },     
  }
function LogoTitle() {
  return (
    <View style={{alignItems: 'center'}}>
      <Image  style={{width: 200, height: 50 }}source={crystal}/>
    </View>
  );
}