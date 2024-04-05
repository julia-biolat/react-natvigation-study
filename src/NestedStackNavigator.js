import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, {Component} from "react";
import { ScreenC } from "./ScreenC";
import { ScreenB } from "./ScreenB";
import { ScreenA } from "./ScreenA";

const Stack = createNativeStackNavigator();

export default class NestedStackNavigator extends React.Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Screen A" component={ScreenA} />
                {/*<Stack.Screen name="Screen B" component={ScreenB} />*/}
                <Stack.Screen name="Screen C" component={ScreenC} />
            </Stack.Navigator>
        );
    }
}