import React from 'react'
import { Platform, Text, View } from 'react-native'
import { GiftedChat } from "react-native-gifted-chat";

export default function Chat({route}) {
  console.log(route)
  const [messages, setMessages] = useState([]);
  const { name, color } = route.params;
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);
  const onSend = (newMessages) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
  }
  return (
    <View style={{backgroundColor: `${color}`, height: 900}}>
      <Text style={{fontSize: "32"}}>
      Welcome, {name}
      </Text>
      <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1
      }}
    />
    { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null }
     </View>
  )
}
