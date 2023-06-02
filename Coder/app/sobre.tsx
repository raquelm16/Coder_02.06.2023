import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Link} from "expo-router"
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <Link href="/" style={styles.voltar}>Voltar</Link>

      <View style={styles.logo}>
      <img style={styles.icon} src={'../assets/icon.png'} alt="Image" />
      <Text style={styles.title}>Coder</Text>
      </View>

   <Text style={styles.sobre}>Sobre</Text>
   <Text style={styles.parag}>Aqui você encontrará cursos para todos os níveis. {'\n'} Você não precisa ir presencialmente à um local. Somos online. 
   {'\n'} Você precisará se cadastrar para conseguir fazer nossos cursos. {'\n'} Desative a função "receber emails" mais tarde, se quiser.</Text>
  
    
    <Link href="/cadastro" style={styles.botao}>Cadastre-se</Link>
 

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 justifyContent: 'center',
backgroundColor: '#ffff',
padding: 8,
},
icon:{
  width: 155,
  height: 120,
  flexDirection:'row',
  alignSelf:'center'
},
logo:{
  flexDirection:'column',
  justifyContent:'center',
},
title: {
    fontSize: 22,
    fontWeight: '500',
    flexDirection:'row',
    alignSelf:'center',
    paddingTop:10,
},
parag:{
  textAlign:'center',
},
botao:{
  borderRadius: 20,
  backgroundColor:'#c3c3c3',
  width:180,
  textAlign:'center',
  padding:5,
  alignSelf:'center',
  marginTop: 20,
  fontWeight: '500'
},
voltar:{
  fontWeight:'bold',
  //flex:1,
  //justifyContent:'flex-start'
},
sobre:{
  fontSize:25,
  fontWeight:'400',
  textAlign:'center',
  paddingTop:25,
  paddingBottom:15
}


});
