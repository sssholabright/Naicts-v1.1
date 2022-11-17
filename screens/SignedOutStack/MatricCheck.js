import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MatricCheck({navigation}) {
    const [matric, setMatric] = useState("")

    const CS = matric[5] + matric[6] === 'CS';
    const MC = matric[5] + matric[6] === 'MC';
    const LS = matric[5] + matric[6] === 'LS';
    const IDEL = matric[4] + matric[5] + matric[6]  === 'XCS';
    const DE = matric[2] + matric[3] + matric[4] + matric[5] + matric[6] + matric[7] === 'D/47CS' || 'D/47MC' || 'D/47LS' || 'D/7XLS' || 'D/7XCS' || 'D/7XMC';
    const check = CS || MC || LS || IDEL;
    
    function confirmation() {
        if (check) {
            navigation.navigate('registration');
        }
        else {
            alert('You are not an ICT student');
        }
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View style={styles.firstInput}>
                <Text style={{textAlign: 'left', color: '#fff'}}>Matric Number</Text>
                <TextInput 
                    style={styles.input}
                    value={matric} 
                    onChangeText={(matric) => setMatric(matric)} />
                <Text style={{fontWeight: '300', fontSize: 8, color: 'gray'}}>WRITE IN CAPITAL LETTERS</Text> 
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={confirmation}>
                    <Text style={{padding: 10,  color: '#fff'}}>VALIDATE</Text>
                </TouchableOpacity>
            </View>    
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})