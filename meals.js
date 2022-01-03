import React, { useState }from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, FlatList, TouchableOpacity } from 'react-native';
// import { TextInput } from 'react-native-web';

export default function App() {
  
  const [meals, setMeals] = useState([
    {name: '1 Chicken', id: '1'},
    {name: '2 Chips', id: '2'},
    {name: '3 Chicken Pepper', id: '3'},
    {name: '6 Hot Wings', id: '4'},
    {name: 'Doughnut', id: '5'},
    {name: 'Curry Meal', id: '6'},
    {name: 'Meat-Pie', id: '7'},
    {name: '2 Cup Cake', id: '8'},
    {name: '3 Fish Pie', id: '9'},
    {name: 'Shawarma', id: '10'},
    {name: 'Sausage', id: '11'},
    {name: 'Rice-Fish', id: '13'},
  ]);

const pressHandler = (id) => {
  console.log(id);
  setMeals((prevMeals) => {
    return prevMeals.filter(meal => meal.id != id)
  })
}
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Welcome to Exclusive Resto</Text>
      </View>

      <FlatList 
      numColumns={2}
        keyExtractor={(item) =>item.id}
        data={meals}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )} 
      />
      {/* <View style={styles.body}> */}
        {/* <ScrollView>
          { meals.map((item) => {
              return(
                <View key={item.key}> 
                  <Text style={styles.item}>{item.name}</Text>
                </View>
              )
            })
          }
        </ScrollView> */}
        

        <View>
          <Button title='Select Meals' />
        </View>
      {/* </View> */}
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
  header: {
    marginTop: 40,
    backgroundColor: 'yellow',
    padding: 20,
    fontWeight: 'bold',
    fontSize: 40

  },
  boldText: {
    fontWeight: 'bold',
  },
  body:{
    backgroundColor: 'white',
    textAlign: 'center',
  },
  buttonContainer:{
    marginTop: 20,
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    borderRadius: 5
  },
  item:{
    
    marginTop: 30,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 12,
    marginTop: 24,
    marginHorizontal: 10
  }

});
