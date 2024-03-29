import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDarkMode } from '../DarkModeContext';

const AboutUs = () => {
    const navigation = useNavigation();
    const { darkMode, toggleDarkMode } = useDarkMode();

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View style={[styles.container,{backgroundColor: darkMode ? 'black' : '#77cff1'}]}>
            <Image
                source={{ uri:'https://www.projectmediaworks.com/wp-content/uploads/2017/06/about-us-icon.jpg' }}
                style={styles.image}
            />
            <Text style={[styles.subheading,{color: darkMode ? 'white' : 'black',}]}>
                Codinggo, your premier destination for coding excellence, brings you a dynamic quiz app designed to elevate your programming skills. Dive into a world where each question is a stepping stone toward mastery, where challenges meet knowledge, and where your coding journey is finely tuned. With Codinggo, embark on a quest for skill refinement, where every quiz question propels you closer to coding expertise.
            </Text>
            <Text style={styles.subText}>
                For support, contact us at support@codinggo.com
            </Text>
            <Button title=" ⬅️ Back" onPress={handleGoBack} />
        </View>
    );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    paddingVertical: 20, 
    paddingHorizontal: 10, 
},

  subheading: {
    fontSize: 15,
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'left',
},
  subText: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    fontStyle: 'italic',
},
  image: {
    width: 380,
    height: 380,
    resizeMode: 'contain',
},
});

export default AboutUs;
