import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Link} from "expo-router"
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.logo}>
      <img style={styles.icon} src={'../assets/icon.png'} alt="Image" />
      <Text style={styles.title}>Coder</Text>
      </View>

   <Text style={styles.parag}>Seja bem-vindo ao Coder! {'\n'} Somos uma plataforma de cursos de programação 
   {'\n'} Para saber mais, clique em 'Sobre'. {'\n'} Para se cadastrar, clique no botão 'cadastre-se'</Text>
  
    <Link href="/sobre" style={styles.botao}>Sobre</Link>
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
  justifyContent:'center'
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










sobre1: {
  marginTop: 20,
  borderRadius: 20,
  padding:7,
  width:220,
  backgroundColor:'#ffff',
  borderWidth: 2,
  borderColor:'#c3c3c3',
  flexDirection:'row',
  alignSelf:'center',
  flex:1,
  fontSize:17,
  fontWeight:'500',
  textAlign:'center'
},


dockitem: {
    width: "10%",
    height: "10%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FF0000",
},
dock: {
    backgroundColor: "#4f58c4",
    flexDirection: 'row',
    width: "100%",
    height: '9%',
    bottom: 0,
    position: "absolute",
},
body: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
},

  skoobtitle: {
    width:160,
    height:60,
    flexDirection:'row',
    alignSelf:'center',
  },
  
 // textEntrar: {
 //   flex:1,
 //   fontSize:17,
 //   color:'#0b86d0',
 //   fontWeight:'500',
 //   textAlign:'center'
 // },
  iconsview:{
flexDirection:'row',
alignSelf:'center',
marginTop: 17
},
icons: {
width:45,
height:40,
margin:10
},
p1: {
margin: 24,
fontSize: 17,
fontWeight: 'bold',
textAlign: 'center',
},
p2: {
fontSize:17,
textAlign:'center',
marginTop:-22
},
fotoview:{
flexDirection:'row',
alignSelf:'center',
marginTop:18
},
foto: {
width:50,
height:50,
borderRadius:50/2,
border:'3px solid #0b86d0',
margin:8
},
p3: {
textAlign:'center',
fontSize:17,
marginTop:15
}
});
