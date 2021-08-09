import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Home from './Component/Home'

function App() {

  const [nativeText, setNativeText] = useState('My React Native App')

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{nativeText}</Text>
      <Button title="ClickMe" onPress={() => Alert.alert('Testing Native Button')}/>
      <Button title="Change Text" onPress={() => {setNativeText('Text Changed')}}/>
      <Button title="Revert Text" onPress={() => {setNativeText('My React Native App')}}/>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;