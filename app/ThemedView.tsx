import { Link } from "expo-router";
import { StyleProp, View, ViewProps, ViewStyle, useColorScheme } from "react-native";
import { Colors } from "./constants/Colors";
import { ReactNode } from "react";


interface ThemedViewProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

const ThemedView = ({style,...props}:ThemedViewProps) =>{
     const colorScheme = useColorScheme() ?? "light"
    ;
      const theme = Colors[colorScheme] 
      
    return (
        <View style={[{backgroundColor: theme.background}, style]}
        {...props}
        />
    )
}

export default ThemedView
