import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './components/Start';
import Chat from './components/Chat';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen
          name="Start"
          component={Start}
        />
        <Stack.Screen
          name="Chat"
        >
          {
            (props) => <Chat {...props} />
          }
          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


