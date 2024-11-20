import { StyleSheet, View, Text, Button, ImageBackground } from 'react-native';
import imageBackground  from "../images/BackgroundImage.png";

const Start = ({ navigation }) => {
 return (
   <View style={styles.container}>
    <ImageBackground style={styles.image} source={imageBackground} resizeMode="cover" style={styles.image}>
     <Text>Hello Screen1!</Text>
     <Button
       title="Go to Screen 2"
       onPress={() => navigation.navigate('Screen2')}
     />
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
 image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
   alignItems: 'center'
 }
});

export default Start;