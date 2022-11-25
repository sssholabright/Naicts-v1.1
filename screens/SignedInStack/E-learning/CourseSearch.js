// import {} from 'react-native-reanimated'
// import { Shadow} from 'react-native-shadow & react-native-gesture-handler
import { Animated, Dimensions, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { categories, top_searches } from './dummyData'
import Categories from './components/Categories'
import { Ionicons } from '@expo/vector-icons'

export default function CourseSearch() {
    const scrollViewRef = useRef()
    /*const scrollY = useSharedValue(0)
    const onScroll = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    })*/
    
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <Animated.ScrollView
                ref={scrollViewRef}
                containerStyle={{
                    marginTop: 100,
                    paddingBottom: 300
                }}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                keyboardDismissMode="on-drag"
                //onScroll={onScroll}
                /*onScrollEndDrag={(event) => {
                    if(event.nativeEvent.contentOffset.y > 10 && event.nativeEvent.contentOffset.y < 50) {
                        scrollViewRef.current?.scrollTo({
                            x: 0,
                            y: 60,
                            animated: true
                        })
                    }
                }}*/>
                    {/* Top Searches */}
                    <TopSearch />

                    {/* Browse Categories */}
                    <BrowseCategories />
                    
                </Animated.ScrollView>
                <SearchBar />
        </View>
    )
}

const styles = StyleSheet.create({})

function TopSearch() {
    return (
        <View style={{marginTop: 22}}>
            <Text style={{marginHorizontal: 20, fontWeight: '500', fontSize: 16}}>Top Searches</Text>
            <FlatList   
                horizontal
                data={top_searches}
                listKey="TopSearches"
                keyExtractor={item => `TopSearches-${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{marginTop: 15}}
                renderItem={({item, index}) => (
                    <TouchableOpacity style={{width: 80, borderRadius: 30, backgroundColor: '#42c6a5', justifyContent: 'center', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 20, marginLeft: index == 0 ? 20 : 12, marginRight: index == top_searches.length - 1 ? 20 : 0, borderRadius: 10, backgroundColor: '#e5e5e5'}} activeOpacity={0.5}>
                        <Text style={{color: '#757575'}}>{item.label}</Text>
                    </TouchableOpacity>
                )}/>
        </View>
    )
}


function BrowseCategories() {
    return (
        <View style={{marginTop: 20}}>
            <Text style={{marginHorizontal: 10}}>Browse Categories</Text>

            <FlatList 
                data={categories}
                numColumns={2}
                scrollEnabled={false}
                listKey="BrowseCategories"
                keyExtractor={item => `BrowsCategories${item.id}`}
                contentContainerStyle={{marginTop: 15}}
                renderItem={({item, index}) => (
                    <Categories
                        category={item}
                        containerStyle={{
                            height: 130, 
                            width: (Dimensions.get('window').width - (Dimensions.get('window').width * 2) - 10) / 2,
                            marginTop: 10,
                            marginLeft: (index + 1) % 2 == 0 ? 10 : 20, 
                        }}
                        />
                )}
                />
        </View>
    )
}

function SearchBar() {
    /*const inputRange = (0, 55)
    const searchBarAnimatedStyle = useAnimatedStyle(() => {
        return {
            height: interpolate(scrollY.value, inputRange, [55, 0], Extrapolate.CLAMP), 
            opacity: interpolate(scrollY.value, inputRange, [1, 0], Extrapolate.CLAMP)
        }
    })*/
    return (
        <Animated.View
            style={[{
                position: 'absolute',
                top: 50,
                left: 0, 
                right: 0,
                height: 50,
                paddingHorizontal: 20
            }, /*searchBarAnimatedStyle*/]}>
                {/*<Shadow> */}
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: Dimensions.get('window').width - (20 * 2), 
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        backgroundColor: '#fff' 
                    }}>
                        <Ionicons name="search" size={18} color="gray" />
                        <TextInput 
                            style={{
                                flex: 1,
                                marginLeft: 8,

                            }}
                            value=""
                            placeholder="Search For Topics, Courses & Educators"
                            placeholderTextColor="gray"

                            />
                    </View>
                {/*</Shadow>*/}
            </Animated.View>
    )
}