
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function AddItemScreen({ goBack, onAddItem }) {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('lost');
  const [image, setImage] = useState(null); 
  
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        quality: 1,
        });

    if (!result.canceled) {
        setImage(result.assets[0].uri);
        }
    };


  const handleSubmit = () => {

    if (name.trim() === '' || location.trim() === '') {
      Alert.alert('Please enter item name and location');
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      name: name,
      description: description,
      location: location,
      type: type
    };

    onAddItem(newItem);

  };

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={goBack}>
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Add Item</Text>

      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />

      <TouchableOpacity
    style={styles.imageButton}
    onPress={pickImage}
>
    <Text style={styles.imageButtonText}>
        Choose Item Photo
    </Text>
</TouchableOpacity>

{image && (
    <Image
        source={{ uri: image }}
        style={styles.imagePreview}
    />
)}

      <Text style={styles.label}>Item Type</Text>

      <View style={styles.typeContainer}>

        <TouchableOpacity
          style={[
            styles.typeButton,
            type === 'lost' && styles.selectedButton
          ]}
          onPress={() => setType('lost')}
        >
          <Text style={styles.typeText}>Lost</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.typeButton,
            type === 'found' && styles.selectedButton
          ]}
          onPress={() => setType('found')}
        >
          <Text style={styles.typeText}>Found</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        <Text style={styles.submitText}>Submit Item</Text>
      </TouchableOpacity>

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
    color: 'blue',
    fontSize: 16,
    marginBottom: 25,
  },

  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  typeContainer: {
    flexDirection: 'row',
    marginBottom: 25,
  },

  typeButton: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    marginRight: 10,
  },

  selectedButton: {
    backgroundColor: '#2563EB',
  },

  typeText: {
    textAlign: 'center',
    fontSize: 16,
  },
  imageButton: {
    backgroundColor: '#E5E7EB',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
},

imageButtonText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#333333',
},

imagePreview: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 20,
},

  submitButton: {
    backgroundColor: '#15803D',
    padding: 15,
    borderRadius: 8,
  },

  submitText: {
    color: '#FFFFFF',
    fontSize: 17,
    textAlign: 'center',
  },

});
