import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen'
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen'
    }
]

const NavOptions = () => {
    const navigation = useNavigation()
    const {origin} = useSelector(state => state.user)

  return (
    <FlatList className='mb-10' data={data} horizontal ItemSeparatorComponent={() => <View style={{width: 20}} />} keyExtractor={(item) => item.id} renderItem={({item}) => (
        <TouchableOpacity disabled={!origin} onPress={()=>navigation.navigate('MapScreen')} className='bg-gray-100 p-3 rounded-md'>
            <View className={!origin && 'opacity-40'}>
                <Image style={{width:120, height:120, resizeMode:'contain'}} source={{
                    uri: item.image
                }}/>
                <Text className="font-medium my-2">{item.title}</Text>
                <Icon style={{backgroundColor:'black',width:30, height:30, borderRadius:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} name='arrow-right' color="white" size={18} type='feather'/>
            </View>
        </TouchableOpacity>
    )} />
  )
}

export default NavOptions