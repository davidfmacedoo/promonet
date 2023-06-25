import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcolme from '../pages/Welcolme';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Main from '../pages/Main'
import Alert from '../pages/Alert'
import Categories from '../pages/Categories'
import ProductDetails from '../pages/ProductDetails';
import CategoryScreen from '../pages/CategoryScreen';

const Stack = createNativeStackNavigator();

function LogoTitle() {
    return (
        <Image
            style={{ width: '100%', height: '100%' }}
            source={require('../assets/promonet-logo2.png')}
        />
    );
}

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcolme}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: '',
                    headerTintColor: 'white',
                    headerBackground: (props) => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    title: '',
                    headerTintColor: 'white',
                    headerBackground: (props) => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="Main"
                component={Main}
                options={{
                    title: '',
                    headerTintColor: 'white',
                    headerBackground: (props) => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="Alert"
                component={Alert}
                options={{
                    title: '',
                    headerTintColor: 'white',
                    headerBackground: (props) => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="Categories"
                component={Categories}
                options={{
                    title: '',
                    headerTintColor: 'white',
                    headerBackground: (props) => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetails}
                options={{
                    title: '',
                    headerTintColor: 'white',
                    headerBackground: (props) => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="CategoryScreen"
                component={CategoryScreen}
                options={{
                    title: '',
                    headerTintColor: 'white',
                    headerBackground: (props) => <LogoTitle {...props} />,
                }}
            />
        </Stack.Navigator>
    );
}
