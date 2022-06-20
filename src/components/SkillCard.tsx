import {
    TouchableOpacity, 
    TouchableOpacityProps,
    Text, 
    StyleSheet
} from 'react-native';
import React from 'react';

interface SkillProps extends TouchableOpacityProps {
  skill: string;
}

export default function SkillCard({skill, ...rest}: SkillProps) {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
      },
      textSkill: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
      },
})
