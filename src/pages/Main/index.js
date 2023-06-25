import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Avatar, BottomNavigation, Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Alert from '../Alert';
import Categories from '../Categories';
import ProductsComponent from '../../components/ProductsComponent';

export default function Main() {
    const navigation = useNavigation();

    // Estado para armazenar o valor da pesquisa
    const [searchQuery, setSearchQuery] = useState('');

    // Estado para armazenar o índice da aba selecionada
    const [index, setIndex] = useState(0);

    // Estado para armazenar os alertas favoritos
    const [favoriteAlerts, setFavoriteAlerts] = useState([]);

    // Estado para armazenar o produto selecionado
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Função para atualizar o estado da pesquisa
    const onChangeSearch = (query) => setSearchQuery(query);

    const routes = [
        { key: 'inicio', title: 'Inicio', icon: 'home' },
        { key: 'alertas', title: 'Alertas', icon: 'bell', badge: favoriteAlerts.length },
        { key: 'categorias', title: 'Categorias', icon: 'folder' },
    ];

    const renderScene = BottomNavigation.SceneMap({
        inicio: () => (
            <ScrollView style={styles.scene}>
                <ProductsComponent onFavoritePress={addFavoriteAlert} onProductPress={navigateToProductDetails} searchQuery={searchQuery} />
            </ScrollView>
        ),
        alertas: () => (
            <View style={styles.scene}>
                <Alert favoriteAlerts={favoriteAlerts} removeFavoriteAlert={removeFavoriteAlert} />
            </View>
        ),
        categorias: () => (
            <View style={styles.scene}>
                <Categories />
            </View>
        ),
    });

    const handleIndexChange = (newIndex) => {
        setIndex(newIndex);

        // Navegação com base no índice da aba selecionada
        if (newIndex === 0) {
            navigation.navigate('Main');
        } else if (newIndex === 0) {
            navigation.navigate('Alert');
        } else if (newIndex === 0) {
            navigation.navigate('Categories');
        }
    };

    const addFavoriteAlert = (product) => {

        // Adiciona um alerta favorito ao estado
        setFavoriteAlerts([...favoriteAlerts, product]);
    };

    // Remove um alerta favorito do estado
    const removeFavoriteAlert = (product) => {
        setFavoriteAlerts(favoriteAlerts.filter((item) => item.id !== product.id));
    };

    const navigateToProductDetails = (product) => {

        // Define o produto selecionado no estado
        setSelectedProduct(product);

        // Navega para a tela de detalhes do produto
        navigation.navigate('ProductDetails', { product });
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Avatar.Text size={50} label="DM" style={{ backgroundColor: '#fff' }} />
                <Text style={styles.name}>David Macedo</Text>
            </View>
            <Searchbar
                style={styles.search}
                placeholder="Pesquise preços de produtos"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />

            <BottomNavigation
                style={styles.bottomNavigation}
                barStyle={{ backgroundColor: '#903848' }}
                navigationState={{ index, routes }}
                onIndexChange={handleIndexChange}
                renderScene={renderScene}
                activeColor="#fff"
                inactiveColor="#fff"
            />
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
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '3%',
        marginBottom: '3%',
        paddingStart: '5%',
    },
    name: {
        paddingStart: '10%',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    search: {
        flexDirection: 'row-reverse',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '3%',
        paddingEnd: '5%'
    },
    bottomNavigation: {
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    scene: {
        flex: 1,
    },
});
