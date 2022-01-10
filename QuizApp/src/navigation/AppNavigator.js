import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Dashboard from '../screens/Dashboard';
import QuizScreen from '../screens/QuizScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen
          name="QuizScreen"
          component={QuizScreen}
          options={{animation: "fade_from_bottom"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
