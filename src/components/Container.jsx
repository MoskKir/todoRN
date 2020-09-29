import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Container = ({ children }) => (
    <View style={styles.container} >
        { children }
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        width: '100%',
        paddingLeft: 15,
    }
})

export default Container
