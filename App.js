import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

import User from './src/User';
import Pet from './src/Pet';

  function App() {

    const[users,setUsers] = useState([
      {name: 'Victor', age: 25, email:'victor@gmail.com'},
      {name: 'Paulo', age: 30, email:'paulo@gmail.com'},
      {name: 'Cesar', age: 45, email:'cesar@gmail.com'},
    ])

    const [pets, setPets] = useState([
      {name: 'Rex', age: 5, type: 'Cachorro' },
      {name: 'Mimi', age: 3, type: 'Gato' },
      {name: 'Tico', age: 2, type: 'Pássaro' },
    ]);


  return (
    <View style={styles.container}>
        <FlatList
        data={users}
        renderItem={({item}) => <User user={item}/>}/>

        <FlatList
        data={pets}
        renderItem={({item}) => <Pet pets={item}/>}/>
    </View>
  );
}


export default App

let styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:50,
    paddingHorizontal:10,
  },
  text:{
    fontSize:20,
  }
})
