import React, { useState } from 'react'
import { View, Button, Text } from 'react-native'

const HomeScreen = ({ navigation, route }) => {
  const [token, setToken] = useState('')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Sign In"
        onPress={() => navigation.navigate('Signin')}
      />
      
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('Signup')}
      />
      <Text> {token === '' ? '' : 'Token: ' + token} </Text>
    </View>
  )
}  

export default HomeScreen
