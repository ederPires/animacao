import React, {useRef, useEffect} from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

export default function App() {
  const larAnimada = useRef(new Animated.Value(150)).current;

  useEffect(() => {
    Animated.timing(larAnimada, {
      toValue: 300,
      duration: 2000,
      useNativeDriver: false
    }).start();
  }, [])

  return (
    <View style={styles.container}>

      <Animated.View
        style={{
          width: larAnimada,
          height: 50,
          backgroundColor: '#4169e1',
          justifyContent: 'center'
        }}
      >

        <Text style={{
          textAlign: 'center',
          fontSize: 22,
          color: '#FFF'
        }}>Carregando...</Text>

      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({})
