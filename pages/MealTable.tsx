import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import MealHeader from '../components/MealHeader'
import { ScrollView } from 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 

export default function MealTable() {
  return (
    <GestureHandlerRootView>
        <View style={styles.container}>
            <View>
                <View style={{flex:1}}></View>
            <MealHeader></MealHeader>
            <ScrollView 
                horizontal
                contentContainerStyle = {styles.scrollcontainer}
                showsHorizontalScrollIndicator = {false}
            >
                <Card/>
                <Card/>
                <Card/>
            </ScrollView>
            </View>
        </View>
    </GestureHandlerRootView>
        
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