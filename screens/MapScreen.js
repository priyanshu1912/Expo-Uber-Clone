import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import DestinationCard from '../components/DestinationCard'
import RideOptionsCard from '../components/RideOptionsCard'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Icon } from '@rneui/themed'

const MapScreen = ({navigation}) => {
  const Stack = createNativeStackNavigator()
  return (
    <>
      <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}
      className='absolute z-50 top-12 left-5 bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center shadow-md'>
        <Icon type='feather' name='menu'/>
      </TouchableOpacity>

      {/* upper half */}
      <View className="h-1/2">
        <Map/>
      </View>

      {/* lower half */}
      <SafeAreaView className="h-1/2">
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name='DestinationCard' component={DestinationCard}/>
          <Stack.Screen name='RideComponent' component={RideOptionsCard}/>
        </Stack.Navigator>
      </SafeAreaView>
    </>
  )
}

export default MapScreen