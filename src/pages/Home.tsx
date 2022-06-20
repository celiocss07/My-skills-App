import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Button from '../components/Button';
import SkillCard from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setMySkills(old => [...old, data]);
  }

  function handleRemoveSkill(id: string){

    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id 
    ))
  }

  useEffect( ()=> {
    const currentHour = new Date().getHours();

    if(currentHour < 12)
        setGreeting('Good Morning!')
    else if(currentHour >= 12 && currentHour < 18)
        setGreeting('Good afternoon!')
    else 
        setGreeting('Good Evenning!')

  }, [mySkills])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Célio!</Text>
      <Text style={styles.greeting}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button 
        title='Add'
        onPress={handleAddNewSkill} 
      />

      <Text style={[styles.title, {marginVertical: 30}]}>My skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => 
          <SkillCard 
            skill={item.name} 
            onPress={() => handleRemoveSkill(item.id)}
          />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  title: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 8,
  },
  greeting:{
    color: '#FFF'
  }
});
