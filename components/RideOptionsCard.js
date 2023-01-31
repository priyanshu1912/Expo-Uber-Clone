import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/themed'
import { useSelector } from 'react-redux'

const data = [
  {
    id: 1,
    title: 'Uber X',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn'
  },
  {
    id: 2,
    title: 'Uber XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8'
  },
  {
    id: 3,
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf'
  }
]

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = ({navigation}) => {
  const [selected,setSelected] = useState(null)
  const {travelTime} = useSelector(state => state.user)

  return (
    <View className='p-3 bg-white flex-1'>
      <View className='relative mt-3'>
        <TouchableOpacity 
        onPress={() => navigation.navigate('DestinationCard')} 
        className='absolute z-50'>
          <Icon type='ionicon' name='chevron-back-outline' />
        </TouchableOpacity>
        <Text className='text-center text-gray-500 pt-1'>Select a Ride - {travelTime?.distance?.text}</Text>
      </View>
      <FlatList 
      className='my-5'
      data={data} 
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
        onPress={()=>setSelected(item)}
        className={selected?.id===item.id ? 'flex-row items-center justify-between px-5 bg-gray-200 rounded-md' : 'flex-row items-center justify-between px-5'}>
          <Image style={{width:85, height:85, resizeMode:'contain'}} source={{uri: item.image}} />
          <View>
            <Text className='font-bold'>{item.title}</Text>
            <Text className='text-gray-500'>{travelTime?.duration?.text}</Text>
          </View>
          <Text className='font-bold'>
            {
              new Intl.NumberFormat("en-gb",{
                style: 'currency',
                currency: 'INR'
              }).format(
                (travelTime?.duration?.value * SURGE_CHARGE_RATE * item.multiplier) / 100
              )
            }
          </Text>
        </TouchableOpacity>
      )} />
      <TouchableOpacity disabled={!selected} className={!selected ? 'mt-auto bg-gray-100 p-4 rounded-md' : 'mt-auto bg-black p-4 rounded-md'}>
        <Text className={!selected ? 'text-center text-black' : 'text-center text-white'}>
          {
            !selected ? 'No Ride Selected' : `Ride ${selected?.title}`
          }
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default RideOptionsCard