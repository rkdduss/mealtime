import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MealTable from './pages/MealTable';
import TimeTable from './pages/TimeTable';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#1F8F2A',  
          tabBarInactiveTintColor: '#5C5C5C', 
          tabBarStyle: { backgroundColor: '#FCFCFC' },
          tabBarIcon: ({ color, size }) => {
            let iconName = '';
            if (route.name === '급식판') {
              iconName = 'calendar-outline'; 
            } else if (route.name === '시간표') {
              iconName = 'timer-outline';  
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="급식판" component={MealTable} />
        <Tab.Screen name="시간표" component={TimeTable} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
