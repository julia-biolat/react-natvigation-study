import React, { Component } from 'react';
import {View,Text} from 'react-native';

export class ScreenC extends React.Component{
    render(){
        return(
            <View style = {{flex:1, alignItems:'center',justifyContent: 'center'}}>
                <Text>이것은 C Screen입니다.</Text>
            </View>
        )
    }
}