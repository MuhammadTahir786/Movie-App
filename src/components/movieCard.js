import { View, Text, SafeAreaView, ActivityIndicator, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { Colors } from '../assets/color'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import moment from 'moment';
import { RFPercentage } from "react-native-responsive-fontsize";

const MovieCard = ({ item, navigation, section }) => {
    return (
        <TouchableOpacity onPress={() => { navigation.navigate("Detail", { id: item?.id, section: section }) }} style={styles.cardContainer}>
            <FastImage
                style={styles.image}
                source={{
                    uri: 'https://image.tmdb.org/t/p/w500' + item?.poster_path,
                }}
                resizeMode={FastImage.resizeMode.cover}
            />
            <View style={styles.cardInfoContainer}>
                <Text style={styles.movieTitle}>{item?.title}</Text>
                <Text style={styles.movieReleaseDate}>{moment(item?.release_date).format("MMMM Do, YY")}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default React.memo(MovieCard)


const styles = StyleSheet.create({
    cardContainer: {
        margin: 10,
        backgroundColor: Colors.background,
        borderRadius: 20,
    },
    image: {
        height: hp("23%"),
        width: wp('45%'),
        borderRadius: 10
    },
    cardInfoContainer: {
        padding: 10,
    },
    movieTitle: {
        width: wp("45%"),
        flexWrap: "wrap",
        color: Colors.text,
        fontWeight: "bold",
        fontSize: RFPercentage(1.5)
    },
    movieReleaseDate: {
        fontSize: RFPercentage(1.3),
        color: Colors.text,
    },
})