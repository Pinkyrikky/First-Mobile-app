import { Link, Slot, Stack } from "expo-router";
import { StyleSheet, Text, View, Image, useColorScheme, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  

  return (
    <>
    <StatusBar style="auto"/>
    
      <Stack
        screenOptions={{
          headerShown: false, animation: "none"
        }}
     />
     </>
      
  );
}



