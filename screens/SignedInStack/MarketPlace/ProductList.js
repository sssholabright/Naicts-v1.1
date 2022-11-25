import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Items } from '../AllTempData'
import ProductCard from './ProductCard'

export default function ProductList() {
    return (
        <View style={{ padding: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{ fontSize: 18, color: '#000', fontWeight: '500', letterSpacing: 1}}>Products</Text>
                    <Text style={{fontSize: 14, color: '#000', fontWeight: '400', opacity: 0.5, marginLeft: 10}}>41</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {Items.map(data => (
                    <ProductCard data={data} key={data.id} />
                ))}
            </View>
        </View>
    )
}
