import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ScreenC } from "./ScreenC";

const Stack = createNativeStackNavigator();

export default class NestedStackNavigator extends React.Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Screen C" component={ScreenC} />
            </Stack.Navigator>
        );
    }
}