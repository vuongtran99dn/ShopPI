import React, { Component } from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import Anh1 from '../resource/picture/009-cake.png'

export default function ProductItem(props) {
    const {item,onPress} = props;
    return(
        <View style = {style.shadow }>
            <Text>love Nga 3000</Text>
        </View>
    );
    
}

const style  = StyleSheet.create({
    cartText:{
        textTransform: 'uppercase',
        fontSize: 16,
        color: "#0e34e7"
    },
    shadow:{
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset:{ width:0,height:0}
    },
    container: {
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: '#FFF',
        overflow: 'hidden'
    },
    info: {
        padding: 8
    },
    img: {
        height: 150,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    },
    name: {
        fontSize: 16,
        marginBottom: 8
    },
    priceRow: {
        flexDirection: 'row',
        alignContent: 'center'
    },
    price: {
        fontSize: 16,
        color: '#888',
        flex: 1
    }
    
})