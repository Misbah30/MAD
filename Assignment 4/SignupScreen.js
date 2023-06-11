
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 const [showPassword, setShowPassword] = useState(false);
 
  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert('Error, Passwords do not match.');
      return;
    }

    try {
      const userData = await AsyncStorage.getItem('userData');
      const users = userData ? JSON.parse(userData) : [];

      const user = users.find(user => user.email === email);

      if (user) {
        alert('Error, Email already exists.');
      } else {
        const newUser = { name, email, password };
        users.push(newUser);

        await AsyncStorage.setItem('userData', JSON.stringify(users));
        alert('Success, Signup successful. Please login.');
        navigation.navigate('Login');
      }
    } catch (error) {
      console.log('Error during signup:', error);
    }
    
  };
 const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
      />

       <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.passwordToggle} onPress={toggleShowPassword}>
          <MaterialIcons
            name={showPassword ? 'visibility' : 'visibility-off'}
            size={24}
            color="#888"
          />
        </TouchableOpacity>
      </View>
     
 <View style={styles.confirmPasswordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="confirmPassword"
          secureTextEntry={!showPassword}
          onChangeText={text => setConfirmPassword(text)}
        />
        <TouchableOpacity style={styles.passwordToggle} onPress={toggleShowPassword}>
          <MaterialIcons
            name={showPassword ? 'visibility' : 'visibility-off'}
            size={24}
            color="#888"
          />
        </TouchableOpacity>
      </View>
      

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#00203fff',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
   passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 8,
    paddingHorizontal: 8,
    
  },
  passwordInput: {
    flex: 1,
  },
  passwordToggle: {
    padding: 8,
  },
   confirmPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 8,
    paddingHorizontal: 8,
    
  },
 
  button: {
    backgroundColor: '#00203fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SignupScreen;
