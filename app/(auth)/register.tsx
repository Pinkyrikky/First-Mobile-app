import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import ThemedButton from '../components/ThemedButton'

const register = () => {
    const handleSubmit =()=>{
        console.log("Registration successful")
    }

  return (
    <View style={styles.container}>
         <Text style={styles.title}>register</Text>
      <ThemedButton onPress={handleSubmit}>Register</ThemedButton>

        <Link href='/login'> <Text>Login instead</Text></Link>
       </View>
  )
}

export default register

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