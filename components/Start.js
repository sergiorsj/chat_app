import { StyleSheet, View, Text, Button, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import imageBackground  from "../images/BackgroundImage.png";
import { useState } from 'react';

const Start = ({ navigation }) => {
    const [name, setname] = useState("")
    const [colors, setColors] = useState(["#090C08", "#474056", "#8A95A5", "#B9C6AE"]);
 return (
   <View style={styles.container}>
    <ImageBackground style={styles.image} source={imageBackground} resizeMode="cover">
    <Text style={styles.text}>Chat App!</Text>
    <View style={styles.containerWhite}>
        <View style={styles.inputContainer}> 
        <TextInput
        style={styles.input}
       value={name}
       onChangeText={setname}
       placeholder='Your Name'
     /></View>
   <Text>Choose Background Color:</Text>
   <View style={{flexDirection: "row", padding: "10"}}>
      {
         colors.map(c => {
            const color = {
               ...styles.colorbutton,
               margin: "10",
               backgroundColor: c
            };
            return  (<TouchableOpacity style={color}>
             </TouchableOpacity>
        )
      })
         
      }
    </View>
    <TouchableOpacity style={styles.buttonStartChatting} onPress={() => navigation.navigate('Chat')}>
          <Text  style={{
      color: "white"
   }}>Start Chatting</Text>
        </TouchableOpacity>
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
    width: "88%",
    height: "33%",
    backgroundColor: "white",
    marginBottom: "20%",
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
    marginTop: 20,
    width: "90%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center"
    
 },
 text: {
    padding: "25%",
    flex: 6,
    fontSize: 45,
    color: "white",
    fontWeight: "600"
 },
 text1: {
    color: "#757083",
    fontSize: 16,
    fontWeight: "300",
    marginTop: 20
 },
 inputContainer : {
    flexDirection: "row",
   alignItems: 'center',
   borderColor: "#757083",
   borderWidth: 2,
   padding: 18, 
   marginLeft: 20, 
   marginRight: 20,
   marginTop: -10,
   marginBottom: 10
 },
 input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "300"
 },
 colorbutton: {
    borderRadius: 20,
   width: "40",
   height: "40"
 },
 colorbuttoncontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20
 }
});

export default Start;