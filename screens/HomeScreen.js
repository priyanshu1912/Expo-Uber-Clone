import { SafeAreaView, View, Image } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env' 
import { useDispatch } from 'react-redux';
import { setOrigin } from '../redux/Slices/userSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
  const dispatch = useDispatch()

  return (
    <SafeAreaView>
      <View className="p-5">
      <Image style={{width:100, height:100, resizeMode:'contain'}} source={{
        uri: 'https://links.papareact.com/gzs'
      }} />
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
      placeholder='Enter location'
      minLength={2}
      enablePoweredByContainer={false}
      nearbyPlacesAPI='GooglePlacesSearch'
      fetchDetails={true}
      onPress={(data, details = null) => {
        dispatch(setOrigin({description: data.description, location: details.geometry.location}))
      }}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: 'en',
      }}
    />
      <NavOptions/>
      <NavFavourites/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen