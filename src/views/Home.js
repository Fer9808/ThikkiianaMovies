import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
} from "react-native";
import { connect } from "react-redux";

import { getMovies } from "@Redux/actions/MoviesAction";
import Header from "@Components/Header";
import Loader from "@Components/Loader";
import GenreMovies from "@Components/GenreMovies";

const Home = ({ navigation, moviesState, getMovies }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMovies();
    }, []);

    useEffect(() => {
        if(moviesState) {
            setLoading(false);
        }
    }, [moviesState])

    const _goToDetail = movie => {
        navigation.navigate("Detail", { movie: movie })
    }

    if(loading) {
        return (
            <Loader />
        )
    }

    return (
        <View style={ styles.container }>
            <ScrollView>
                <Header title={"WOOKIE\nMOVIES"}/>
                <GenreMovies 
                    genres={ moviesState }
                    _goToDetail={ _goToDetail }
                />
            </ScrollView>
        </View>
    )
}

const mapStateToProps = ({ MoviesReducer }) => ({
    moviesState: MoviesReducer
})

const mapDispatchToProps = {
    getMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})