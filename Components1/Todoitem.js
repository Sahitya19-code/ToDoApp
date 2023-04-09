import { Button,TextInput,Text, View, StyleSheet,ScrollView } from 'react-native';


export default function Todoitem(props){
  return(
    <>
      <View style={styles.todoContainer}>
         <ScrollView>
         {props.item.map((i)=><Text key={i} style={styles.todoitem}> {i} </Text>)}
         </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  todoContainer:{
    flex:5,
    padding:20
  },
  todoitem:{
    margin:8,
    padding:8,
    backgroundColor:'blue',
    color:'white',
    borderRadius:8
  }
});