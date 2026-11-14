
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function LostItemsScreen({ goBack }) {

  const items = [
    {
      id: '1',
      name: 'Black Wallet',
      location: 'College Library'
    },
    {
      id: '2',
      name: 'Water Bottle',
      location: 'Classroom 204'
    },
    {
      id: '3',
      name: 'Blue Backpack',
      location: 'College Canteen'
    }
  ];

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={goBack}>
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Lost Items</Text>

      {items.map((item) => (
        <View style={styles.itemBox} key={item.id}>

          <Text style={styles.itemName}>
            {item.name}
          </Text>

          <Text style={styles.location}>
            Location: {item.location}
          </Text>

        </View>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 25,
    paddingTop: 60,
  },

  backButton: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 25,
  },

  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  itemBox: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    marginBottom: 15,
  },

  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  location: {
    fontSize: 14,
    color: 'gray',
    marginTop: 8,
  },

});
