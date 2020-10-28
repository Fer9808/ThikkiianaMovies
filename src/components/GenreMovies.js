import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";

const GenreMovies = ({ genres, _goToDetail }) => {
    const _getGeneresMovies = () => {
        return genres.map(genre => (
            <View key={genre.name} style={ styles.genreContainer }>
                <Text
                    allowFontScaling={ false }
                    style={ styles.genreText } 
                >
                    {genre.name}
                </Text>
                <FlatList
                    data={genre.movies}
                    renderItem={genresMovies}
                    keyExtractor={item => item.title}
                    horizontal
                    showsHorizontalScrollIndicator={ false }
                />
            </View>
        ))
    }

    const genresMovies = ({ item }) => {
        return <TouchableOpacity
            onPress={() => _goToDetail(item)}
        >
            <ImageBackground
                source={{ uri: item.poster }}
                style={ styles.imageContainer }
            >
                <Text
                    allowFontScaling={ false }
                    style={{ fontSize: 15 }} 
                >
                    {item.title}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    }

    return (
        <View>
            { _getGeneresMovies() }
        </View>
    )
}

export default GenreMovies;

const styles = StyleSheet.create({
    genreContainer : { 
        marginBottom: 20 
    },
    genreText: { 
        fontSize: 25,
        marginHorizontal: 20, 
        marginBottom: 10 
    },
    imageContainer: { 
        resizeMode: "cover", 
        width: 150, 
        height: 180, 
        padding: 10 
    }
})

GenreMovies.propTypes = {
    genres: PropTypes.array,
    _goToDetail: PropTypes.func
}