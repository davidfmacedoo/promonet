import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Cabeçalho animado */}
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Criar uma conta</Text>
            </Animatable.View>

            {/* Formulário animado */}
            <Animatable.View animation="fadeInUp" style={styles.containerForm}>

                {/* Título do formulário */}
                <Text style={styles.title}>Informações da conta</Text>

                {/* Campo de entrada de texto para o email */}
                <TextInput placeholder="Email" style={styles.input} />

                {/* Campo de entrada de texto para a senha */}
                <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} />

                {/* Título "Dados pessoais" */}
                <Text style={styles.title}>Dados pessoais</Text>

                {/* Campo "Nome" */}
                <TextInput placeholder="Nome" style={styles.input} />

                {/* Campo "Sobrenome" */}
                <TextInput placeholder="Sobrenome" style={styles.input} />

                {/* Campo "CPF" */}
                <TextInput placeholder="CPF" style={styles.input} />

                {/* Botão "Cadastrar" */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                {/* Botão para redirecionar ao login */}
                <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.registerText}>Já possui uma conta? Faça login</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

// Define os estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#903848',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#903848',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonLogin: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#a1a1a1',
    },
});
