import React from "react";
import { StyleSheet, Platform, KeyboardAvoidingView } from "react-native";
import { Provider } from "react-redux";

import configureStore from "@Redux/store";
import BottomNavigation from "@Navigations/BottomNavigation";

let store = configureStore()

export default function App() {
  return (
    <Provider store={ store }>
      <KeyboardAvoidingView
        style={ styles.container }
      > 
        <BottomNavigation />
      </KeyboardAvoidingView> 
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
