import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Text
} from "react-native";
import { connect } from "react-redux";
import { useIsFocused } from '@react-navigation/native';

import { getFavorites } from "@Redux/actions/MoviesAction";
import Header from "@Components/Header";
import GenreMovies from "@Components/GenreMovies";
import { Colors } from "@Config/Constants";
import { usePrevProps } from '@Config/Hooks';

const Favorite = ({ navigation, getFavorites, favorites }) => {
    const isFocused = useIsFocused();
    const [favoriteGenres, setFavoriteGenres] = useState([]);
    const prevProps = usePrevProps(isFocused);

    useEffect(() => {
        getFavorites()
        .then(response => {
            setFavoriteGenres(response)
        })
    }, []);

    useEffect(() => {
        getFavorites()
        .then(response => {
            setFavoriteGenres(response)
        })
    }, [isFocused]);

    const _goToDetail = movie => {
        navigation.navigate("Detail", { movie: movie })
    }

    const _getMoviesSpecific = () => {
        if(favoriteGenres.length === 0) {
            return <Text
                allowFontScaling={false}
                style={styles.messageText}
            >
                No tienes favoritos
            </Text>
        }

        return <GenreMovies 
            genres={ favoriteGenres }
            _goToDetail={ _goToDetail }
        />
    }

    return (
        <View style={ styles.container }>
            <ScrollView>
                <Header title={"FAVORITE\nMOVIES"}/>
                { _getMoviesSpecific() }
            </ScrollView>
        </View>
    )
}

const mapStateToProps = ({ FavoriteMoviesReducer }) => ({
    favorites: FavoriteMoviesReducer
})

const mapDispatchToProps = {
    getFavorites
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchbarContainer:{
        flex: 1,
        backgroundColor: Colors.white,
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    searchbar:{
        backgroundColor: Colors.gray_searchbar,
        borderRadius: 10,
        height: 40,
    },
    messageText: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 15
    }
})