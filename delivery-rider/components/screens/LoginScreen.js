import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginUrl } from "../config/Api";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("staff1@gmail.com");
  const [password, setPassword] = useState("test");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const userId = await AsyncStorage.getItem("@user_id");
      if (userId) {
        navigation.navigate("OrderList");
      }
    } catch (error) {
      console.log("Error retrieving user ID:", error);
    }
  };
  const handleLogin = async () => {
    try {
      const response = await fetch(
        LoginUrl + "username=" + username + "&password=" + password
      );

      if (response.ok) {
        const responseData = await response.json();
        const userId = responseData.user.id;
        // console.log(userId);
        // Store the user_id in AsyncStorage
        await AsyncStorage.setItem("@user_id", String(userId));

        // Navigate to the Home screen
        navigation.navigate("OrderList");
      } else {
        console.log("Login failed. Please try again.");
      }
    } catch (error) {
      setError("These credentials do not match our records.");
      console.log("Error occurred during login:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.error}>{error}</Text>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  error: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default LoginScreen;
