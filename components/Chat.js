import React from 'react'
import { Text, View } from 'react-native'

export default function Chat({route}) {
  console.log(route)
  const { name } = route.params;
  return (
    <View>
      <Text>
      Welcome, {name}
      </Text>
     </View>
  )
}
