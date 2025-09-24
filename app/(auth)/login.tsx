import { Link } from 'expo-router'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import ThemedButton from '../components/ThemedButton'


const login = () => {
    const handleSubmit =()=>{
        console.log("login successful")
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>login</Text>
      <Text style={{color:'white'}}>Login</Text>
      <ThemedButton onPress={handleSubmit}>Login</ThemedButton>
     <Link href='/register'> <Text>register instead</Text></Link>
    </View>
  )
}

export default login

const styles = StyleSheet.create({
     container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        fontWeight:"bold",
        fontSize:18,
        color:"red"
    },
   
})