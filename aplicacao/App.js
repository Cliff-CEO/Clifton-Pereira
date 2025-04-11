// App.js

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import React, { useState } from 'react';
import { FontAwesome5, MaterialIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = (index) => {
    if (favoritos.includes(index)) {
      setFavoritos(favoritos.filter(i => i !== index));
    } else {
      setFavoritos([...favoritos, index]);
    }
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Impasse" />
      <ScrollView contentContainerStyle={styles.container}>
        {camisas.map((camisa, index) => (
          <View key={index}>
            <Image source={camisa.img} style={styles.camisaImagem} />
            <View style={styles.card}>
              <Text style={styles.title}>{camisa.nome}</Text>
              <Text style={styles.description}>{camisa.descricao}</Text>
            </View>

            <TouchableOpacity style={styles.card}>
              <View style={styles.row}>
                <MaterialIcons name="straighten" size={24} color="black" style={styles.iconVector} />
                <Text style={styles.label}> Tamanho: </Text>
                <Text style={styles.description}>{camisa.tamanho}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <View style={styles.row}>
                <FontAwesome5 name="palette" size={24} color="black" style={styles.iconVector} />
                <Text style={styles.label}> Cor: </Text>
                <Text style={styles.description}>{camisa.cor}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <View style={styles.row}>
                <Entypo name="price-tag" size={24} color="black" style={styles.iconVector} />
                <Text style={styles.label}> Valor: </Text>
                <Text style={styles.description}>{camisa.valor}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <View style={styles.row}>
                <MaterialCommunityIcons name="tshirt-crew" size={24} color="black" style={styles.iconVector} />
                <Text style={styles.label}> Tecido: </Text>
                <Text style={styles.description}>{camisa.tecido}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.card, { backgroundColor: favoritos.includes(index) ? '#d1e7dd' : '#f8d7da' }]}
              onPress={() => toggleFavorito(index)}
            >
              <Text style={styles.title}>
                {favoritos.includes(index) ? 'Remover dos Favoritos 💔' : 'Adicionar aos Favoritos ❤️'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

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
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  camisaImagem: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconVector: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Inter_400Regular',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
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
    descricao: 'Essa camisa branca da New Era é perfeita para quem busca conforto e estilo. Seu design minimalista combina com qualquer look, e o tecido leve garante uma sensação agradável ao longo do dia.',
    valor: 'R$ 150,00',
    tecido: 'Tweed',
    img: { uri: 'https://images.tcdn.com.br/img/img_prod/712724/camiseta_millionaireboy_new_york_branca_323_1_e6d61226932abbdf73c649cdd52a9766.png' },
  },
  {
    nome: 'Camisa Hype x',
    tamanho: 'G',
    cor: 'Preto',
    descricao: 'A Camisa Hype X traz um visual ousado e moderno, com corte urbano e detalhes que remetem à cultura streetwear. Ideal para quem curte atitude e presença em qualquer ocasião casual.',
    valor: 'R$ 180,00',
    tecido: 'Linho',
    img: { uri: 'https://images.tcdn.com.br/img/img_prod/712724/camiseta_millionaireboy_hype_street_209_1_40dc1061b36fb8f77474bb59f889ed55.png' },
  },
  {
    nome: 'Baseball Classic',
    tamanho: 'G',
    cor: 'Branco',
    descricao: 'Inspirada nos uniformes tradicionais de baseball americano, essa camisa une nostalgia e modernidade. Com detalhes sutis e corte confortável, é perfeita para um visual retrô e estiloso.',
    valor: 'R$ 160,00',
    tecido: 'Poliamida',
    img: { uri: 'https://media.istockphoto.com/id/938415082/pt/vetorial/specification-baseball-t-shirt-mockup-isolated-on-white-background-a-sample-design-elements.jpg?s=612x612&w=0&k=20&c=swyv5oA6g-BPmU3oxJzBbr-PJUzSIB_W-8x-BsQT6Xk=' },
  },
  {
    nome: 'Camisa Oversized Grafite',
    tamanho: 'M',
    cor: 'Cinza escuro',
    descricao: 'Essa camisa oversized na cor grafite oferece um caimento solto e moderno. O tecido premium proporciona toque macio e alta durabilidade, perfeita para compor looks urbanos e descolados.',
    valor: 'R$ 140,00',
    tecido: 'Algodão egípcio',
    img: { uri: 'https://www.fico.com.br/dw/image/v2/BFCG_PRD/on/demandware.static/-/Sites-masterCatalog_Lunelli/default/dwb7465e57/large/fico-1.48671-018995-D1.jpg?sw=900&sfrm=jpg&sm=fit&q=80' },
  },
  {
    nome: 'New Balance',
    tamanho: 'G',
    cor: 'Azul',
    descricao: 'Estampada com arte urbana vibrante, essa camisa é para quem ama originalidade. Ideal para quem curte moda com personalidade, ela transforma qualquer look básico em algo criativo e marcante.',
    valor: 'R$ 200,00',
    tecido: 'Poliéster reciclado',
    img: { uri: 'https://artwalk.vtexassets.com/arquivos/ids/484000/M4151-2-400-1.jpg?v=638459359703330000' },
  },
];
