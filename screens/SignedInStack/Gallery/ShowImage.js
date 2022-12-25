
import React from 'react';
import { Dimensions, View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

export default function ShowImage({ navigation, route }) {
    const { images } = route.params;
    const [active, setActive] = React.useState(0);
  
    const change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== active) {
            setActive(slide);
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <StatusBar hidden />
            <View style={{ flex: 1 }}>
                <ScrollView
                    pagingEnabled
                    horizontal
                    onScroll={change}
                    showsHorizontalScrollIndicator={false}
                >   
                    {images.map((image, index) => ( 
                        <Image
                            key={index}
                            source={image.url}
                            style={{
                                width,
                                height: '100%'
                            }}
                            resizeMode="contain"                            
                        />
                    ))}
                </ScrollView>
                <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' }}>
                    {images.map((i, k) => (
                        <Text key={k} style={k == active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
                    ))}
                </View>
            </View>
            <TouchableOpacity
                style={{ position: 'absolute', top: 30, right: 32 }}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="close" size={32} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    pagingText: {
        fontSize: (width / 30),
        color: '#888',
        margin: 3,
    },
    pagingActiveText: {
        fontSize: (width / 30),
        color: '#fff',
        margin: 3,
    },
});