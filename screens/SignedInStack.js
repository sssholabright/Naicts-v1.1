import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Elearning from './SignedInStack/E-learning/Elearning';
import Courses from './SignedInStack/E-learning/Courses';
import Xd from './SignedInStack/E-learning/Xd';
import VideoPage from './SignedInStack/E-learning/VideoPage';
import Home from './SignedInStack/Home';
import Profile from './SignedInStack/Profile';
import Menu from './SignedInStack/Menu';
import Event from './SignedInStack/Event/Event';
import Ranking from './SignedInStack/Ranking';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Members from './SignedInStack/Members';
import Executives from './SignedInStack/Executives';
import Excos from './SignedInStack/Excos';
import ListMembers from './SignedInStack/Discussion/ListMembers';
import CreateDiscussion from './SignedInStack/Discussion/CreateDiscussion';
import Participant from './SignedInStack/Discussion/Participant';
import DiscussionPage from './SignedInStack/Discussion/DiscussionPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function SignedInStack() {
    function StackTab() {
        return (
            <Tab.Navigator initialRouteName="home">            
                <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
                <Tab.Screen name="menu" component={Menu} />
                <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
            </Tab.Navigator>
        )
    }
    
    return (
        <Stack.Navigator initialRouteName="">
            <Stack.Group>
                <Stack.Screen name="stacktab" component={StackTab} options={{headerShown: false}}/>
                <Stack.Screen name="profile" component={Profile} options={{headerShown: true}} />
                <Stack.Screen name="menu" component={Menu} options={{headerShown: true}} />
                <Stack.Screen name="event" component={Event} options={{headerShown: true}} />
                <Stack.Screen name="elearning" component={Elearning} options={{headerShown: false}} />
                <Stack.Screen name="courses" component={Courses} options={{headerShown: false}} />
                <Stack.Screen name="xd" component={Xd} options={{headerShown: false}} />
                <Stack.Screen name="videopage" component={VideoPage} options={{headerShown: false}} />
                <Stack.Screen name="discussionpage" component={DiscussionPage} options={{headerShown: false}} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: "modal" }} >  
                <Stack.Screen name="ranking" component={Ranking} options={{headerShown: false}} />
                <Stack.Screen name="members" component={Members} options={{headerShown: false}} />
                <Stack.Screen name="executives" component={Executives} options={{headerShown: false}} />
                <Stack.Screen name="excos" component={Excos} options={{headerShown: false}} />
                <Stack.Screen name="listmembers" component={ListMembers} options={{headerShown: false}} />
                <Stack.Screen name="createiscussion" component={CreateDiscussion} options={{headerShown: false}} />
                <Stack.Screen name="participant" component={Participant} options={{headerShown: false}} />
            </Stack.Group>
        </Stack.Navigator>
    )
}