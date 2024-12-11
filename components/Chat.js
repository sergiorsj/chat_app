import { collection, addDoc, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform} from 'react-native';

import { Bubble, GiftedChat, InputToolbar } from "react-native-gifted-chat";

import AsyncStorage from "@react-native-async-storage/async-storage";

import CustomActions from './CustomActions';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';


const Chat = ({ route, navigation, db, isConnected, storage }) => {
  const { name , background, userID } = route.params;
  const [messages, setMessages] = useState([]);

  //sets name as name typed by user on mainscreen and sets background as user selected background
  useEffect(() => {
    navigation.setOptions({ title: name, color: background });
  }, []);
  

  
  let unsubMessages;

  useEffect(() => {

    if (isConnected === true) {

      // unregister current onSnapshot() listener to avoid registering multiple listeners when
      // useEffect code is re-executed.
      if (unsubMessages) unsubMessages();
      unsubMessages = null;

    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
    unsubMessages = onSnapshot(q, (docs) => {
      let newMessages = [];
      docs.forEach(doc => {
        newMessages.push({
          id: doc.id,
          ...doc.data(),
          createdAt: new Date(doc.data().createdAt.toMillis())
        })
      })
      cacheMessages(newMessages);
      setMessages(newMessages);
    });
  } else loadCachedMessages();


    return () => {
      if (unsubMessages) unsubMessages();
    }
   }, [isConnected]);



   const cacheMessages = async (messagesToCache) => {
    try {
      await AsyncStorage.setItem('messages', JSON.stringify(messagesToCache));
    } catch (error) {
      console.log(error.message);
    }
  }

  const loadCachedMessages = async () => {
    const cachedMessages = await AsyncStorage.getItem("messages") || [];
    setMessages(JSON.parse(cachedMessages));
  }

  const onSend = (newMessages) => {
    addDoc(collection(db, "messages"), newMessages[0])
  }

  const renderBubble = (props) => {
    return <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: "#000"
        },
        left: {
          backgroundColor: "#FFF"
        }
      }}
    />
  }

  const renderInputToolbar = (props) => {
    if (isConnected) return <InputToolbar {...props} />;
    else return null;
   }

   const renderCustomActions = (props) => {
    return <CustomActions storage={storage} {...props} />;
  };

  const renderCustomView = (props) => {
    const { currentMessage} = props;
    if (currentMessage.location) {
      return (
          <MapView
            style={{width: 150,
              height: 100,
              borderRadius: 13,
              margin: 3}}
            region={{
              latitude: currentMessage.location.latitude,
              longitude: currentMessage.location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
      );
    }
    return null;
  }


  return (
    <View style={[styles.mcontainer, {backgroundColor: background}]}>
    <GiftedChat
      messages={messages}
      renderBubble={renderBubble}
      renderInputToolbar={renderInputToolbar}
      renderActions={renderCustomActions}
      renderCustomView={renderCustomView}
      onSend={messages => onSend(messages)}
      user={{
        _id: userID,
        name: name
    }}
    />
    { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null }
    {Platform.OS === "ios"?<KeyboardAvoidingView behavior="padding" />: null}
    </View>
  )
//  return (
//    <View style={[styles.container,
//    {backgroundColor: background}]}>
//      <Text>Hello {name}!</Text>
//    </View>
//  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mcontainer: {
    flex: 1
  }
});

export default Chat;