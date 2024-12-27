import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TimeHeader from '../components/TimeHeader'

export default function TimeTable() {
  return (
    <View style={styles.container}>
        <View >
            <TimeHeader/>    
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollcontainer: {
        paddingHorizontal:55,
        gap: 20
    }
})