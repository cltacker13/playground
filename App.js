import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import Home from './components/screens/Home';
import Profile from './components/screens/Profile';
import About from './components/screens/About';
import Projects from './components/screens/Projects';

const Stack = createNativeStackNavigator();

export default function App() {
    return(
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Projects'>
                    <Stack.Screen 
                        name='Home'
                        component={Home}
                        options={{title: 'Welcome'}}
                    ></Stack.Screen>
                    <Stack.Screen 
                        name='Profile'
                        component={Profile}
                        options={{title: 'Profile'}}
                    ></Stack.Screen>
                    <Stack.Screen 
                        name='About'
                        component={About}
                        options={{title: 'About'}}
                    ></Stack.Screen>
                    <Stack.Screen 
                        name='Projects'
                        component={Projects}
                        options={{title: 'Projects'}}
                    ></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: 'auto',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
