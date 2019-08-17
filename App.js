import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import Signup from "./components/Signup";
import Login from "./components/Login";
import HomeAuth from "./components/HomeAuth";
import Todolist from "./components/Todolist";
import Loading from "./components/Loading";
import HomeApp from "./components/HomeApp";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const AuthStack = createStackNavigator(
  {
    HomeAuth: { screen: HomeAuth },
    Login: { screen: Login },
    Signup: { screen: Signup }
  },
  {
    initialRouteName: "HomeAuth"
  }
);

const AppStack = createStackNavigator({
  HomeApp: { screen: HomeApp },
  Todolist: { screen: Todolist }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const Switch = createSwitchNavigator(
  {
    Loading: { screen: Loading },
    Auth: { screen: AuthStack },
    App: { screen: AppStack }
  },
  {
    initialRouteName: "Loading"
  }
);

const AppContainer = createAppContainer(Switch);

export default class extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const firebaseConfig = {
  apiKey: "AIzaSyDIBtClgGEvNqtsrZfcoYWxExYesXHkFfI",
  authDomain: "todolist-5aa70.firebaseapp.com",
  databaseURL: "https://todolist-5aa70.firebaseio.com",
  projectId: "todolist-5aa70",
  storageBucket: "",
  messagingSenderId: "375779510952",
  appId: "1:375779510952:web:50b0babe9f991fee"
};

firebase.initializeApp(firebaseConfig);
