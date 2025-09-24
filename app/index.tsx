import { StyleSheet, Text, View, Image } from "react-native";
import logo from "../assets/krea.png"
import { Link } from "expo-router";
import ThemedView from "./ThemedView";

const Home = () =>{
    return (
        <ThemedView style={styles.container}>
            <Image source={logo} style={{width:"100%", height:100}}/>
            <Text style={styles.title}>Home</Text>
            <Text style={{marginTop:20}}>im home</Text>

            <View style={styles.card}>
                <Text style={{ color: "white",}}>hello, im a card!!!</Text>

                <Link href='/register'>register</Link>
                <Link href='/login'>login</Link>
                <Link href='/profile'>Profile</Link>
            </View>
        </ThemedView>
    )
}

export default Home
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