import { Platform, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore'
import { db } from '../../SignedOutStack/authHooks/firebase'
import { Ionicons } from '@expo/vector-icons'

export default function ProductList({ navigation, route }) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [fashionList, setFashionList] = useState([])

    const category = route.params.category;

    
    const getProducts = async () => {
        setLoading(true)
        const q = query(collection(db, "products"))
        onSnapshot(q, (snapshot) => {
            const products = []
            snapshot.docs.map(doc => {
                products.push(doc.data())
            })
            setProducts(products)
            setLoading(false)
        })
    }

    const getFashions = async () => {
        setLoading(true)
        const q = query(collection(db, "products"), where("productCategory", "==", "fashion"), orderBy("createdAt", "desc"))
        onSnapshot(q, (snapshot) => {
            const products = []
            snapshot.docs.map(doc => {
                products.push(doc.data())
            })
            setProducts(products)
            setLoading(false)
        })
    }
    
    const getElectronics = async () => {
        setLoading(true)
        const q = query(collection(db, "products"), where("productCategory", "==", "electronics"), orderBy("createdAt", "desc"))
        onSnapshot(q, (snapshot) => {
            const products = []
            snapshot.docs.map(doc => {
                products.push(doc.data())
            })
            setProducts(products)
            setLoading(false)
        })
    }

    const getHealthAndBeauty = async () => {
        setLoading(true)
        const q = query(collection(db, "products"), where("productCategory", "==", "health & beauty"), orderBy("createdAt", "desc"))
        onSnapshot(q, (snapshot) => {
            const products = []
            snapshot.docs.map(doc => {
                products.push(doc.data())
            })
            setProducts(products)
            setLoading(false)
        })
    }

    const getConstructionAndRealEstate = async () => {
        setLoading(true)
        const q = query(collection(db, "products"), where("productCategory", "==", "construction & real estate"), orderBy("createdAt", "desc"))
        onSnapshot(q, (snapshot) => {
            const products = []
            snapshot.docs.map(doc => {
                products.push(doc.data())
            })
            setProducts(products)
            setLoading(false)
        })
    }

    const getServices = async () => {
        setLoading(true)
        const q = query(collection(db, "products"), where("productCategory", "==", "services"), orderBy("createdAt", "desc"))
        onSnapshot(q, (snapshot) => {
            const products = []
            snapshot.docs.map(doc => {
                products.push(doc.data())
            })
            setProducts(products)
            setLoading(false)
        })
    }

    const getOthers = async () => {
        setLoading(true)
        const q = query(collection(db, "products"), where("productCategory", "==", "other"), orderBy("createdAt", "desc"))
        onSnapshot(q, (snapshot) => {
            const products = []
            snapshot.docs.map(doc => {
                products.push(doc.data())
            })
            setProducts(products)
            setLoading(false)
        })
    }


    useEffect(() => {
        if (category === "fashion") {
            getFashions()
        } else if (category === "electronics") {
            getElectronics()
        } else if (category === "health & beauty") {
            getHealthAndBeauty()
        } else if (category === "construction & real estate") {
            getConstructionAdRealEstate()
        } else if (category === "other") {
            getOthers()
        } else if (category === "services") {
            getServices()
        } else {
            getProducts()
        }
    }, [])

    return (
        <SafeAreaView style={{ height: '100%' }}>
            <StatusBar backgroundColor="#f25fb9" barStyle="light-content" />
            <View style={{flexDirection: 'row', backgroundColor: '#f25fb9', paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#fff' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#fff' />
                    )}
                </TouchableOpacity> 
                <View style={{marginLeft: 20}}>
                    <Text style={{fontSize: 18, letterSpacing: 0.5, color: '#fff', fontWeight: '700', textTransform: 'uppercase'}}>{category + 's'}</Text>
                </View>  
                <TouchableOpacity activeOpacity={0.5} style={{ padding: 5,  paddingHorizontal: 10, borderRadius: 4}} onPress={() => navigation.navigate("postproduct")}>
                    <Text style={{fontSize: 12, fontWeight: '500', color: '#ef018a'}}>{'       '}</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: 20, paddingTop: 20}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{ fontSize: 18, color: '#000', fontWeight: '500', letterSpacing: 1}}>Products</Text>
                        <Text style={{fontSize: 14, color: '#000', fontWeight: '400', opacity: 0.5, marginLeft: 10}}>{products.length}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                    {products.map((data, index) => (
                        <ProductCard data={data} key={index} onPress={() => navigation.navigate("productinfo", {data})} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
