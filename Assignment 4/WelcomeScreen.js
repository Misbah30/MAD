
import React from 'react';
import { Button,View, Text, TextInput, StyleSheet,} from 'react-native';


function Welcome(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To My App</Text>
      
 

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
  
});
export default Welcome;
