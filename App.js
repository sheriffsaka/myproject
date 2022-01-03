//Created by Saka Sheriff
import React, { useState }from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Header from './components/header';
import AddTodo from './components/addTodo';
import TodoItem from './components/todoitem';


export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Learn React Native', key: '1'},
    {text: 'Create an App', key: '2'},
    {text: 'Publish the App', key: '3'},
    {text: 'Learn Java for App Development', key: '4'}, 
    {text: 'Practice often to perfect learning', key: '5'},
    {text: 'Push my projects to GitHub portfolio', key: '6'},
    {text: 'Get job as an Intern or Junior Developer', key: '7'}

  ]);
    //This part is used to remove unwanted items. It only show
    // the ones that we want.
    const pressHandler = (key) => {
      setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.key != key);
      });
    }

    const submitHandler = (text) =>{

      if (text.length > 3){
        setTodos((prevTodos) => {
          return [
            { text: text, key: Math.random().toString() },
            ...prevTodos
          ];
      });
      } else { 
        Alert.alert('OOPS!', 'Todos must be more than 3 letters long.', [
          {text: 'OK', onPress: () => console.log('alert closed')}
        ]);
      }
      
    }
  
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      }} >

        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler} />
            <View style={styles.list}>
                <FlatList 
                  data={todos}
                  renderItem={({ item }) => (
                    <TodoItem item={item} pressHandler={pressHandler} />
                  )}
                />
            </View>
          </View>
          <View><Text style={styles.author}>Designed By: SacTech</Text></View>
        </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding: 40,
    flex: 1,
  },
  list:{
    marginTop: 20,
    flex: 1,

  },
  author:{
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20
  }

  

});
