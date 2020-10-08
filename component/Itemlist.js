import React, { Component } from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import Anh1 from '../resource/picture/009-cake.png'

export default function ItemList(props) {
    const {item,onPress} = props;
    return(
    <TouchableOpacity onPress={onPress}>
     <View style ={style.container}>
    <Text>{item.name}</Text>
        <Image style ={style.items} source ={Anh1}/>
    </View>
    </TouchableOpacity>
    );
    
}

const style  = StyleSheet.create({
    container:{
        alignItems: 'center',
        padding: 16,
        borderRadius:5,
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
        margin:8
        
    },
    items:{
        width : 64,
        height: 64
    }
    
})