import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import React from 'react';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando...</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}> 
      <Header title="Impasse" /> 
      <ScrollView style={styles.container}>
        {camisas.map((camisa, index) => (
          <CamisaItem key={index} camisa={camisa} />
        ))}
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text> 
    </View>
  );
};

const CamisaItem = ({ camisa }) => {
  return (
    <View style={styles.camisaItem}>
      <Image source={camisa.img} style={styles.camisaImagem} />
      <Text style={styles.camisaNome}>{camisa.nome}</Text>
      <Text style={styles.camisaTamanho}>Tamanho: {camisa.tamanho}</Text>
      <Text style={styles.camisaCor}>Cor: {camisa.cor}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    padding: 20, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#3498db',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Inter_400Regular',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20, 
    marginTop: 1,  
  },
  camisaItem: {
    marginBottom: 25,
    borderWidth: 0.75,
    borderColor: '#ddd',
    padding: 20,
    alignItems: 'center',
    borderRadius: 40,
  },
  camisaImagem: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  camisaNome: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Inter_400Regular',
  },
  camisaTamanho: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  camisaCor: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const camisas = [
  {
    nome: 'Camisa New Era',
    tamanho: 'GG',
    cor: 'Branco',
    img: { uri: 'https://images.tcdn.com.br/img/img_prod/712724/camiseta_millionaireboy_new_york_branca_323_1_e6d61226932abbdf73c649cdd52a9766.png' },
  },
  {
    nome: 'Camisa Hype x',
    tamanho: 'G',
    cor: 'Preto',
    img: { uri: 'https://images.tcdn.com.br/img/img_prod/712724/camiseta_millionaireboy_hype_street_209_1_40dc1061b36fb8f77474bb59f889ed55.png' },
  },
  {
    nome: 'baseball Classic',
    tamanho: 'G',
    cor: 'Branco',
    img: {uri: 'https://media.istockphoto.com/id/938415082/pt/vetorial/specification-baseball-t-shirt-mockup-isolated-on-white-background-a-sample-design-elements.jpg?s=612x612&w=0&k=20&c=swyv5oA6g-BPmU3oxJzBbr-PJUzSIB_W-8x-BsQT6Xk='}
  },
];