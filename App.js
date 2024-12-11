import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Start from './components/Start';
import Chat from './components/Chat';


const Stack = createNativeStackNavigator();

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { initializeApp } from "firebase/app";
import { getFirestore, disableNetwork, enableNetwork } from "firebase/firestore";

import { useNetInfo }from '@react-native-community/netinfo';
import { useEffect } from 'react';

import { getStorage } from "firebase/storage";


export default function App() {

  const connectionStatus = useNetInfo();  

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  const firebaseConfig = {
    apiKey: "AIzaSyBIvraaC5MRprYFymcoZjZpEGpNwakzwNg",
  authDomain: "chatapp-2436a.firebaseapp.com",
  projectId: "chatapp-2436a",
  storageBucket: "chatapp-2436a.firebasestorage.app",
  messagingSenderId: "999843738259",
  appId: "1:999843738259:web:5d46f0974556e070e41366",
  measurementId: "G-53JV80Z5Q7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  const storage = getStorage(app);


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={Start}/>
        <Stack.Screen
          name="Chat">
            {props => <Chat isConnected={connectionStatus.isConnected} db={db} storage={storage} {...props}/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});