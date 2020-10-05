import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Checkbox from 'react-native-custom-checkbox'
import { ListItem } from 'react-native-elements'

import { useSelector } from 'react-redux'


const CompletedList = () => {
    const onPress = () => {};

    const todos = useSelector((state) => state.todos.todos)

    return (
        <View>
            <Text style={styles.title}>Completed</Text>
            {
                todos.map((value, index) => (
                    <TouchableOpacity onPress={onPress} key={index}>
                    <View 
                        style={styles.listItemContent} 
                        
                        >
                        <View style={styles.checkboxContainer}>
                            <Checkbox 
                                checked={true}
                                style={styles.checkBox}
                            />
                        </View>
                        <View style={styles.listitemContainer}>
                            <View key={index} bottomDivider style={styles.listItem}>
                                <View style={styles.listItem} >
                                    <ListItem.Title style={styles.listItemTitle}>
                                        {value.title}
                                    </ListItem.Title>
                                </View>
                            </View>
                        </View>
                    </View>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "700",
        marginTop: 30,
    },
    listItemContent: {
        padding: 10,
        height: 40,
        flexDirection: 'row',
    },
    checkboxContainer: {
        width: 25,
        marginRight: 10,
    },
    checkBox: {
        color:'#575767',
        borderWidth: 1,
        borderColor: '#DADADA', 
        borderRadius: 5,
    },
    listitemContainer: {
        width: '70%',
        padding: 0,
    },
    listItem: {
        paddingLeft: 0,
    },
    listItemTitle: {
        color: '#B9B9BE',
    },
})

export default CompletedList
