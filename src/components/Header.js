import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import PropTypes from "prop-types";

export default function Header({
    title
}) {
    return (
        <View style={ styles.header }>
            <Text
                allowFontScaling={ false }
                style={ styles.textHeader }
            >
                { title }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        paddingVertical: 20
    },
    textHeader: {
        fontSize: 40,
        textAlign: "center"
    }
})

Header.propTypes = {
    title: PropTypes.string
}