import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,Button,TextInput,Alert, Pressable } from 'react-native';

export default function App() {
  const [wight,setWight] = useState(0);
  const [height,setHeight] = useState(1)

  const calBmi = ()=>{
    if (wight == 0 || height == 1) {
      Alert.alert("please enter your data correctly!")
    }else{
      result =parseFloat((wight)/((Math.sqrt(height)))).toFixed(2);
    if (result<18.5) {
      Alert.alert('BMI Applition', `your BMI is ${result}\n\nit's underWighted`);
    }
    else if (result<24.9 && result >18.5) {
      Alert.alert('BMI Applition', `your BMI is ${result}\n\nit's normal`);
    }
    else if (result<30 && result >24.9) {
      Alert.alert('BMI Applition', `your BMI is ${result}\n\nit's overwighted`);
    }
    else if (result<30 && result >25) {
      Alert.alert('BMI Applition', `your BMI is ${result}\n\nit's overWaeight`);
    }
    else if (result<35 && result >30) {
      Alert.alert('BMI Applition', `your BMI is ${result}\n\nit's obsed`);
    }
    else{
      Alert.alert('BMI Applition', `your BMI is ${result}\n\nit's extra obsed`);
    }
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>welcom in BMI application!</Text>
      <View style={styles.body}>
        <View style={styles.weight}>
          <Text style={styles.label}>weight</Text>
          <TextInput
          placeholder='enter your weight in KG'
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(val)=>setWight(val)}
          ref={input => { this.textInput = input }}
           />
        </View>
        <View style={styles.height}>
          <Text style={styles.label}>height</Text>
          <TextInput
          placeholder='enter your height in CM'
          keyboardType='numeric'
          style={styles.input}
          onChangeText={(val)=>setHeight(val)}
          ref={input => { this.textInput = input }}
           />
        </View>
        <Pressable style={styles.btns} >
          <View margin={20}>
          <Button
           title='calculate'
          padding={10}
          margin={20}
          color={'#717D7E'}
          onPress={calBmi}/>
          </View>
         <View margin={20}>
         </View>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0ECE7',
    alignItems: 'center',
    justifyContent:'center',
    marginTop:25,
    paddingTop:20,
  },
  headText:{
    textTransform:'uppercase',
    fontWeight:'bold',
    },
    input:{
      borderWidth:1,
      borderColor:'#979A9A',
      padding:10,
    },
    height:{
      marginTop:20,
      marginBottom:20,
    },
    weight:{
      marginTop:20,
      marginBottom:20,
    },
    label:{
      textTransform:'capitalize',
      marginTop:5,
      marginBottom:5,
      paddingBottom:5,
      paddingTop:5,
      color:'#424949'
    }
});
