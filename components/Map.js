import React, { useEffect, useRef } from 'react'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';
import { setTravelTime } from '../redux/Slices/userSlice';
import {GOOGLE_MAPS_APIKEY} from '@env'

const Map = () => {
  const dispatch = useDispatch()
  const mapRef = useRef()
  const {origin,destination} = useSelector(state => state.user)

  useEffect(()=>{
    if(!origin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(['origin','destination'],{
      edgePadding: {top:50, bottom:50, right:50, left:50}
    })

    const getTravelTime = async () => {
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination?.description}&origins=${origin?.description}&key=${GOOGLE_MAPS_APIKEY}`)
      .then(res => res.json())
      .then(data => {
        dispatch(setTravelTime(data.rows[0].elements[0]))
      })
    }

    getTravelTime()

  },[origin,destination])
  
  return (
    <MapView
    ref={mapRef}
    style={{flex:1}}
    mapType="mutedStandard"
    initialRegion={{
      latitude: origin?.location.lat,
      longitude: origin?.location.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
    {
      origin && destination &&
      <MapViewDirections 
      origin={{latitude: origin.location.lat, longitude: origin.location.lng}} 
      destination={{latitude: destination.location.lat, longitude: destination.location.lng}} 
      apikey={GOOGLE_MAPS_APIKEY}
      strokeColor='black'
      strokeWidth={3} />
    }

    {
      origin?.location && 
      (
        <Marker
        coordinate={{
          latitude: origin?.location.lat,
          longitude: origin?.location.lng
        }}
        title='Origin'
        description={origin?.description}
        identifier='origin'
    />
      )
    }

{
      destination?.location && 
      (
        <Marker
        coordinate={{
          latitude: destination?.location.lat,
          longitude: destination?.location.lng
        }}
        title='Destination'
        description={destination?.description}
        identifier='destination'
    />
      )
    }
  </MapView>
  )
}

export default Map