import React from "react";
import { Text, View, Button } from "react-native";

export default class Loading extends React.Component {
  render() {
    return (
      <View>
        <Text>Welcolme</Text>
        <Button
          title="App"
          onPress={() => this.props.navigation.navigate("App")}
        />
        <Button
          title="Auth"
          onPress={() => this.props.navigation.navigate("Auth")}
        />
      </View>
    );
  }
}
