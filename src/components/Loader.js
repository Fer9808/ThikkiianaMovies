import React from "react";
import {
    View,
    ActivityIndicator,
    StyleSheet,
} from "react-native";

import { Colors } from "@Config/Constants";

const Loader = () => {
    return (
        <View style={ styles.container }>
            <ActivityIndicator
                size="large"
                animating={ true }
                color={ Colors.blue }
            />
        </View>
    );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: Colors.opacity_loader,
  }
});