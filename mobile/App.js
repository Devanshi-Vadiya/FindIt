
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
import { useState } from 'react';
import LostItemsScreen from './LostItemsScreen';

export default function App() {

 const [screen, setScreen] = useState('home');

  if (screen === 'lost') {
   return (
    <LostItemsScreen
      goBack={() => setScreen('home')}
      />
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>FindIt</Text>

      <Text style={styles.subtitle}>
        Campus Lost & Found
      </Text>

      <Text style={styles.heading}>
        What are you looking for?
      </Text>

      <TouchableOpacity
        style={styles.lostButton}
        onPress={() => setScreen('lost')}
      >
        <Text style={styles.buttonText}>Lost Items</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.foundButton}
        onPress={() => Alert.alert("Found Items")}
      >
        <Text style={styles.buttonText}>Found Items</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Find your belongings on campus.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    padding: 25,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 50,
    color: 'gray',
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  lostButton: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },

  foundButton: {
    backgroundColor: '#15803D',
    padding: 15,
    borderRadius: 8,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },

  footer: {
    textAlign: 'center',
    marginTop: 40,
    color: 'gray',
  },

});
