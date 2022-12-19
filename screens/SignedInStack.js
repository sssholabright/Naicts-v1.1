import { Animated,  View } from 'react-native';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Feather, FontAwesome5, Octicons } from '@expo/vector-icons'
import Elearning from './SignedInStack/E-learning/Elearning';
import Home from './SignedInStack/Home/Home';
import Profile from './SignedInStack/Profile/Profile';
import Menu from './SignedInStack/Menu/Menu';
import Event from './SignedInStack/Event/Event';
import Members from './SignedInStack/Members/Members';
import Executives from './SignedInStack/Executives/Executives';
import Excos from './SignedInStack/Executives/Excos';
import ListMembers from './SignedInStack/Discussion/ListMembers';
import CreateDiscussion from './SignedInStack/Discussion/CreateDiscussion';
import Participant from './SignedInStack/Discussion/Participant';
import DiscussionPage from './SignedInStack/Discussion/DiscussionPage';
import Circular from './SignedInStack/News/Circular';
import CourseSearch from './SignedInStack/E-learning/CourseSearch';
import Gallery from './SignedInStack/Gallery/Gallery';
import ShowImage from './SignedInStack/Gallery/ShowImage';
import MarketPlace from './SignedInStack/MarketPlace/MarketPlace';
import ProductList from './SignedInStack/MarketPlace/ProductList';
import LostAndFound from './SignedInStack/LostAndFound/LostAndFound';
import ProductInfo from './SignedInStack/MarketPlace/ProductInfo';
import EventDetail from './SignedInStack/Event/EventDetail';
import DocumentScreen from './SignedInStack/Files/DocumentScreen';
import FilesList from './SignedInStack/Files/FilesList';
import DiscussionForum from './SignedInStack/Discussion/DiscussionForum';
import ContactUs from './SignedInStack/Contact Us/ContactUs';
import Admin from './SignedInStack/Executives/Admin';
import ReadMore from './SignedInStack/News/ReadMore';
import PostItem from './SignedInStack/LostAndFound/PostItem';
import Settings from './SignedInStack/Profile/Settings';
import EditProfile from './SignedInStack/Profile/EditProfile';
import NonCurrentUserProfile from './SignedInStack/Profile/NonCurrentUserProfile';
import ChatPage from './SignedInStack/Chat/ChatPage';
import MessageScreen from './SignedInStack/Chat/MessageScreen';
import AddProfile from './SignedInStack/Profile/AddProfile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function SignedInStack() {
    function StackTab() {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home';
                            return <Feather name={iconName} size={size} color={color} />
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'user' : 'user';
                            return <Feather name={iconName} size={size} color={color} />
                        } else if (route.name === 'Menu') {
                            iconName = focused ? 'apps' : 'apps';
                            return <Octicons name={iconName} size={size} color={color} />
                        }
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#f25fb9',
                    inactiveTintColor: 'gray',
                    style: {
                        backgroundColor: '#fff',
                        borderTopWidth: 0,
                        elevation: 0,
                        shadowOpacity: 0,
                        height: 60,
                    },
                    labelStyle: {
                        fontSize: 12,
                        marginBottom: 5,
                    },
                    tabStyle: {
                        marginTop: 5,
                    }
                }}
                initialRouteName="Home">
                <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
                <Tab.Screen name="Menu" component={Menu} options={{headerShown: false}} />
                <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}} />
            </Tab.Navigator>
        )
    }

    return (
        <Stack.Navigator initialRouteName="">
            <Stack.Group>
                <Stack.Screen name="stacktab" component={StackTab} options={{headerShown: false}}/>
                <Stack.Screen name="nonuserprofile" component={NonCurrentUserProfile} options={{headerShown: false}} />
                <Stack.Screen name="members" component={Members} options={{headerShown: false}} />
                <Stack.Screen name="circular" component={Circular} options={{headerShown: false}} />
                <Stack.Screen name="discussionforum" component={DiscussionForum} options={{headerShown: false}} />
                <Stack.Screen name="event" component={Event} options={{headerShown: false}} />
                <Stack.Screen name="elearning" component={Elearning} options={{headerShown: false}} />
                <Stack.Screen name="gallery" component={Gallery} options={{headerShown: false}} />
                <Stack.Screen name="documentscreen" component={DocumentScreen} options={{headerShown: false}} />
                <Stack.Screen name="marketplace" component={MarketPlace} options={{headerShown: false}} />
                <Stack.Screen name="lostandfound" component={LostAndFound} options={{headerShown: false}} />
                <Stack.Screen name="executives" component={Executives} options={{headerShown: false}} />
                <Stack.Screen name="contactus" component={ContactUs} options={{headerShown: false}} />
                <Stack.Screen name="chatpage" component={ChatPage} options={{headerShown: false}} />
            </Stack.Group>

            {/* Components Stack */}
            <Stack.Group screenOptions={{ presentation: "modal" }} >  
                <Stack.Screen name="fileslist" component={FilesList} options={{headerShown: false}} />
                <Stack.Screen name="addprofile" component={AddProfile} options={{headerShown: false}} />
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
                <Stack.Screen name="admin" component={Admin} options={{headerShown: false}} />
                <Stack.Screen name="readmore" component={ReadMore} options={{headerShown: false}} />
                <Stack.Screen name="postitem" component={PostItem} options={{headerShown: false}} />
                <Stack.Screen name="editprofile" component={EditProfile} options={{headerShown: false}} />
                <Stack.Screen name="settings" component={Settings} options={{headerShown: false}} />
                <Stack.Screen name="messagescreen" component={MessageScreen} options={{headerShown: false}} />
            </Stack.Group>
        </Stack.Navigator>
    )
}