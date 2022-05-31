import React from "react";
import{Stylesheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "../screens/HomeScreen";
import LunchScreen from '../screens/LunchScreen';
import CalendarScreen from '../screens/CalendarScreen';
import ExtracurricularsScreen from '../screens/ExtracurricularsScreen';
import ClassesScreen from '../screens/ClassesScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator tabBarOptions={{
              showLabel: false,
              style: {
                  position: 'absolute',
                  bottom: 25,
                  left: 20,
                  right: 20, 
                  elevation: 0,
                  backgroundColor: '#ffffff',
                  borderRadius: 15, 
                  height: 90,
                  ...s
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Classes" component={ClassesScreen} />
            <Tab.Screen name="Lunch" component={LunchScreen} />
            <Tab.Screen name="Info" component={ExtracurricularsScreen} />
            <Tab.Screen name="Calendar" component={CalendarScreen} />
        </Tab.Navigator>

    );
    styles.shadow
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '7F5DFO',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25, 
        shadowRadius: 3.5,
        elevation:5
    }
});

export default Tabs;


