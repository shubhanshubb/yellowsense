import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
    const navigaton = useNavigation();

    const handleClick = () => {
        
    }

    const handleContinue = () => {
        navigaton.navigate();
    }
    const handleSelect = () => {
        navigaton.navigate();
    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Plan</Text>

      <View style={styles.itemView}>
        <Text style={styles.name}>Hey Prakhar</Text>

        <View style={styles.cardContainer}>
          <Pressable>
            <View style={styles.item}></View>
            <Text style={styles.itemText}>Cleaning</Text>
          </Pressable>
          <Pressable>
            <View style={styles.item}></View>
            <Text style={styles.itemText}>Room Maintenance</Text>
          </Pressable>
        </View>
        <View style={styles.cardContainer}>
          <Pressable>
            <View style={styles.item}></View>
            <Text style={styles.itemText}>General Maintenance</Text>
          </Pressable>
          <Pressable onPress={handleClick}>
            <View style={styles.item}></View>
            <Text style={styles.itemText}>Mess Complaints</Text>
          </Pressable>
        </View>
      </View>


      <Pressable onPress={handleContinue}>
        <Text style={styles.button}>Discard</Text>
      </Pressable>

      <Pressable onPress={handleSelect}>
        <Text style={styles.button}>Select</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  text: {
    paddingVertical: 20,
    paddingHorizontal: 100,
    color: 'black',
  },
  itemView: {
    paddingTop: 20,
    height: 300,
    borderRadius: 20,
    marginHorizontal: 2,
    backgroundColor: 'white',
  },
  name: {
    paddingVertical: 20,
    paddingHorizontal: 50,
    color: 'black',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  item: {
    height: 80,
    borderRadius: 20,
    width: 100,
    backgroundColor: 'black',
  },
  itemText: {
    color: 'black',
    marginRight: 20,
    fontSize:  10,
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal:50,
    marginVertical:50,
    borderRadius: 12,
  }
});

export default Dashboard;
