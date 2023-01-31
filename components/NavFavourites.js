import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'

const data = [
    {
        id: 123,
        icon: 'home',
        location: 'Home',
        destination: 'Code Street, London UK'
    },
    {
        id: 456,
        icon: 'briefcase',
        location: 'Work',
        destination: 'London Eye, London UK'
    }
]

const NavFavourites = () => {
  return (
    <FlatList 
    data={data} 
    keyExtractor={(item) => item.id}
    ItemSeparatorComponent={()=>(
        <View className='bg-gray-50 h-0.5 my-3'></View>
    )}
    renderItem={({item}) => (
        <TouchableOpacity className='flex flex-row items-center gap-4'>
            <Icon type='ionicon' name={item.icon} size={18}
            style={{
                backgroundColor:'#F0F0F0',
                width: 40,
                height: 40,
                borderRadius:'100%',
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
            }} color='grey' />
            <View>
                <Text className='font-bold'>{item.location}</Text>
                <Text className='text-gray-500'>{item.destination}</Text>
            </View>
        </TouchableOpacity>
    )} />
  )
}

export default NavFavourites