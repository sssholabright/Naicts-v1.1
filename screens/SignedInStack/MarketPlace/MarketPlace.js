import { ActivityIndicator, FlatList, Platform, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {  Ionicons  } from '@expo/vector-icons';
import ProductCard from './ProductCard';
import { db, auth } from '../../SignedOutStack/authHooks/firebase'
import { collection, query, onSnapshot, orderBy, limit, where } from 'firebase/firestore'

export default function MarketPlace({navigation}) {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const [filteredProducts, setFilteredProducts] = useState([])
    const [fashionList, setFashionList] = useState([])
    const [electronicsList, setElectronicsList] = useState([])
    const [healthAndBeautyList, setHealthAndBeautyList] = useState([])
    const [constructionAndRealEstateList, setConstructionAndRealEstateList] = useState([])
    const [servicesList, setServicesList] = useState([])
    const [otherList, setOtherList] = useState([])

    const getProducts = async () => {
        const q = query(collection(db, "products"), orderBy("createdAt", "desc"), limit(10))
        onSnapshot(q, (querySnapshot) => {
            const products = []
            querySnapshot.forEach((doc) => {
                products.push(doc.data())
            })
            setProducts(products)
            setFilteredProducts(products)
            setLoading(false)
        })
    }

    const getFashionsCategory = async () => {
        const q = query(collection(db, "products"), where("productCategory", "==", "fashion"), orderBy("createdAt", "desc"), limit(10))
        onSnapshot(q, (querySnapshot) => {
            const fashions = []
            querySnapshot.forEach((doc) => {
                fashions.push(doc.data())
            })
            setFashionList(fashions)
            setLoading(false)
        })
    }

    const getElectronicsCategory = async () => {
        const q = query(collection(db, "products"), where("productCategory", "==", "electronics"), orderBy("createdAt", "desc"), limit(10))
        onSnapshot(q, (querySnapshot) => {
            const electronics = []
            querySnapshot.forEach((doc) => {
                electronics.push(doc.data())
            })
            setElectronicsList(electronics)
            setLoading(false)
        })
    }

    const getHealthAndBeautyCategory = async () => {
        const q = query(collection(db, "products"), where("productCategory", "==", "health & beauty"), orderBy("createdAt", "desc"), limit(10))
        onSnapshot(q, (querySnapshot) => {
            const healthAndBeauty = []
            querySnapshot.forEach((doc) => {
                healthAndBeauty.push(doc.data())
            })
            sethealthAndBeautyList(healthAndBeauty)
            setLoading(false)
        })
    }
    
    const getConstructionAndRealEstateCategory = async () => {
        const q = query(collection(db, "products"), where("productCategory", "==", "construction & real estate"), orderBy("createdAt", "desc"), limit(10))
        onSnapshot(q, (querySnapshot) => {
            const constructionAndRealEstate = []
            querySnapshot.forEach((doc) => {
                constructionAndRealEstate.push(doc.data())
            })
            setConstructionAndRealEstateList(constructionAndRealEstate)
            setLoading(false)
        })
    }

    const getServicesCategory = async () => {
        const q = query(collection(db, "products"), where("productCategory", "==", "services"), orderBy("createdAt", "desc"), limit(10))
        onSnapshot(q, (querySnapshot) => {
            const services = []
            querySnapshot.forEach((doc) => {
                services.push(doc.data())
            })
            setServicesList(services)
            setLoading(false)
        })
    }
    
    const getOtherCategory = async () => {
        const q = query(collection(db, "products"), where("productCategory", "==", "other"), orderBy("createdAt", "desc"), limit(10))
        onSnapshot(q, (querySnapshot) => {
            const others = []
            querySnapshot.forEach((doc) => {
                others.push(doc.data())
            })
            setOtherList(other)
            setLoading(false)
        })
    }




    const searchFilter = (text) => {
        if (text) {
            const newData = products.filter((item) => {
                const itemData = item.productName ? item.productName.toUpperCase() : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            setFilteredProducts(newData)    
            setSearch(text)
        } else {
            setFilteredProducts(products)
            setSearch(text)
        }
    }

    useEffect(() => {
        getProducts()
        getFashionsCategory()
        getElectronicsCategory()
        getHealthAndBeautyCategory()
        getConstructionAndRealEstateCategory()
        getServicesCategory()
        getOtherCategory()
    }, [])


    return (
        <View style={{ flex: 1, backgroundColor: '#f2f2f2'}}>
            <StatusBar backgroundColor="#f25fb9" barStyle="light-content" />

                {/* Header Icons (basket and cart) */}
            <View style={{flexDirection: 'row', backgroundColor: '#f25fb9', paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#fff' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#fff' />
                    )}
                </TouchableOpacity> 
                <View style={{marginLeft: 20}}>
                    <Text style={{fontSize: 18, letterSpacing: 0.5, color: '#fff', fontWeight: '700'}}>MARKETPLACE</Text>
                </View>  
                <TouchableOpacity activeOpacity={0.5} style={{backgroundColor: '#fff', padding: 5, paddingHorizontal: 10, borderRadius: 4}} onPress={() => navigation.navigate("postproduct")}>
                    <Text style={{fontSize: 12, fontWeight: '500', color: '#ef018a'}}>POST</Text>
                </TouchableOpacity>
            </View>
       
        
        <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header Description */}
                <View style={{marginBottom: 10, padding: 20}}>
                    <Text style={{ fontSize: 26, color: '#000', fontWeight: '500', letterSpacing: 1, marginBottom: 10}}>
                        ICT E-Marketplace Advertise & Service
                    </Text>
                    <Text style={{ fontSize: 14, color: '#000', fontWeight: '400', letterSpacing: 0.2, lineHeight: 24}}>
                        ICT E-Marketplace is a great way to reach your target audience.{'\n'}You can advertise your products and services to a large audience of ICT professionals and students.{'\n'}
                        {'\n'}This platform offers both products and services
                    </Text>
                </View>
        
                {/* Search Bar */}
                <View style={{paddingHorizontal: 20, marginBottom: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 4}}>
                        <Ionicons name="search" size={20} color='#666' />
                        <TextInput
                            placeholder="Search"
                            placeholderTextColor="#666"
                            style={{fontSize: 16, color: '#000', marginLeft: 10, flex: 1}}
                            value={search}
                            onChangeText={(text) => searchFilter(text)}
                        />
                        {search ? (
                            <TouchableOpacity activeOpacity={0.5} onPress={() => searchFilter('')}>
                                <Ionicons name="close" size={20} color='#f25fb9' />
                            </TouchableOpacity>
                        ) : null}
                    </View>
                </View>

                {/* Featured Products */}
                <View style={{padding: 20}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontSize: 18, color: '#000', fontWeight: '500', letterSpacing: 0.5}}>
                                Featured Products
                            </Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("productlist")}>
                            <Text style={{fontSize: 14, color: '#ef018a', fontWeight: '500'}}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    {loading ? (
                        <ActivityIndicator size="large" color="#f25fb9" style={{marginTop: 20}} />
                    ) : (
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                            {products.map((item, index) => (
                                <ProductCard key={index} data={item} onPress={() => navigation.navigate("productinfo", {data: item})} />
                            ))}
                        </View>
                    )}
                </View>


                {/* Fashion Categories */}
                {fashionList.map((item, index) => (
                    <View style={{padding: 15}} key={index}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontSize: 18, color: '#000', fontWeight: '500', letterSpacing: 0.5, textTransform: 'capitalize'}}>
                                    {item.productCategory}
                                </Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("productlist", {category: item.productCategory})}>
                                <Text style={{fontSize: 14, color: '#f25fb9', fontWeight: '500'}}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                            <ProductCard data={item} />
                        </View>
                    </View>
                ))}

                {/* Electronics Categories */}
                {electronicsList.map((item, index) => (
                    <View style={{padding: 15}} key={index}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontSize: 18, color: '#000', fontWeight: '500', letterSpacing: 0.5, textTransform: 'capitalize'}}>
                                    {item.productCategory}
                                </Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("productlist", {category: item.productCategory})}>
                                <Text style={{fontSize: 14, color: '#f25fb9', fontWeight: '500'}}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                            <ProductCard data={item} />
                        </View>
                    </View>
                ))}

                {/* Health & Beauty Categories */}
                {healthAndBeautyList.map((item, index) => (
                    <View style={{padding: 15}} key={index}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontSize: 18, color: '#000', fontWeight: '500', letterSpacing: 0.5, textTransform: 'capitalize'}}>
                                    {item.productCategory}
                                </Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("productlist", {category: item.productCategory})}>
                                <Text style={{fontSize: 14, color: '#f25fb9', fontWeight: '500'}}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                            <ProductCard data={item} />
                        </View>
                    </View>
                ))}

                {/* Fashion Categories */}
                {constructionAndRealEstateList.map((item, index) => (
                    <View style={{padding: 15}} key={index}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontSize: 18, color: '#000', fontWeight: '500', letterSpacing: 0.5, textTransform: 'capitalize'}}>
                                    {item.productCategory}
                                </Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("productlist", {category: item.productCategory})}>
                                <Text style={{fontSize: 14, color: '#f25fb9', fontWeight: '500'}}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                            <ProductCard data={item} />
                        </View>
                    </View>
                ))}

                {/* Fashion Categories */}
                {servicesList.map((item, index) => (
                    <View style={{padding: 15}} key={index}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontSize: 18, color: '#000', fontWeight: '500', letterSpacing: 0.5, textTransform: 'capitalize'}}>
                                    {item.productCategory}
                                </Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("productlist", {category: item.productCategory})}>
                                <Text style={{fontSize: 14, color: '#f25fb9', fontWeight: '500'}}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                            <ProductCard data={item} />
                        </View>
                    </View>
                ))}

                {/* Fashion Categories */}
                {otherList.map((item, index) => (
                    <View style={{padding: 15}} key={index}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontSize: 18, color: '#000', fontWeight: '500', letterSpacing: 0.5, textTransform: 'capitalize'}}>
                                    {item.productCategory}
                                </Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("productlist", {category: item.productCategory})}>
                                <Text style={{fontSize: 14, color: '#f25fb9', fontWeight: '500'}}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                            <ProductCard data={item} />
                        </View>
                    </View>
                ))}

                {/* List Categories /}
                <View style={{padding: 15}}>*/}
                    
                {/* Products LIST /}
                <View style={{ padding: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{ fontSize: 18, color: '#000', fontWeight: '500', letterSpacing: 0.5}}>
                                Clothing
                            </Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("productlist")}>
                            <Text style={{fontSize: 14, color: '#ef018a', fontWeight: '500'}}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                        {products.map((item, index) => (
                            <ProductCard data={item} onPress={() => navigation.navigate('productinfo', {data: item})} key={index} />
                        ))}
                    </View>
                </View>
        
                {/* Accessories LIST /}
                <View style={{padding: 15}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{ fontSize: 18, color: '#000', fontWeight: '500'}}>Computers</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Text style={{fontSize: 14, color: '#ef018a', fontWeight: '500'}}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                        {Items.map(data => {
                            return <ProductCard data={data} key={data.id} />;
                        })}
                    </View>
                </View>

                {/* Accessories LIST /}
                <View style={{padding: 15}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{ fontSize: 18, color: '#000', fontWeight: '500'}}>Others</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Text style={{fontSize: 14, color: '#ef018a', fontWeight: '500'}}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                        {Items.map(data => {
                            return <ProductCard data={data} key={data.id} />;
                        })}
                    </View>
                </View>*/}
            </ScrollView>
        </View>
    )
}
