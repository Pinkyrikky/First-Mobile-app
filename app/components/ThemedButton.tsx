import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  PressableProps,
  StyleProp,
  ViewStyle,
} from "react-native";

type ThemedButtonProps = PressableProps & {
  children: React.ReactNode;
  style?: object;
};

const ThemedButton: React.FC<ThemedButtonProps> = ({ style, children, ...props }) => {
  return (
    <Pressable
     style={({ pressed }) => [
        styles.btn,
        pressed && styles.pressed,
        style as StyleProp<ViewStyle>, // ✅ cast to keep TS happy
      ]}
      {...props}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBlock:20
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
