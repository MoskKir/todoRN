import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { Ionicons, Entypo } from '@expo/vector-icons'

const AddTodoModal = ({ isVisible }) => {
    const [titleValue, onChangeTitle] = React.useState('New todo')
    const [categoryValue, onChangeCategory] = React.useState('Category')

    const backBtn = () => {
        console.log('onBackButtonPress')
        isVisible(true)
    }

    return (
        <View style={{position: 'absolute', top: 0}}>
            <Modal 
                isVisible={isVisible()}
                animationIn='slideInDown'
                animationOut='slideOutUp'
                animationInTiming={1000}
                animationOutTiming={400}
                backdropTransitionOutTiming={10}
                avoidKeyboard={true}
                backdropOpacity={0.3}
                onBackButtonPress={backBtn}
                onBackdropPress={backBtn}
                style={styles.modalViewStyle}
                >
                <View style={styles.modalContainerStyle}>
                    <Text style={styles.title}>New Todo</Text>
                    <View>
                        <Text style={{ color: '#B9B9BE' }}>Title</Text>
                        <TextInput 
                            style={styles.inputStyle}
                            onChangeText={text => onChangeTitle(text)}
                            autoFocus={true}
                            value={titleValue} />
                        <Text style={{ color: '#B9B9BE' }}>Category</Text>
                        <TextInput 
                            style={styles.inputStyle}
                            onChangeText={text => onChangeCategory(text)}
                            autoFocus={true}
                            value={categoryValue} />
                    </View>
                    <View style={{ flex: 1, flexDirection: "column-reverse" }}>
                        <View
                            style={styles.buttonContainer}
                        >
                            <TouchableOpacity 
                                style={styles.addToListBtn}
                                onPress={() => isVisible(true)}
                            > 
                                <Entypo name="add-to-list" size={24} color="white" />
                                <Text 
                                    style={styles.buttonLabel}
                                >
                                    add
                                </Text>
                            </TouchableOpacity >
                            
                            <TouchableOpacity 
                                style={styles.undoBtn}
                                onPress={() => isVisible(true)}
                            >
                                <Ionicons name="ios-undo" size={24} color="white" /> 
                                <Text 
                                    style={styles.buttonLabel}
                                >
                                    undo
                                </Text>
                            </TouchableOpacity >
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalViewStyle: {
        margin: 0,
        width: '100%',
        
    },
    modalContainerStyle: {
        position: 'absolute',
        top: 0,
        backgroundColor: 'white',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        width: '100%',
        paddingTop: 30,
        height: 320,
        padding: 20,

        
    },
    title: {
        color: '#000', 
        textAlign: 'center',
        fontSize: 24,
        fontWeight:'700',
    },
    inputStyle: {
        backgroundColor: '#ffffff',
        borderLeftWidth: 5,
        borderLeftColor: '#515CC6',
        borderBottomWidth: 1,
        borderBottomColor: '#B9B9BE',
        padding: 5,
        paddingLeft: 20,
        margin: 5,
    },
    selectStyle: {
        borderWidth: 1,
        borderColor: 'black',
        height: 10,
        color: '#aba',
    },
    buttonContainer: {
        flexDirection: 'row-reverse',
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        alignContent: 'center',
        backgroundColor: 'red',
        borderWidth: 1,
        borderRadius: 50,
        margin: 5,
        padding: 5,
    },
    buttonLabel: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: 'white'
    },
    addToListBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 50,
        alignContent: 'center',
        backgroundColor: '#515CC6',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        margin: 5,
        marginLeft: 0,

        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    undoBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 50,
        alignContent: 'center',
        backgroundColor: '#FFD051',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        marginRight: 0,
        margin: 5,

        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    addBtnLinearGradientStyle: {
        width: '100%',
        height: '100%',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    undoBtnLinearGradientStyle: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default AddTodoModal
