import * as React from 'react';
import { Button,TextInput, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useState }from 'react';
// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import Todoinput from '../Components1/Todoinput';
import Todoitem from '../Components1/Todoitem';
export default function App() {
  const [todo,setTodo]=useState([]);
   function addTodoHandler(enteredTodoText){
    //console.log(enteredTodoText);
    setTodo((abc)=>[
      ...abc,enteredTodoText
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <Todoinput onAddTodo={addTodoHandler}/>
      <Todoitem item={todo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:10
  },
});
