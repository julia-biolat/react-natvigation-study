import React from 'react';
import {View, Text, Button} from 'react-native';

export class ScreenA extends React.Component {
    render() {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>이것은 ScreenA라고 합니다.</Text>
          <Button
            title='B Screen으로 이동'
            onPress={() => this.props.navigation.navigate('ScreenB', {value: 'fromA'})}
          />
          <Button
            title='C Screen으로 이동'
            onPress={() => this.props.navigation.navigate('NestedNavigator', {screen: 'Screen C'})} // 'NestedNavigator'와 'Screen C' 수정
          />
        </View>
      );
    }
}
