import React from "react";
import { View, TextInput, Text } from "react-native";

export default class Login extends React.Component {
  render() {
    return (
      <View>
        <Text>Login</Text>
        <TextInput placeholder="Email" />
      </View>
    );
  }
}
