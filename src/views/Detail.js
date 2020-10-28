import React, {useState, useEffect} from "react";
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import StarRating from 'react-native-star-rating';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from "@react-native-community/async-storage";

import { Colors } from "@Config/Constants";
import { updateFavorites, wasFavorite } from "@Redux/actions/MoviesAction";

const { width } = Dimensions.get("screen");

const Detail = props => {
    const [isFavorite, setIsFavorite] = useState(false);
    const movie = props.route.params.movie;

    useEffect(() => {
        getColor();
    }, [])

    const _getCast = () => {
        return movie.cast.map(casting => casting + ", ")
    }

    const _favoriteAction = () => {
        setIsFavorite(!isFavorite);
        props.updateFavorites(movie);
    }

    const getColor = async () => {
        await AsyncStorage.getItem("favorites")
        .then((response) => {
            const favorites = JSON.parse(response);
            if (favorites) {
                const wasFav = wasFavorite(movie, favorites);
                if(wasFav) {
                    setIsFavorite(true);
                } else {
                    setIsFavorite(false)
                }
            } else {
                setIsFavorite(false);
            } 
        });
    }

    return (
        <View style={ styles.container }>
            <ScrollView>
                <ImageBackground
                    source={{ uri: movie.backdrop }}
                    style={ styles.imageBackdropContainer }
                >
                    <TouchableOpacity onPress={() => _favoriteAction()}>
                        <MaterialCommunityIcons name="heart" size={ 25 } color={ isFavorite ? Colors.red : Colors.white } />
                    </TouchableOpacity>
                    <Text
                        allowFontScaling={ false }
                        style={ styles.titleText } 
                    >
                        {movie.title} (rating {movie.imdb_rating})
                    </Text>
                </ImageBackground>
                <View style={{ alignItems: 'flex-end' }}>
                    <View style={ styles.ratingContainer }>
                        <StarRating
                            disabled={ true }
                            maxStars={ 5 }
                            rating={ parseFloat(movie.imdb_rating/2) }
                            fullStarColor={ 'gold' }
                            starSize={ 30 }
                            starStyle={ styles.start }
                        />
                    </View>
                </View>
                <View style={ styles.movieDescription }>
                    <Text
                        allowFontScaling={ false }
                        style={ styles.movieText } 
                    >
                        {movie.released_on.substring(0,4)} | {movie.length} | {movie.director}{'\n'}
                    </Text>
                    <Text
                        allowFontScaling={ false }
                        style={ styles.movieText } 
                    >
                        Cast: {_getCast()}{'\n'}
                    </Text>
                    <Text
                        allowFontScaling={ false }
                        style={ styles.movieText } 
                    >
                        Movie description: { movie.overview }
                    </Text>
                </View>
                <Image 
                    source={{ uri: movie.poster }}
                    style={ styles.imagePoster }
                />
            </ScrollView>
        </View>
    )
}

const mapStateToProps = {

}

const mapDispatchToProps = {
    updateFavorites
};

export default connect(null, mapDispatchToProps)(Detail);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackdropContainer: {
        resizeMode: "cover", 
        width: width, 
        height: 220, 
        padding: 10,
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    titleText: { 
        fontSize: 30, 
        width: width/2, 
        textAlign: "left" 
    },
    ratingContainer: {
        alignItems: 'flex-start',
        marginTop: 50,
        width: width/2
    },
    start: {
        paddingRight: 5
    },
    movieDescription: {
        padding: 20
    },
    movieText: {
        fontSize: 20, 
    },
    imagePoster: {
        resizeMode: "contain",
        width: 180,
        height: 200,
        position: 'absolute',
        top: 100
    }
})