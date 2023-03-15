import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/stack";
import Main from "./components/Main";
import chats from "./components/screen/chatas";
import map from "./components/map";
import profile from "./components/screen/profile";
import start from "./components/screen/start";

const Stack = createStackNavigator()
export default function Navigate() {
    return (
        <NavigationContainer>
            <StackNavigator>
                <Stack.Screen name="start" component={start}/>
                <Stack.Screen name="Main" component={Main}/>
                <Stack.Screen name="Chats" component={Chats}/>
                <Stack.Screen name="Profile" component={Profile}/>
                <Stack.Screen name="Map" component={map}/>
                
            </StackNavigator>
        </NavigationContainer>
    )
}