import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
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
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2436/2436849.png' }} style={styles.icon} />
                <Text style={styles.label}> Tamanho: </Text>
                <Text style={styles.description}>{camisa.tamanho}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <View style={styles.row}>
                <Image source={{ uri: 'https://cdn.prod.website-files.com/665858d6442988bba748fa67/6686f48b418b55ef57faecf9_capa_c33f26b009f302fd97b25c8ad74c9801_2000.png' }} style={styles.icon} />
                <Text style={styles.label}> Cor: </Text>
                <Text style={styles.description}>{camisa.cor}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <View style={styles.row}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2926/2926236.png' }} style={styles.icon} />
                <Text style={styles.label}> Valor: </Text>
                <Text style={styles.description}>{camisa.valor}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <View style={styles.row}>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRszSzu6PLwros8t5W4s_8BZdFcKkwUJe2hfA&s' }} style={styles.icon} />
                <Text style={styles.label}> Tecido: </Text>
                <Text style={styles.description}>{camisa.tecido}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
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
  icon: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'Inter_400Regular',
  },
  descricao: {
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
    descricao: 'Camisa branca com logo New Era, ideal para uso casual.',
    valor: 'R$ 150,00',
    tecido: 'Tweed',
    img: { uri: 'https://images.tcdn.com.br/img/img_prod/712724/camiseta_millionaireboy_new_york_branca_323_1_e6d61226932abbdf73c649cdd52a9766.png' },
  },
  {
    nome: 'Camisa Hype x',
    tamanho: 'G',
    cor: 'Preto',
    descricao: 'Camisa preta com estampa Hype x, perfeita para eventos e shows.',
    valor: 'R$ 180,00',
    tecido: 'Linho',
    img: { uri: 'https://images.tcdn.com.br/img/img_prod/712724/camiseta_millionaireboy_hype_street_209_1_40dc1061b36fb8f77474bb59f889ed55.png' },
  },
  {
    nome: 'Baseball Classic',
    tamanho: 'G',
    cor: 'Branco',
    descricao: 'Camisa branca estilo baseball clássica, confortável e estilosa.',
    valor: 'R$ 160,00',
    tecido: 'poliamida',
    img: { uri: 'https://media.istockphoto.com/id/938415082/pt/vetorial/specification-baseball-t-shirt-mockup-isolated-on-white-background-a-sample-design-elements.jpg?s=612x612&w=0&k=20&c=swyv5oA6g-BPmU3oxJzBbr-PJUzSIB_W-8x-BsQT6Xk=' },
  },
];