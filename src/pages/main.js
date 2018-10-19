import React, {Component} from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import api from '../service/api';

export default class Main extends Component {
  static navigationOptions = {
    title: "Sematec"
  }

  state = {
    cursos: [],
  }

  componentDidMount() {
    this.buscarCursos();
  }

  buscarCursos = async () => {
    const response = await api.get("/cursos");
    
    this.setState({ cursos: response.data });
  }

  renderItem = ({ item }) => (
    <View style={styles.containerItem}>
      <Text style={styles.nome}>{ item.nome }</Text>
      <Text style={styles.grau}>{ item.grau_academico}</Text>

      <TouchableOpacity 
        style={styles.botaoAcessar} 
        onPress={() => {
          this.props.navigation.navigate('Curso', { item });
        }}>
        <Text style={styles.textoBotaoAcessar}>Acessar</Text>
      </TouchableOpacity>
    </View>
  )
  

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.lista}
          data={this.state.cursos}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  lista: {
    padding: 20,
  },
  containerItem: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  grau: {
    fontSize: 16,
    marginTop: 5,
  },
  botaoAcessar: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#DA552F",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  textoBotaoAcessar: {
    fontSize: 16,
    color: "#DA552F",
    fontWeight: "bold"
  }
  
  
});
