import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Checkbox from 'react-native-custom-checkbox'
import { ListItem } from 'react-native-elements'


const completedItemsList = [
    {
        title: 'Upload 1099-R to TurboTax',
        category: '💰 Finance',
        status: 'incomplete',
    },
    {
        title: 'Submit 2019 tax return',
        category: '💰 Finance',
        status: 'incomplete',
    },
    {
        title: 'Print parking passes',
        category: '💞 Wedding',
        status: 'incomplete',
    },
    {
        title: 'Sign contract, send back',
        category: '🖥️ Freelance',
        status: 'incomplete',
    },
    {
        title: 'Hand sanitizer',
        category: '🛒 Shopping List',
        status: 'incomplete',
    },
    {
        title: 'Hand sanitizer',
        category: '🛒 Shopping List',
        status: 'incomplete',
    },
    {
        title: 'Hand sanitizer',
        category: '🛒 Shopping List',
        status: 'incomplete',
    },
]


const CompletedList = () => {
    const onPress = () => {};

    return (
        <View>
            <Text style={styles.title}>Completed</Text>
            {
                completedItemsList.map((value, index) => (
                    <TouchableOpacity onPress={onPress}>
                    <View 
                        style={styles.listItemContent} 
                        key={index}
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
        backgroundColor: '#ffffff', 
        color:'#dadada', 
        borderRadius: 5
    },
    border: {
        borderWidth: 1,
        // borderColor: 'red',
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
