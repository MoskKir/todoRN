import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const AddToDoBtn = ({ isVisible } ) => {

    return (
        <View style={styles.shadowStyle}>
            <TouchableOpacity style={styles.btnContainer} onPress={isVisible}>
                <Ionicons name="ios-add" size={48} color="#ffffff" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: '#515CC6',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 40,
        right: 20,

        shadowColor: '#100873',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    linearGradientStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default AddToDoBtn
