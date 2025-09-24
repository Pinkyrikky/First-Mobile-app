import { Link } from "expo-router";
import { StyleSheet, Text, View, Image, useColorScheme } from "react-native";
import { Colors } from "./constants/Colors";

const About = () =>{
     const colorScheme = useColorScheme() ?? "light"
    ;
      const theme = Colors[colorScheme] 
      
    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            
                <Text style={{ color: "",}}>hello, im a card!!!</Text>
                <Link href="/">back</Link>
        </View>
    )
}

export default About
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
    card:{
        backgroundColor: "red",
       
        borderRadius:20,
        padding:20
    }
})