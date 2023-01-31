import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../redux/Slices/userSlice';
import NavFavourites from './NavFavourites';
import { Icon } from '@rneui/themed';
import {GOOGLE_MAPS_APIKEY} from '@env'

const DestinationCard = ({navigation}) => {
    const dispatch = useDispatch()
  return (
    <View className='bg-white flex-1 p-3'>
      <Text className='text-center mb-3 mt-5 text-gray-500'>Choose a destination point</Text>
      <GooglePlacesAutocomplete
      styles={{
        container:{
            flex:0,
            marginBottom: 25
        },
        textInput: {
          backgroundColor:'#F8F8F8'
        }
      }}
      placeholder='Enter destination'
      minLength={2}
      enablePoweredByContainer={false}
      nearbyPlacesAPI='GooglePlacesSearch'
      fetchDetails={true}
      onPress={(data, details = null) => {
        dispatch(setDestination({description: data.description, location: details.geometry.location}))
        navigation.navigate('RideComponent')
    }}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: 'en',
      }}
    />
    <NavFavourites/>

    <View className='flex-row items-center justify-evenly'>
        <TouchableOpacity
        onPress={()=>navigation.navigate('RideComponent')}
        className='flex-row items-center gap-2 bg-black px-2 pb-2 rounded-3xl'>
            <Icon type='font-awesome' name='car' color='white' size={20} />
            <Text className='text-white'>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity className='flex-row items-center gap-2 px-2 pb-2 rounded-3xl'>
            <Icon type='ionicon' name='fast-food' size={20} />
            <Text>Eats</Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default DestinationCard