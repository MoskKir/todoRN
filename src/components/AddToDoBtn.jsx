import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const AddToDoBtn = () => {
    const onPress = () => console.log('add btn press');

    return (
        <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
            <LinearGradient
                colors={['rgba(0,0,255,0.8)', 'transparent']}
                style={styles.linearGradientStyle}
            >
                <Ionicons name="ios-add" size={48} color="#ffffff" />
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#515CC6',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 40,
        right: 20,
    },
    linearGradientStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default AddToDoBtn
