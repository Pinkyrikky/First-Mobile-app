import { Link, Slot, Stack, Tabs } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useColorScheme,
  Button,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

export default function DashboardLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "white",
            paddingTop: 10,
          },
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "black",
        }}
      >
        <Tabs.Screen
          name="about"
          options={{
            title: "About",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={18}
                name={focused ? "newspaper" : "newspaper-outline"}
                color={focused ? "red" : "black"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="latest"
          options={{
            title: "Latest",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={18}
                name={focused ?"newspaper" : "newspaper-outline"}
                color={focused ? "red" : "black"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={18}
                name={focused ? "person" : "person-outline"}
                color={focused ? "red" : "black"}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
