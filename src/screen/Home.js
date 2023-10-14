import {View, Text, StyleSheet, Image, Button, Pressable} from 'react-native';
import React from 'react';
import { Images } from '../themes/theme';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigaton = useNavigation();

    const handleStart = () => {
        navigaton.navigate('Dashboard');
    }

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text}>Clean Room</Text>
        <Text style={styles.text}>Clean Life</Text>
      </View>

      <View style={styles.tagLine}>
        <Text style={styles.tag}>Book cleaners at the comfort of your room</Text>
      </View>
      <View style={styles.imageContainer}>
      <Image source={Images.image}  style={styles.img}/>
      </View>

      <Pressable onPress={handleStart}>
        <Text style={styles.button}>Get Start</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  item: {
    paddingTop: 100,
    paddingLeft: 120,
  },
  text: {
    color: 'white',
  },
  tagLine: {
    paddingTop: 40
  },
  tag: {
    color: 'white',
    paddingHorizontal: 50,
    textAlign: 'center'
  },
  imageContainer: {
    paddingHorizontal: 35,
    paddingVertical: 20,
    
  },
  img: {
    height: 300,
    width: 250,
    borderRadius: 50,
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 70,
    paddingVertical: 10,
    marginHorizontal:50,
    marginVertical:50,
    borderRadius: 12,
  }
});

export default Home;
