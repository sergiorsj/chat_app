import React from 'react'
import { Text, View } from 'react-native'

export default function Chat({route}) {
  console.log(route)
  const { name, color } = route.params;
  return (
    <View style={{backgroundColor: `${color}`, height: 100}}>
      <Text style={{fontSize: "32"}}>
      Welcome, {name}
      </Text>
     </View>
  )
}
