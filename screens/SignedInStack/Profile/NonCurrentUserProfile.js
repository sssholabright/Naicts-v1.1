import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, TouchableOpacity, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../SignedOutStack/authHooks/firebase'
import { collection, addDoc, getDoc, doc, getDocs, query, where, setDoc, onSnapshot } from 'firebase/firestore'

import { Ionicons } from '@expo/vector-icons'

export default function NonCurrentUserProfile({navigation, route}) {
    const [requests, setRequests] = useState([])

    const { uid, firstName, lastName, email, matric, department, bio, portfolio, phone } = route.params

    const sendChatRequest = () => {
        const chatRequest = {
            id: auth.currentUser.uid + uid,
            senderId: auth.currentUser.uid,
            receiverId: uid,
            senderName: auth.currentUser.displayName,
            senderEmail: auth.currentUser.email,
            senderImage: '',
            status: 'pending'
        }
        setDoc(doc(db, "chatRequests", auth.currentUser.uid + uid), chatRequest)
    }

    useEffect(() => {
        const q = query(collection(db, "chatRequests"), where("sender", "==", auth.currentUser.uid)) // get all the requests that the user has sent to the other user 
        const getRequests = async () => {
            try {
                const querySnapshot = await getDocs(q)
                const requests = []
                querySnapshot.forEach((doc) => {
                    requests.push(doc.data())
                })
                setRequests(requests)
            } catch (error) {
                alert(error)
            }
        }
        getRequests()
    }, [])


    return (
        <SafeAreaView style={{height: '100%', backgroundColor: '#fff'}} key={uid}>
            <StatusBar barStyle="light-content" backgroundColor='#f25fb9' />
            {/* Header Section (Back Icon and `Event`) */}
            <View style={{ backgroundColor: '#f25fb9', paddingHorizontal: 20, paddingVertical: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    {Platform.OS === "android" ? (
                        <Ionicons name="arrow-back" size={24} color='#fff' /> 
                    ): Platform.OS === "ios" (
                        <Ionicons name="chevron-back" size={24} color='#fff' />
                    )}
                </TouchableOpacity> 
                <View style={{}}>
                    <Text style={{fontSize: 16, letterSpacing: 0.1, fontWeight: '700', color: '#fff'}}>{uid} {lastName}</Text>
                </View> 
                <Text>{'        '}</Text>
            </View>
                
            <ScrollView showsVerticalScrollIndicator={false} style={{padding: 20}}>
                <View style={{padding: 20, backgroundColor: '#000', borderRadius: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity activeOpacity={0.5}  /*onPress={takePhotoFromCamera}*/ style={{marginHorizontal: 10}}>
                            <Image source={require('../../../assets/me.jpg')} style={{width: 70, height: 70, borderRadius: 50}} />
                        </TouchableOpacity>
                        <View style={{marginHorizontal: 10}}>
                            <Text style={{color: '#fff', fontWeight: '700', fontSize: 18}}>{firstName} {lastName}</Text>
                            <Text style={{color: 'gray', fontWeight: '500', fontSize: 13}}>{department}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20, borderBottomWidth: 1, borderColor: 'gray'}}>
                        <View>
                            <Text style={{color: 'gray', fontSize: 15, fontWeight: '500'}}>Level</Text>
                            <Text style={{color: '#fff', fontSize: 15, fontWeight: '500'}}>400</Text>
                        </View>       
                        <View style={{height: 50, width: 1, backgroundColor: 'gray', }} />
                            <View>
                                <Text style={{color: 'gray', fontSize: 15, fontWeight: '500'}}>Date Joined</Text>
                                <Text style={{color: '#fff', fontSize: 15, fontWeight: '500'}}>{/*profileDetail.createdOn */}</Text>
                            </View>                    
                        </View>

                        {/* Message Button SECTION */}
                        {/*{requests.map((request) => {
                            if (request.status === 'pending') {
                                <View style={{marginVertical: 10}}>
                                    <TouchableOpacity activeOpacity={0.9} style={{backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center', justifyContent: 'center', borderRadius: 5}} onPress={sendChatRequest}>
                                        <Text style={{color: '#f25fb9', fontSize: 14, fontWeight: '500'}}>MESSAGE</Text>
                                    </TouchableOpacity>
                                </View>
                            } else if (request.status === 'accepted') {
                                <View style={{marginVertical: 10}}>
                                    <TouchableOpacity activeOpacity={0.9} style={{backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center', justifyContent: 'center', borderRadius: 5}} onPress={() => navigation.navigate('Chat', {uid: uid, firstName: firstName, lastName: lastName})}>
                                        <Text style={{color: '#f25fb9', fontSize: 14, fontWeight: '500'}}>MESSAGE</Text>
                                    </TouchableOpacity>
                                </View>
                            } else if (request.status === 'declined') {
                                <View style={{marginVertical: 10}}>
                                    <TouchableOpacity activeOpacity={0.9} style={{backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center', justifyContent: 'center', borderRadius: 5}} onPress={sendChatRequest}>
                                        <Text style={{color: '#f25fb9', fontSize: 14, fontWeight: '500'}}>MESSAGE</Text>
                                    </TouchableOpacity>
                                </View>
                            } else {
                                <View style={{marginVertical: 10}}>
                                    <TouchableOpacity activeOpacity={0.9} style={{backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center', justifyContent: 'center', borderRadius: 5}} onPress={sendChatRequest}>
                                        <Text style={{color: '#f25fb9', fontSize: 14, fontWeight: '500'}}>MESSAGE</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                        })}*/}
                        
                        <View style={{marginVertical: 10}}>
                                    <TouchableOpacity activeOpacity={0.9} style={{backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center', justifyContent: 'center', borderRadius: 5}} onPress={sendChatRequest}>
                                        <Text style={{color: '#f25fb9', fontSize: 14, fontWeight: '500'}}>MESSAGE</Text>
                                    </TouchableOpacity>
                                </View>

                        {/* Educational Details SECTION */}
                        <View style={{ marginVertical: 10, borderColor: 'gray', borderRadius: 5, borderWidth: 1, padding: 10}}>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5}}>
                                <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>Matric No:</Text>
                                <Text style={{textTransform: 'uppercase', color: '#fff', fontSize: 12, fontWeight: '500'}}>{matric}</Text>
                            </View>  
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5}}>
                                <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>Department:</Text>
                                <Text style={{textTransform: 'uppercase', color: '#fff', fontSize: 12, fontWeight: '500'}}>{department}</Text>
                            </View> 
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5}}>
                                <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>Level:</Text>
                                <Text style={{textTransform: 'uppercase', color: '#fff', fontSize: 12, fontWeight: '500'}}>400 Level</Text>
                            </View>  
                        </View>     
                    </View>          

                    {/* Biography SECTION */}
                    {!bio ? <View /> :
                        <View style={{marginVertical: 10, borderColor: 'lightgray', borderWidth: 1, borderRadius: 10, padding: 20}}>
                            <Text style={{fontSize: 15, fontWeight: '500'}}>Bio:</Text>
                            <Text style={{color: 'gray', fontSize: 12, fontWeight: '500', marginTop: 5}}>{bio/*I was born in NY but raised in Argentina and Miami. For work.*/}</Text>
                        </View>  
                    }

                    {/* Personal Details SECTION */}
                    <View style={{marginVertical: 10, borderColor: 'lightgray', borderWidth: 1, borderRadius: 10, padding: 20}}>
                        <Text style={{fontSize: 15, fontWeight: '500'}}>Personal Details:</Text>

                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5}}>
                            <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>Name:</Text>
                            <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>{firstName} {lastName}</Text>
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5}}>
                            <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>Gender:</Text>
                            <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>male</Text>
                        </View> 

                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5}}>
                            <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>Email address:</Text>
                            <Text style={{textTransform: 'lowercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>{email}</Text>
                        </View>  

                        {!phone ? null :
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5}}>
                                <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>Phone Number:</Text>
                                <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>{phone}</Text>
                            </View>  
                        }

                        {!portfolio ? null :
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5}}>
                                <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>Portfolio:</Text>
                                <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>{portfolio}</Text>
                            </View>  
                        }
                    </View>

                    {/* Group SECTION */}
                    <View style={{marginVertical: 10, borderColor: 'lightgray', borderWidth: 1, borderRadius: 10, padding: 20}}>
                        <Text style={{fontWeight: '500', fontSize: 15}}>Member of Association:</Text>
                        <View style={{marginVertical: 10, flexDirection: 'row', alignItems: 'center'}}>
                            <View>
                                <Image style={{width: 50, height: 50, borderRadius: 50}} source={require('../../../assets/naicts.jpg')}  />
                            </View>
                        <View>
                            <Text style={{color: "#1c1c1c", marginLeft: 10, fontWeight: '500', fontSize: 14}}>NAICTS</Text>
                            <Text style={{color: "gray", marginLeft: 10, fontWeight: '500', fontSize: 8, lineHeight: 12, marginTop: 2}}>National Association Information and Communication Technology{'\n'}Students</Text>
                        </View>
                    </View>
                    <View style={{height: 1, backgroundColor: 'whitesmoke'}} />
                    {department === "Computer Science" ? (
                        <View style={{marginVertical: 10, flexDirection: 'row', alignItems: 'center'}}>
                            <View>
                                <Image style={{width: 50, height: 50, borderRadius: 50}} source={require('../../../assets/csc.jpg')}  />
                            </View>
                            <View>
                                <Text style={{color: "#1c1c1c", marginLeft: 10, fontWeight: '500', fontSize: 14}}>NACOS</Text>
                                <Text style={{color: "gray", marginLeft: 10, fontWeight: '500', fontSize: 8, marginTop: 2}}>National Association of Computing Students</Text>
                            </View>
                        </View>
                    ) : department === "Library and Information Science" ? (
                        <View style={{marginVertical: 10, flexDirection: 'row', alignItems: 'center'}}>
                            <View>
                                <Image style={{width: 50, height: 50, borderRadius: 50}} source={require('../../../assets/csc.jpg')}  />
                            </View>
                            <View>
                                <Text style={{color: "#1c1c1c", marginLeft: 10, fontWeight: '500', fontSize: 14}}>NALISS</Text>
                                <Text style={{color: "gray", marginLeft: 10, fontWeight: '500', fontSize: 8, marginTop: 2}}>National Association of Computing Students</Text>
                            </View>
                        </View>
                    ) : department === "Mass Communication" ? (
                        <View style={{marginVertical: 10, flexDirection: 'row', alignItems: 'center'}}>
                            <View>
                                <Image style={{width: 50, height: 50, borderRadius: 50}} source={require('../../../assets/csc.jpg')}  />
                            </View>
                            <View>
                                <Text style={{color: "#1c1c1c", marginLeft: 10, fontWeight: '500', fontSize: 14}}>MACOSA</Text>
                                <Text style={{color: "gray", marginLeft: 10, fontWeight: '500', fontSize: 8, marginTop: 2}}>National Association of Computing Students</Text>
                            </View>
                        </View>
                    ) : null}
                </View>    
                <View style={{height: 50}} />                            
            </ScrollView>            
        </SafeAreaView>
    )
}