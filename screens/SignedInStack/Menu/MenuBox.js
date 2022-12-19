import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function MenuBox({ menu, onPress}) {
    return (
            <TouchableOpacity 
                activeOpacity={0.9} 
                onPress={onPress} 
                style={styles.detailBox}>
                    <Ionicons 
                        name={menu.icon} 
                        size={30} 
                        color="#f25fb9" 
                    />
                    <Text 
                        style={{
                            fontSize: 12, 
                            fontWeight: '500', 
                            marginTop: 10, 
                            color: 'gray',
                            textTransform: 'uppercase',
                            textAlign: 'center'
                        }}>
                        {menu.title}
                    </Text>
            </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    detailBox: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 5,
        width: 100,
        maxHeight: 100,
        minHeight: 100,

        // Shadow
        shadowOffset: {width: 0, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,
    }
})