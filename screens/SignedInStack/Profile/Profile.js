import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../SignedOutStack/authHooks/firebase'
import { doc, getDoc } from 'firebase/firestore'
import moment from 'moment'

export default function Profile({navigation}) {
    const [profileDetail, setProfileDetail] = useState([])
    const [loading, setLoading] = useState(true)
    const { user } = auth.currentUser;

    useEffect(() => {
        const getProfileDetails = async () => {
            const profileDetailsCollection = doc(db, 'users', auth.currentUser.uid)  
            const profileDetailsSnapshot = await getDoc(profileDetailsCollection)
            if (profileDetailsSnapshot.exists()) {
                setProfileDetail(profileDetailsSnapshot.data())
                setLoading(false)
            } else {
                console.log("No such document!");
            }
        }
        getProfileDetails()
        console.log(profileDetail)
    }, [user])



    return (
        <SafeAreaView style={{height: '100%', backgroundColor: '#fff'}}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={{alignItems: 'center', justifyContent: 'center', padding: 15}}>
                <Text style={{fontWeight: '700', fontSize: 18}}>PROFILE</Text>
            </View> 
            {loading ? (
                <Text>Loading...</Text> 
            ) : (
                <ScrollView showsVerticalScrollIndicator={false} style={{padding: 20}}>
                    <View style={{padding: 20, backgroundColor: '#000', borderRadius: 10}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity activeOpacity={0.5}  /*onPress={takePhotoFromCamera}*/ style={{marginHorizontal: 10}}>
                                <Image source={require('../../../assets/me.jpg')} style={{width: 70, height: 70, borderRadius: 50}} />
                            </TouchableOpacity>
                            <View style={{marginHorizontal: 10}}>
                                <Text style={{color: '#fff', fontWeight: '700', fontSize: 18}}>{profileDetail.firstName} {profileDetail.lastName}</Text>
                                <Text style={{color: 'gray', fontWeight: '500', fontSize: 13}}>Computer Science</Text>
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
                                    <Text style={{color: '#fff', fontSize: 15, fontWeight: '500'}}>{moment(profileDetail.createdAt).format('DD MMM YYYY')}</Text>
                                </View>                    
                            </View>

                            {/* Educational Details SECTION */}
                            <View style={{ marginVertical: 10, borderColor: 'gray', borderRadius: 5, borderWidth: 1, padding: 10}}>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5}}>
                                    <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>Matric No:</Text>
                                    <Text style={{textTransform: 'uppercase', color: '#fff', fontSize: 12, fontWeight: '500'}}>{profileDetail.matric}</Text>
                                </View>  
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5}}>
                                    <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>Department:</Text>
                                    <Text style={{textTransform: 'uppercase', color: '#fff', fontSize: 12, fontWeight: '500'}}>Computer Science</Text>
                                </View> 
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5}}>
                                    <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>Level:</Text>
                                    <Text style={{textTransform: 'uppercase', color: '#fff', fontSize: 12, fontWeight: '500'}}>400 Level</Text>
                                </View>  
                            </View>
                            <View>
                                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('settings')} style={{backgroundColor: 'gray', paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
                                    <Text style={{color: '#fff', fontSize: 14, fontWeight: '500'}}>ACCOUNT SETTINGS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>          

                        {/* Biography SECTION */}
                        {!profileDetail.bio ? null :
                            <View style={{marginVertical: 10, borderColor: 'lightgray', borderWidth: 1, borderRadius: 10, padding: 20}}>
                                <Text style={{fontSize: 15, fontWeight: '500'}}>Bio:</Text>
                                <Text style={{color: 'gray', fontSize: 12, fontWeight: '500', marginTop: 5}}>{profileDetail.bio/*I was born in NY but raised in Argentina and Miami. For work.*/}</Text>
                            </View>  
                        }

                        {/* Personal Details SECTION */}
                        <View style={{marginVertical: 10, borderColor: 'lightgray', borderWidth: 1, borderRadius: 10, padding: 20}}>
                            <Text style={{fontSize: 15, fontWeight: '500'}}>Personal Details:</Text>

                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5}}>
                                <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>Name:</Text>
                                <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>{profileDetail.firstName} {profileDetail.lastName}</Text>
                            </View>

                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5}}>
                                <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>Gender:</Text>
                                <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>male</Text>
                            </View> 

                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5}}>
                                <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>Email address:</Text>
                                <Text style={{textTransform: 'lowercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>{profileDetail.email}</Text>
                            </View>  

                            {!profileDetail.phone ? null :
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5}}>
                                    <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>Phone Number:</Text>
                                    <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>{profileDetail.phone}</Text>
                                </View>  
                            }

                            {!profileDetail.portfolio ? null :
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5}}>
                                    <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>Portfolio:</Text>
                                    <Text style={{textTransform: 'uppercase', color: 'gray', fontSize: 12, fontWeight: '500'}}>{profileDetail.portfolio}</Text>
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
                        {profileDetail.department === "Computer Science" ? (
                            <View style={{marginVertical: 10, flexDirection: 'row', alignItems: 'center'}}>
                                <View>
                                    <Image style={{width: 50, height: 50, borderRadius: 50}} source={require('../../../assets/csc.jpg')}  />
                                </View>
                                <View>
                                    <Text style={{color: "#1c1c1c", marginLeft: 10, fontWeight: '500', fontSize: 14}}>NACOS</Text>
                                    <Text style={{color: "gray", marginLeft: 10, fontWeight: '500', fontSize: 8, marginTop: 2}}>National Association of Computing Students</Text>
                                </View>
                            </View>
                        ) : profileDetail.department === "Library and Information Science" ? (
                            <View style={{marginVertical: 10, flexDirection: 'row', alignItems: 'center'}}>
                                <View>
                                    <Image style={{width: 50, height: 50, borderRadius: 50}} source={require('../../../assets/csc.jpg')}  />
                                </View>
                                <View>
                                    <Text style={{color: "#1c1c1c", marginLeft: 10, fontWeight: '500', fontSize: 14}}>NALISS</Text>
                                    <Text style={{color: "gray", marginLeft: 10, fontWeight: '500', fontSize: 8, marginTop: 2}}>National Association of Computing Students</Text>
                                </View>
                            </View>
                        ) : profileDetail.department === "Mass Communication" ? (
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
            )}    
        </SafeAreaView>
    )
}