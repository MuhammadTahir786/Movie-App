import { View, Text, SafeAreaView, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import { styles } from "./style"
import { getMovieDetail, getFavoriteMovies } from '../../store/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import FastImage from 'react-native-fast-image'
import Ionicons from "react-native-vector-icons/Ionicons"
import Octicons from "react-native-vector-icons/Octicons"
import moment from 'moment'
import MovieApi from '../../service/movieServices'



const Detail = ({ navigation, route }) => {

    const dispatch = useDispatch()
    const id = route?.params?.id;
    const section = route?.params?.section;
    const favoriteMoviesData = useSelector((state) => state.movie.favorite_movies)
    const movieDetail = useSelector((state) => state.movie.detail)

    const isFavoriteMovie = useMemo(() => {
        return favoriteMoviesData?.some((item) => item?.id === id);
    }, [favoriteMoviesData, id]);

    useEffect(() => {
        dispatch(getMovieDetail(id))
    }, [id])


    const AddToFavorites = async () => {
        try {
            const body = {
                "media_type": "movie",
                "media_id": id,
                "favorite": true
            }
            const response = await MovieApi.addToFavorite(body)
            if (response?.data?.status_code == 1) {
                dispatch(getFavoriteMovies())
                alert("Added to Favorites")
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <ScrollView>
                <FastImage
                    style={styles.image}
                    source={{
                        uri: 'https://image.tmdb.org/t/p/w500' + movieDetail?.poster_path,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                />
                <TouchableOpacity style={styles.backIcon}>
                    <Ionicons name="arrow-back" size={24} color="white" onPress={() => navigation.goBack()} />
                </TouchableOpacity>

                <View style={styles.detailContainer}>
                    <Text style={styles.title}>{movieDetail?.title}</Text>
                    <Text style={styles.tagline}>{movieDetail?.tagline}</Text>
                    <View style={styles.infoContainer}>
                        <Ionicons name="star" size={15} color="white" />
                        <Text style={styles.rating}>{movieDetail?.vote_average}</Text>
                        <Octicons name="dot-fill" size={15} color="white" />
                        <Text style={styles.date}>{moment(movieDetail?.release_date).format("MMMM Do, YY")} </Text>
                    </View>
                    <Text style={styles.genreHeader}>Genre</Text>
                    <View style={styles.genreContainer}>
                        {movieDetail?.genres?.map((item, index) => {
                            return (
                                <View key={index} style={styles.genreSubContainer} >
                                    <Text style={styles.genreText}>{item?.name}</Text>
                                </View>
                            )
                        })}
                    </View>
                    <View>
                        <Text style={styles.overviewHeader}>Overview</Text>
                        <Text style={styles.overviewText}>{movieDetail?.overview}</Text>
                    </View>

                    {section != "Favorite" && isFavoriteMovie == false && <TouchableOpacity onPress={() => { AddToFavorites() }} style={styles.btnContainer}>
                        <Text style={styles.btnText}>Add to Favorites</Text>
                    </TouchableOpacity>}
                </View>
            </ScrollView>
        </View>
    )
}

export default Detail