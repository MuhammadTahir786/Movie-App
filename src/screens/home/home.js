import { View, Text, SafeAreaView, ActivityIndicator, TouchableOpacity, TextInput, ScrollView, StatusBar } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { styles } from "./style"
import { useDispatch, useSelector } from 'react-redux';
import { FlashList } from "@shopify/flash-list";
import { getFavoriteMovies, getMovies, searchMovies } from "../../store/actions/movieAction"
import { Colors } from '../../assets/color';
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import debounce from "lodash.debounce";
import { useIsFocused } from '@react-navigation/native';
import MovieCard from '../../components/movieCard';
import { AuthContext } from '../../context/authContext';

const Home = ({ navigation }) => {

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("")
    const [showMenu, setShowMenu] = useState(false)
    const { LogoutFunction } = useContext(AuthContext)
    const dispatch = useDispatch()
    const isFocus = useIsFocused()
    const moviesData = useSelector((state) => state.movie.data)
    const total_pages = useSelector((state) => state.movie.total_pages)
    const favoriteMoviesData = useSelector((state) => state.movie.favorite_movies)
    const search_movies = useSelector((state) => state.movie.search_movies)


    useEffect(() => {
        dispatch(getMovies(page))
    }, [page])

    useEffect(() => {
        if (isFocus) {
            dispatch(getFavoriteMovies())
        }
    }, [isFocus])


    const handleEndReached = () => {
        if (search === "" && page < total_pages) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    const renderListEmpty = () => {
        return (
            <View style={styles.listEmptyContainer}>
                <Text style={styles.listText}>No More Movies</Text>
            </View>
        )
    };

    const handleSearch = debounce((text) => {
        setSearch(text)
        if (text !== "") {
            dispatch(searchMovies(text))
        }
        else if (text === "") {
            dispatch(getMovies(page))
        }
    }, 1000)

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.background} style="dark-content" />
            <ScrollView>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={styles.searchContainer}>
                        <Ionicons name="search" size={20} color={Colors.text} />
                        <TextInput
                            placeholder='Search'
                            placeholderTextColor={Colors.text}
                            style={styles.searchBar}
                            autoCapitalize='none'
                            onChangeText={(text) => handleSearch(text)}
                        />
                    </View>
                    <TouchableOpacity style={styles.logoutBtn} onPress={() => { LogoutFunction() }}>
                        <Ionicons name="power" size={30} color={Colors.text} />
                    </TouchableOpacity>
                </View>


                <View style={styles.section}>
                    <Text style={styles.title}>Movie List</Text>
                    {((moviesData && moviesData.length > 0) || (search_movies && search_movies.length > 0)) && (
                        <FlashList
                            data={search === "" ? moviesData : search_movies}
                            horizontal={true}
                            estimatedItemSize={851090}
                            showsHorizontalScrollIndicator={false}
                            onEndReached={handleEndReached}
                            onEndReachedThreshold={0.1}
                            ListEmptyComponent={renderListEmpty}
                            renderItem={({ item }) => (
                                <MovieCard
                                    item={item}
                                    navigation={navigation}
                                    section={"Movie"}
                                />
                            )}
                        />
                    )}
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>Favorite Movie List</Text>
                    {favoriteMoviesData?.length > 0 ? <FlashList
                        data={favoriteMoviesData}
                        horizontal={true}
                        estimatedItemSize={230}
                        showsHorizontalScrollIndicator={false}
                        ListEmptyComponent={renderListEmpty}
                        renderItem={({ item }) => (
                            <MovieCard
                                item={item}
                                navigation={navigation}
                                section={"Favorite"}
                            />
                        )
                        }
                    /> :
                        <View style={styles.listEmptyContainer}>
                            <Text style={styles.listText}>No Favorite Movies</Text>
                        </View>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}



export default Home