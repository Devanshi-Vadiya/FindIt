
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  Share
} from 'react-native';

export default function FoundItemsScreen({ goBack, items, onDeleteItem }) {

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={goBack}>
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Found Items</Text>

      {items.map((item) => (
        <View style={styles.itemBox} key={item._id}>
          {item.imageUrl !== '' && (
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.itemImage}
            />
          )}
          <Text style={styles.itemName}>
            {item.name}
          </Text>

          <Text style={styles.location}>
            Location: {item.location}
          </Text>

          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Found Item Options',
                'What would you like to do?',
                [
                  {
                    text: 'Cancel',
                    style: 'cancel'
                  },
                  {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => onDeleteItem(item._id)
                  },
                  {
                    text: 'Found by Owner',
                    onPress: () => onDeleteItem(item._id)
                  }
                ]
              );
            }}
          >
            <Text>☐ Mark / Delete</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Share.share({
                message: `Found Item: ${item.name}
                Location: ${item.location}
                Description: ${item.description}`
              });
            }}
          >
            <Text>Share Item</Text>
          </TouchableOpacity>

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
  itemImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },

});
