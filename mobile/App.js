
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
import FoundItemsScreen from './FoundItemsScreen';
import AddItemScreen from './AddItemScreen';


export default function App() {

 const [items, setItems] = useState([
  {
    id: '1',
    name: 'Black Wallet',
    location: 'College Library',
    description: '',
    type: 'lost'
  },
  {
    id: '2',
    name: 'Water Bottle',
    location: 'Classroom 204',
    description: '',
    type: 'lost'
  },
  {
    id: '3',
    name: 'Blue Backpack',
    location: 'College Canteen',
    description: '',
    type: 'lost'
  },
  {
    id: '4',
    name: 'Black Headphones',
    location: 'College Library',
    description: '',
    type: 'found'
  },
  {
    id: '5',
    name: 'Student ID Card',
    location: 'College Canteen',
    description: '',
    type: 'found'
  },
  {
    id: '6',
    name: 'Umbrella',
    location: 'Classroom 102',
    description: '',
    type: 'found'
  }
]); 

 const [screen, setScreen] = useState('home');

 if (screen === 'lost') {
  return (
    <LostItemsScreen
      items={items.filter(item => item.type === 'lost')}
      goBack={() => setScreen('home')}
    />
  );
}

if (screen === 'found') {
  return (
    <FoundItemsScreen
      items={items.filter(item => item.type === 'found')}
      goBack={() => setScreen('home')}
    />
  );
}

if (screen === 'add') {
  return (
    <AddItemScreen
      goBack={() => setScreen('home')}
      onAddItem={(newItem) => {
        setItems([...items, newItem]);
        setScreen(newItem.type);
      }}
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
        onPress={() => setScreen('found')}
      >
        <Text style={styles.buttonText}>Found Items</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setScreen('add')}
      >
        <Text style={styles.buttonText}>Add Item</Text>
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
    marginBottom: 15,
  },

  addButton: {
     backgroundColor: '#535520',
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
