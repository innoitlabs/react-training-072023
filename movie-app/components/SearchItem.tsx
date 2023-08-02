import { View, Text } from 'react-native'
import React from 'react'
import { Search } from '../types/movieTypes'
import { Card } from 'react-native-paper'

const SearchItem = ({ item}: {item: Search}) => {
  return (
      <Card>
          <Card.Cover source={{ uri: item.Poster }} resizeMode='contain' />
          <Card.Title title={item.Title} subtitle={item.Year} />
    </Card>
  )
}

export default SearchItem