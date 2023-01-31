import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Text, View , Platform} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Store } from './redux/Store';
import { Provider } from 'react-redux';

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <Provider store={Store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView
        behavior={Platform.OS==='ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS==='ios' ? -64: 0}
         style={{flex:1}}>
          <Stack.Navigator screenOptions={{
            headerShown:false,
            contentStyle:{
              backgroundColor:'white'
            }
          }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name='MapScreen' component={MapScreen}/>
          </Stack.Navigator>
        </KeyboardAvoidingView>
    </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
  );
}
