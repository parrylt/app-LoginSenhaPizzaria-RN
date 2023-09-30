import { useState, useEffect } from 'react';

import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Firebase from "../firebase";

export default function Login ({navigation}){

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState('');


function Dados (user){
  setUser (user);
  if (initializing) setInitializing (false);
}

function Login ()
{
  Firebase.auth().signInWithEmailAndPassword(email, senha).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert (errorCode, errorMessage);
  })
}

useEffect (()=>{
  Firebase.auth().onAuthStateChanged(function(user){
    setUser(user);
    if (initializing) setInitializing (false);
{
  //alert ("Ok");
}
  });

},[])

    if (user){
      alert ("Acesso Liberado"+user.uid);
      return navigation.navigate ('Home');
    }
    else{
   // alert ("Não permitido");
   // console.log('não tá legal');
    }


  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/pizzafeia.jpg')} style={styles.logo} />

      <Text style={styles.textoEntrada}> Pizzaria Cazzo Mille</Text>

      <TextInput
        placeholderTextColor={'#fff'}
        style={styles.textoInput}
        placeholder="Digite o e-mail"
        onChangeText={(email) => setEmail(email)}
        value={email}
      />

      <TextInput
        secureTextEntry={true}
        placeholderTextColor={'#fff'}
        style={styles.textoInput}
        placeholder="Digite a senha"
        onChangeText={(senha) => setSenha(senha)}
        value={senha}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          Login();
        }}>
        <Text style={styles.textoBotao}> Acessar </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    padding: 8,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 150,
  },
  textoEntrada: {
    marginTop: 55,
    marginBottom: 35,
    fontSize: 25,
    color: '#4B0082',
    fontWeight: 'bold',
    paddingVertical: 14,
  },
  textoInput: {
    width: 250,
    paddingLeft: 10,
    backgroundColor: '#000',
    color: '#fff',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 10,
  },
  botao: {
    width: 200,
    backgroundColor: '#00008B',
    height: 40,
    marginTop: 35,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 30,
    color: '#51E9ED',
    fontWeight: 'bold',
  },
});