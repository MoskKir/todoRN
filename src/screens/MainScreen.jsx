import React, { useState, } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import { Header, Container, IncompleteList, CompletedList, AddToDoBtn, AddTodoModal } from '../components'

const MainScreen = ({ children }) => {
    const [modalVisible, setModalAddTodoVisible] = useState(false);

    const modalAddTodoVisible = (event) => {
        console.log('modal add todo func start')

        console.log('modalVisible ', modalVisible)
        console.log('setModalAddTodoVisible ', setModalAddTodoVisible)

        if (event) { 
            return setModalAddTodoVisible(!modalVisible)  
        } else { 
            return modalVisible 
        }
        
    }

    return (
        <Container>
            <Header></Header>
            <ScrollView>
                <IncompleteList></IncompleteList>
                <CompletedList></CompletedList>
                
                { children } 
            </ScrollView>
            <AddToDoBtn isVisible={modalAddTodoVisible}></AddToDoBtn>
            <AddTodoModal isVisible={modalAddTodoVisible}></AddTodoModal>
        </Container>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default MainScreen
