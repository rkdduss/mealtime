import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MealHeader() {
  return (
    <View style={styles.container}>
      <Text style={{color:'#1F8F2A', fontSize:22, fontWeight: 'bold'}}>오늘의 급식</Text>
      <Text style={{color: 'black',opacity:0.6,fontSize: 14, fontWeight: 'medium'}}>24년 9월 23일 화요일</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'flex-start'
  }
})