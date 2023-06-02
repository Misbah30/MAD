import React from 'react';
import { Button,View, Text, TextInput, StyleSheet,TouchableOpacity } from 'react-native';


function SignupScreen({navigation }){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
 
<TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('wel')}
      >
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'#00203fff',
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
// Rest of the code remains the same
