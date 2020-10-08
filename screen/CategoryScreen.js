import React from 'react'
import {ScrollView, StyleSheet, Text, View,FlatList,Button } from 'react-native'
import ProductItem from '../component/ProductItem'
export default class CategoryScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      categories: [
        {id:1, name: 'Thiết bị điện tử'},
        {id:2, name: 'Thời trang nam'},
        {id:3, name: 'Đồng hồ'}
      ]
    };
  }
  render(){
    const {navigation} = this.props
    const {categories} = this.state;
    return(
        // <ScrollView style = {{paddingLeft:16, paddingRight:16}}>
        //   {categories.map(category =>(
        //     <ItemList key={category.id} item = {category}/>
        //   ))}
        // </ScrollView>
         <FlatList numColumns = '2'
         columnWrapperStyle={{justifyContent: 'space-between'}}
        data ={categories}
        renderItem = { ({item}) => <ProductItem item = {item}
        onPress={() => navigation.navigate('Category',
        {
          cateName: item.name,
          cateid: item.id
        }
        
        )}

        />}


        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle = {{paddingLeft:8, paddingRight:8}}
        />
        
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex : 1,
    backgroundColor:'#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  flat:{
    justifyContent : "space-between"
  }
})