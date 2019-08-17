import React from "react";
import { TextInput, Text, View, Button } from "react-native";

export default class Signup extends React.Component {
  render() {
    return (
      <View>
        <Text>Sign up</Text>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Mot de passe" />
      </View>
    );
  }
}
