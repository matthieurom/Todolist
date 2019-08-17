import React from "react";
import { View, Button, Text } from "react-native";
import Login from "./Login";
import Signup from "./Signup";

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>Welcolme</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("Login")}
        />
        <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate("Signup")}
        />
      </View>
    );
  }
}
