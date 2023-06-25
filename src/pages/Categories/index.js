import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const API_URL = 'https://fakestoreapi.com/products/categories';

export default function Categories() {
    const navigation = useNavigation();

    // Estado para armazenar as categorias dos produtos
    const [categories, setCategories] = useState([]);

    // Estado para controlar carregamento das categorias
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetchCategories();
    }, []);

    // Função para buscar as categorias dos produtos
    const fetchCategories = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();

            // Atualiza as categorias com os dados obtidos da API
            setCategories(data);

            // Marca o carregamento como concluído
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    // Função para lidar com o pressionar de uma categoria *
    const handleCategoryPress = (category) => {

        // Navega para a tela de categoria, passando a categoria selecionada como parâmetro **
        navigation.navigate('CategoryScreen', { category });
    };

    // Se estiver carregando, exibe o indicador de atividade
    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#903848" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Categorias</Text>
            </View>
            <View style={styles.textCategories}>
                {categories.map((category, index) => (
                    <TouchableOpacity key={index} onPress={() => handleCategoryPress(category)}>
                        <View>
                            <Divider />
                            <Text style={styles.categoryText}>{category}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
                <Divider />
            </View>
        </View>
    );
}

// Define os estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: '5%',
        paddingStart: '5%',
    },
    textCategories: {
        paddingBottom: '5%',
        paddingTop: '5%',
    },
    categoryText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingStart: '10%',
        paddingBottom: '3%',
        paddingTop: '3%',
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
