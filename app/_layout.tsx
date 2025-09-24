import { Link, Slot, Stack } from "expo-router";
import { StyleSheet, Text, View, Image, useColorScheme, Button } from "react-native";
import { useState } from "react";
import { Colors } from "../app/constants/Colors";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const systemScheme = useColorScheme();
  const [override, setOverride] = useState<"light" | "dark" | null>(null);

  const scheme = override ?? systemScheme ?? "light";
  const theme = scheme === "dark" ? Colors.dark : Colors.light;

  return (
    <>
    {/* <StatusBar value="auto"/> */}
    <View style={{ flex: 1, backgroundColor: theme.background }}>
         <View style={{ flex: 1, backgroundColor: theme.background }}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.text,
        }}
      >

       <Stack.Screen
          name="(auth)"
          options={{ headerShown: false }}
        />

         <Stack.Screen
          name="(dashboard)"
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="about"
          options={{ title: "About Us", headerShown: false }}
        />
      </Stack>
    </View>
      <Button
        title={`Switch to ${scheme === "dark" ? "Light" : "Dark"} Mode`}
        onPress={() => setOverride(scheme === "dark" ? "light" : "dark")}
      />
    </View></>
  );
}



