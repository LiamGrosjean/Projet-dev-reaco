import { View, Text } from 'react-native'
import React from 'react'

const [id] = () => {
  const useLocalParam = () => {
    const { id } = useParams()
    return id
  }
  const id = useLocalParam()
  return (
    <View>
      <Text>[id]</Text>
    </View>
  )
}

export default [id]

function useParams(): { id: any } {
  throw new Error('Function not implemented.')
}
