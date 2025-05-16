import{View,Text,StyleSheet} from 'react-native'

function Pet({pets}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}> Pet name {pets.name} </Text> 
            <Text style={styles.text}> Pet age {pets.age} </Text>  
            <Text style={styles.text}> Pet tipo {pets.type} </Text>         
        </View>
    )
}

export default Pet

let styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:50,
      paddingHorizontal:10,
    },
    text:{
        fontSize: 20,
    }
  })


import{View,Text,StyleSheet} from 'react-native'

function User({user}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}> Username {user.name} </Text> 
            <Text style={styles.text}> User age {user.age} </Text>  
            <Text style={styles.text}> User email {user.email} </Text>         
        </View>
    )
}

export default User

let styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:50,
      paddingHorizontal:10,
    },
    text:{
        fontSize: 20,
    }
  })
