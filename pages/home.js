import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
export default function Home() {

  return (
<View style={styles.container}>


      <Text style={styles.paragraph}>Cardápio</Text>

  <ScrollView>


    <View style={styles.cxfoto}>
      <Image style={styles.img}
      resizeMode="contain"
      source={require("../assets/pizzacherno.jpg")}/>
      <Text style={styles.subtitulo}>{'\n'}Pizza de Chernobyl{'\n'}</Text>
      <Text style={styles.subtitulo2}> Preço: R$ 59,00{'\n'}</Text>
      <Text style={styles.descri}>     Ава́рия на Черно́быльской АЭС 26 апреля 1986 года (также известна как катастрофа на Чернобыльской АЭС, Чернобыльская авария, Чернобыльская катастрофа или просто Чернобыль) — разрушение реактора четвёртого энергоблока Чернобыльской атомной электростанции, расположенной около города Припять (Украинская ССР, ныне — Украина).{'\n'}{'\n'}</Text>


      <View style={styles.cxCont}>
      <TouchableOpacity style={styles.botao}>
      <Text style={styles.textoBotao}>Quero</Text>
      </TouchableOpacity>
      </View>

    </View>
 

    <View style={styles.cxfoto}>

      <Image style={styles.img}
      resizeMode="center"
      source={require("../assets/pizzagrau.jpg")}/>
      <Text style={styles.subtitulo}>{'\n'}Pizza Especial Grau na Moto{'\n'}</Text>
      <Text style={styles.subtitulo2}>Preço: R$ 95,50{'\n'}</Text>
      <Text style={styles.descri}>     O entregador deu grau na sua rua.{'\n'}{'\n'}</Text>


      <View style={styles.cxCont}>
      <TouchableOpacity style={styles.botao}>
      <Text style={styles.textoBotao}>Quero</Text>
      </TouchableOpacity>
      </View>

    </View>

    <View style={styles.cxdoBotao}>
      <TouchableOpacity style={styles.botao}>
      <Text style={styles.textoBotao}>Finalizar Pedido</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.linha} />

    <Text style={styles.textoFim}> © 2023 Qualquer Coisa Inc. Nenhum direito reservado. Foi atividade da escola ™️ </Text>

  </ScrollView>
</View>
  );
}


const styles = StyleSheet.create({

container:{
  flex: 1,
  backgroundColor: '#FFFFFF',
  justifyContent: 'center',
  alignItems: 'center',
},

paragraph: {
  marginTop: 19,
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  paddingTop: 10
},

cxfoto:{
  flex: 1,
  backgroundColor: 'black',
  margin: 40,
  justifyContent: 'center',
  padding: 20,
  alignItems: "center",
  borderRadius: 15,
  width: 320,
},

img:{
  width: 300,
  height: 200,
  borderRadius: 8,
  padding: 10,
  marginTop: 5,
},

subtitulo:{
  fontSize: 20,
  fontWeight: 'bold',
  color: '#FF2D2D'
},

subtitulo2:{
  backgroundColor: '#08EB00',
  paddingTop: 20,
  fontSize: 15,
  padding: 7,
  borderRadius: 20,
  marginBottom: 20,
  textAlign: 'justify'
},

descri:{
  color: '#08EB00',
  textAlign: 'justify',
  lineHeight: 24,
  fontWeight: 'bolder'
},

cxCont:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},

cxdoBotao:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 12
},

botao:{
  backgroundColor: '#08EB00',
  padding: 15,
  borderRadius: 8
},

textoBotao:{
  color: '#black',
  fontSize: 18,
  fontWeight: 'bold',
  fontFamily: 'Roboto'
},

linha:{
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  marginVertical: 15,
},

textoFim: {
  fontSize: 10,
  fontWeight: 'bold',
},

});