import React from 'react'
import { Text, View } from 'react-native'

export default function Chat({route, color}) {
  console.log(route)
  const { name } = route.params;
  return (
    <View style={{backgroundColor: `${color}`}}>
      <Text style={{fontSize: "32"}}>
      Welcome, {name}
      </Text>
     </View>
  )
}
