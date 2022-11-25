import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MenuBox from './MenuBox'
import { menubox } from '../AllTempData'

export default function Menu({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <View style={{padding: 10, alignItems: 'center', justifyContent: 'center'}}> 
                <Text style={{fontSize: 18, letterSpacing: 0.5, fontWeight: '700'}}>MENU</Text>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {menubox.map((item, index) => {
                    function Open() {
                        item.title === "Members" 
                            ? navigation.navigate("members")
                        : item.title === "News & Updates" 
                            ? navigation.navigate("circular")
                        : item.title === "Discussion Forum"
                            ? navigation.navigate("creatediscussion")
                        : item.title === "Events"
                            ? navigation.navigate("event")
                        : item.title === "Gallery"
                            ? navigation.navigate("gallery")
                        : item.title === "Marketplace"
                            ? navigation.navigate("marketplace")
                        : item.title === "E-learning"
                            ? navigation.navigate("elearning")
                        : item.title === "Lost & Found"
                            ? navigation.navigate("lostandfound")
                        : item.title === "Files"
                            ? navigation.navigate("documentscreen")
                        : item.title === "Executives"
                            ? navigation.navigate("executives") 
                        : null;
                    }
                    return (
                        <MenuBox 
                            key={index}
                            menu={item}
                            onPress={Open}
                        />
                    )})}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        height: '100%',
        padding: 10
    },    
})