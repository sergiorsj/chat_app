// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create the navigator
const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import the screens
import ShoppingLists from './components/ShoppingLists';

const App = () => {
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

return (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="ShoppingLists"
    >
      <Stack.Screen
        name="ShoppingLists"
      >
        {props => <ShoppingLists db={db} {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);

}

export default App;