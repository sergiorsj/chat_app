import { StyleSheet, View, Text, Button, ImageBackground } from 'react-native';
import imageBackground  from "../images/BackgroundImage.png";

const Start = ({ navigation }) => {
 return (
   <View style={styles.container}>
    <ImageBackground style={styles.image} source={imageBackground} resizeMode="cover">
    <Text style={styles.text}>Chat App!</Text>
    <View style={styles.containerWhite}>
     <Text>Hello Screen1!</Text>
     <Button style={styles.buttonStartChatting}
       title="Start Chatting"
       color="#ffffff"
       onPress={() => navigation.navigate('Chat')}
     />
     </View>
     </ImageBackground>

   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
 },
 containerWhite: {
    flex: 1,
    width: "88%",
    width: "44%",
    backgroundColor: "white",
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
 image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
   alignItems: 'center'
 },
 buttonStartChatting: {
    backgroundColor: "#757083",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10
 },
 text: {
    padding: "25%",
    flex: 6,
    fontSize: 45,
    color: "white",
    fontWeight: "600"
 }
});

export default Start;