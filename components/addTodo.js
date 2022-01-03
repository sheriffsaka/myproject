import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function AddTodo({ submitHandler }){
    //Declaring a constant variable that will be used to get data from user
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder='New Todo...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='Add Todo' color='skyblue' />
        </View> 
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});