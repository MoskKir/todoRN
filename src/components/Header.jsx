import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import moment from 'moment'


const dateNow = new Date()
const dateStr = moment(dateNow).format('LL')

const Header = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.date}>{dateStr}</Text>
            <Text>5 incomplete, 5 completed</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginRight: 20,
        borderColor: '#d0d0d0',
        marginBottom: 10,
    },
    date: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 28,
    },
})

export default Header
