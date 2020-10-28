import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Text
} from "react-native";
import { connect } from "react-redux";
import { SearchBar } from 'react-native-elements';

import { getSearchMovies } from "@Redux/actions/MoviesAction";
import Loader from "@Components/Loader";
import GenreMovies from "@Components/GenreMovies";
import { Colors } from "@Config/Constants";

const Search = ({ navigation, moviesState, getSearchMovies }) => {
    const [searchGenres, setSearchGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSeatch] = useState('');

    useEffect(() => {
        if(moviesState) {
            setLoading(false);
        }
    }, [moviesState])

    useEffect(() => {
        if(search !== '') {
            getSearchMovies(search)
            .then(response => {
                setSearchGenres(response);
            })
        }
    }, [search])

    const _goToDetail = movie => {
        navigation.navigate("Detail", { movie: movie })
    }

    const _getMoviesSpecific = () => {
        if(search !== '' && searchGenres.length !== 0) {
            return <GenreMovies 
                genres={ searchGenres }
                _goToDetail={ _goToDetail }
            />
        }

        if(search !== '' && searchGenres.length === 0) {
            return <Text
                allowFontScaling={false}
                style={styles.messageText}
            >
                Sin resultados
            </Text>
        }

        return <GenreMovies 
            genres={ moviesState }
            _goToDetail={ _goToDetail }
        />
    }

    if(loading) {
        return (
            <Loader />
        )
    }

    return (
        <View style={ styles.container }>
            <ScrollView>
                <SearchBar
                    lightThem
                    allowFontScaling={ false }
                    autoFocus={ true }
                    placeholder='Search'
                    containerStyle={ styles.searchbarContainer }
                    inputContainerStyle={ styles.searchbar }
                    onChangeText={value => setSeatch(value)}
                    value={ search }
                />
                { _getMoviesSpecific() }
            </ScrollView>
        </View>
    )
}

const mapStateToProps = ({ MoviesReducer }) => ({
    moviesState: MoviesReducer
})

const mapDispatchToProps = {
    getSearchMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

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