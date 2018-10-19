import React from 'react';
import { Text, WebView } from 'react-native';

const Curso = ({ navigation }) => (
    <WebView
        source={{ uri: navigation.state.params.item.url }}
    />
);

Curso.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item.nome
});
    

export default Curso;
