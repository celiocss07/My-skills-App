import {
    TouchableOpacity, 
    TouchableOpacityProps,
    Text, 
    StyleSheet
} from 'react-native';
import React from 'react';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function Button({ title, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      {...rest}
      >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#A370F7',
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
