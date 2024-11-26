import React from 'react'
import { Text, View } from 'react-native'

export default function Chat({route}) {
  console.log(route)
  const { name } = route.params;
  return (
    <View>
      <Text style={{fontSize: "32"}}>
      Welcome, {name}
      </Text>
     </View>
  )
}
