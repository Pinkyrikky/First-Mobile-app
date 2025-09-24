import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <View style={styles.container}>
             <Text style={styles.title}>profile</Text>
    </View>
  )
}

export default profile

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