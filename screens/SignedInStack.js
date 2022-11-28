import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Elearning from './SignedInStack/E-learning/Elearning';
import Home from './SignedInStack/Home/Home';
import Profile from './SignedInStack/Profile/Profile';
import Menu from './SignedInStack/Menu/Menu';
import Event from './SignedInStack/Event/Event';
import Ranking from './SignedInStack/Ranking';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, FontAwesome5, Octicons } from '@expo/vector-icons'
import Members from './SignedInStack/Members/Members';
import Executives from './SignedInStack/Executives/Executives';
import Excos from './SignedInStack/Executives/Excos';
import ListMembers from './SignedInStack/Discussion/ListMembers';
import CreateDiscussion from './SignedInStack/Discussion/CreateDiscussion';
import Participant from './SignedInStack/Discussion/Participant';
import DiscussionPage from './SignedInStack/Discussion/DiscussionPage';
import { View } from 'react-native';
import Circular from './SignedInStack/News/Circular';
import CourseSearch from './SignedInStack/E-learning/CourseSearch';
import Gallery from './SignedInStack/Gallery/Gallery';
import ShowImage from './SignedInStack/Gallery/ShowImage';
import MarketPlace from './SignedInStack/MarketPlace/MarketPlace';
import ProductList from './SignedInStack/MarketPlace/ProductList';
import LostAndFound from './SignedInStack/MarketPlace/LostAndFound';
import ProductInfo from './SignedInStack/MarketPlace/ProductInfo';
import EventDetail from './SignedInStack/Event/EventDetail';
import DocumentScreen from './SignedInStack/Files/DocumentScreen';
import FilesList from './SignedInStack/Files/FilesList';
import DiscussionForum from './SignedInStack/Discussion/DiscussionForum';
import ContactUs from './SignedInStack/Contact Us/ContactUs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function SignedInStack() {
    function StackTab() {
        return (
            <Tab.Navigator 
                screenOptions={({route}) => ({
                    tabBarIcon: ({color}) => {
                        if (route.name === 'Home') {
                            return <Feather name="home" size={22} />
                        }
                        if (route.name === 'Menu') {
                            return (
                                <View style={{backgroundColor: '#ef018a', borderRadius: 50, width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}}>
                                    <Octicons name="apps" size={25} color="#fff" />
                                </View>
                            )
                        }
                        if (route.name === 'Profile') {
                            return <FontAwesome5 name="user" size={22} />
                        }
                    },
                    tabBarActiveTintColor: '#ef018a',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: [{height: 70}]
                })} 
                initialRouteName="Profile">            
                <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
                <Tab.Screen name="Menu" component={Menu} options={{headerShown: false}} />
                <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
            </Tab.Navigator>
        )
    }
    
    return (
        <Stack.Navigator initialRouteName="contactus">
            <Stack.Group>
                <Stack.Screen name="stacktab" component={StackTab} options={{headerShown: false}}/>
                <Stack.Screen name="profile" component={Profile} options={{headerShown: true}} />
                <Stack.Screen name="members" component={Members} options={{headerShown: false}} />
                <Stack.Screen name="circular" component={Circular} options={{headerShown: false}} />
                <Stack.Screen name="discussionforum" component={DiscussionForum} options={{headerShown: false}} />
                <Stack.Screen name="event" component={Event} options={{headerShown: false}} />
                <Stack.Screen name="elearning" component={Elearning} options={{headerShown: false}} />
                <Stack.Screen name="ranking" component={Ranking} options={{headerShown: false}} />
                <Stack.Screen name="gallery" component={Gallery} options={{headerShown: false}} />
                <Stack.Screen name="documentscreen" component={DocumentScreen} options={{headerShown: false}} />
                <Stack.Screen name="marketplace" component={MarketPlace} options={{headerShown: false}} />
                <Stack.Screen name="lostandfound" component={LostAndFound} options={{headerShown: false}} />
                <Stack.Screen name="executives" component={Executives} options={{headerShown: false}} />
                <Stack.Screen name="contactus" component={ContactUs} options={{headerShown: false}} />
            </Stack.Group>
            {/* Components Stack */}
            <Stack.Group screenOptions={{ presentation: "modal" }} >  
                <Stack.Screen name="fileslist" component={FilesList} options={{headerShown: false}} />
                <Stack.Screen name="searchcourse" component={CourseSearch} options={{headerShown: false}} />
                <Stack.Screen name="showimage" component={ShowImage} options={{headerShown: false}} />
                <Stack.Screen name="discussionpage" component={DiscussionPage} options={{headerShown: false}} />
                <Stack.Screen name="eventdetail" component={EventDetail} options={{headerShown: false}} />
                <Stack.Screen name="participant" component={Participant} options={{headerShown: false}} />
                <Stack.Screen name="productinfo" component={ProductInfo} options={{headerShown: false}} />
                <Stack.Screen name="productlist" component={ProductList} options={{headerShown: false}} />
                <Stack.Screen name="excos" component={Excos} options={{headerShown: false}} />
                <Stack.Screen name="listmembers" component={ListMembers} options={{headerShown: false}} />
                <Stack.Screen name="creatediscussion" component={CreateDiscussion} options={{headerShown: false}} />
            </Stack.Group>
        </Stack.Navigator>
    )
}