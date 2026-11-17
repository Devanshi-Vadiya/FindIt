
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
import { useState, useEffect } from 'react';
import LostItemsScreen from './LostItemsScreen';
import FoundItemsScreen from './FoundItemsScreen';
import AddItemScreen from './AddItemScreen';


export default function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://findit-backend-cbtd.onrender.com/api/items')
      .then(response => response.json())
      .then(data => {
        setItems(data);
      })
      .catch(error => {
        console.log('Error fetching items:', error);
      });
  }, []);

  const [screen, setScreen] = useState('home');

  const deleteItem = async (id) => {
    try {
      const response = await fetch(
        `https://findit-backend-cbtd.onrender.com/api/items/${id}`,
        {
          method: 'DELETE'
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setItems(items.filter(item => item._id !== id));

    } catch (error) {
      Alert.alert('Error', 'Could not delete the item.');
      console.log(error);
    }
  };


  if (screen === 'lost') {
    return (
      <LostItemsScreen
        items={items.filter(item => item.type === 'lost')}
        goBack={() => setScreen('home')}
        onDeleteItem={deleteItem}
      />
    );
  }

  if (screen === 'found') {
    return (
      <FoundItemsScreen
        items={items.filter(item => item.type === 'found')}
        goBack={() => setScreen('home')}
        onDeleteItem={deleteItem}
      />
    );
  }

  if (screen === 'add') {
    return (
      <AddItemScreen
        goBack={() => setScreen('home')}
        onAddItem={async (newItem) => {
          try {
            const response = await fetch(
              'https://findit-backend-cbtd.onrender.com/api/items',
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(newItem)
              }
            );

            const savedItem = await response.json();

            if (!response.ok) {
              throw new Error(savedItem.message);
            }

            setItems([...items, savedItem]);
            setScreen(savedItem.type);

          } catch (error) {
            Alert.alert('Error', error.message);
            console.log('SAVE ERROR:', error);
          }
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
