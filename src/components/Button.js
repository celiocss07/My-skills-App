import {
    TouchableOpacity, 
    Text, 
    StyleSheet
} from 'react-native';
import React from 'react';

export default function Button({ onPress}) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}
      >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'orange',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20,
      },
      buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
      },
})
