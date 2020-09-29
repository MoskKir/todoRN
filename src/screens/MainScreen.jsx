import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import { Header, Container, IncompleteList, CompletedList, AddToDoBtn } from '../components'

const MainScreen = ({ children }) => {
    return (
        <Container>
            <Header></Header>
            <ScrollView>
                <IncompleteList></IncompleteList>
                <CompletedList></CompletedList>
                { children } 
            </ScrollView>
            <AddToDoBtn></AddToDoBtn>
        </Container>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default MainScreen
