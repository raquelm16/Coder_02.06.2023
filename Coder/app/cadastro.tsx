import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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

      <Text style={styles.sobre}>Cadastro</Text>
<View style={styles.coluna}>
     <View style={styles.forms}>
      <input type="text" placeholder="Nome" style={styles.input}/>
      <input type="text" placeholder="Email" style={styles.input}/>
      <input type="text" placeholder="Data de nascimento" style={styles.input}/>
      <input type="text" placeholder="CPF" style={styles.input}/>
      </View>
</View>
      <Link href="/home" style={styles.botao}>Salvar</Link>


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
},
input:{
  borderRadius:10,
  width:200,
  padding:5,
  border:'2px solid #c3c3c3',
  margin:5
},
forms:{
  flexDirection:'column',
},
coluna:{
  flexDirection:'row',
  justifyContent:'center',
  paddingTop:25
}


});















   