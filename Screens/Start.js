import * as React from 'react';
import { Image,Text, View, StyleSheet,TextInput,Button } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App({ navigation }) {
  function toTodo(){
    navigation.navigate('Main');
  }
  return (
    <View style={styles.container}>
      <View style={styles.img}>
      <Image
          style={styles.kmit}
          source={{uri:'https://i.ytimg.com/vi/SEmpCPFQIno/maxresdefault.jpg'}}
      />
      <Image
          style={styles.todologo}
          source={{uri:'https://www.stock-app.info/media/wp-content/uploads/2022/06/ToDo-%E3%83%AA%E3%82%B9%E3%83%88-%E7%B6%9A%E3%81%8B%E3%81%AA%E3%81%84.jpg'}}
      />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.textinput} placeholder="Enter your name"/>
      </View>
      <View style={styles.button}>
        <Button title="Continue" onPress={toTodo}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    paddingHorizontal:10
  },
  kmit:{
    paddingTop:150,
    justifyContent: 'center',
    width:'40%',
    height:'30%'
  },

  
  todologo:{
    width:'50%',
    height:'30%'
  }
});
