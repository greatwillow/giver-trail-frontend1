"use strict";

import React, { Component } from "react";

import { SCREEN_WIDTH } from "../../../../styles/dimensions";

import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

class SignupScreen extends Component {
  render() {
    return (
      <View style={styles.layoutStyle}>
        <Text style={styles.textStyle}>Sign Up!</Text>
        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate("userRegistration");
          }}
          style={{ width: 300, height: 100, backgroundColor: "blue" }}
          underlayColor="green"
        >
          <Text>Go to User Registration!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  layoutStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 30,
    color: "red"
  }
});

export default SignupScreen;