import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 9}}>
            <View style={styles.mealTime}>
                <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>점심</Text>
            </View>
            <Text style={{fontSize: 12, fontWeight: 'medium'}}>590kcal</Text>
        </View>
        <View style={{gap: 9, paddingTop: 20}}>
            <Text>발아현미</Text>
            <Text>순대국밥</Text>
            <Text>건새우멸치볶음</Text>
            <Text>치즈함박스테이크</Text>
            <Text>석박지</Text>
        </View>
        <View style={{flex: 1}}></View>
        <View style={{justifyContent: 'center', flexDirection: 'row', gap: 10}}>
            <TouchableOpacity
                style={styles.buttonGreen}
                onPress={() => Alert.alert('따봉주기 클릭')}
            >
                <Text style={styles.buttonText}>따봉주기</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonGray}
                onPress={() => Alert.alert('즐겨찾기 클릭')}
            >
                <Text style={styles.buttonText}>즐겨찾기</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'white',
        width: 290,
        height: 450,
        borderRadius: 10,
        borderColor: '#E5E5E5',
        borderWidth: 1,
    },
    mealTime: {
        width: 55,
        height: 28,
        backgroundColor: '#1F8F2A',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonGreen: {
        width: 125,
        height: 53,
        backgroundColor: '#1F8F2A',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonGray: {
        width: 125,
        height: 53,
        backgroundColor: '#E2E2E2',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});
