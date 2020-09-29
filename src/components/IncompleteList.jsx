import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Checkbox from 'react-native-custom-checkbox'
import { ListItem } from 'react-native-elements'


const itemsList = [
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
        title: 'Very long title wher I copy past long deal, and then go to the banya, and another long line',
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
]

const IncompleteList = () => {
    const onPress = () => {};

    return (
        <View>
            <Text style={styles.title}>Incomplete</Text>
            {
                itemsList.map((value, index) => (
                    <TouchableOpacity onPress={onPress} key={index}>
                        <View style={styles.listItemContent} >
                            
                            <View style={styles.checkboxContainer}>
                                <Checkbox 
                                    checked={false}
                                    style={styles.checkBox}
                                />
                            </View>
                            <View style={styles.listitemContainer}>
                                <View key={index} bottomDivider style={styles.listItem}>
                                    <View style={styles.listItem} >
                                        <ListItem.Title >
                                            {value.title}
                                        </ListItem.Title>
                                        <ListItem.Subtitle>{value.category}</ListItem.Subtitle>
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
        marginBottom: 10,
    },
    listItemContent: {
        paddingLeft: 10,
        height: 'auto',
        marginBottom: 10,
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
    listitemContainer: {
        width: '70%',
        padding: 0,
    },
    listItem: {
        paddingLeft: 0,
    }
})

export default IncompleteList
