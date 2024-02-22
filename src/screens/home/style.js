import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../assets/color';
import { RFPercentage } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
    cardContainer: {
        margin: 10,
        backgroundColor: Colors.background,
        borderRadius: 20,

    },
    section: {
        height: hp("40%"),
    },
    image: {
        height: hp("25%"),
        width: wp('45%'),
        borderRadius: 10
    },
    title: {
        fontSize: RFPercentage(2.5),
        fontWeight: 'bold',
        marginHorizontal: 15,
        color: Colors.text,
        paddingVertical: 10,
    },
    listEmptyContainer: {
        flex: 1,
        justifyContent: "center",
        width: wp("100%"),
    },
    cardInfoContainer: {
        padding: 10,
    },
    movieTitle: {
        flexWrap: "wrap",
        color: Colors.text,
        fontWeight: "bold",
    },
    movieReleaseDate: {
        fontSize: RFPercentage(2),
        color: Colors.text,
    },
    searchContainer: {
        flexDirection: "row",
        margin: 10,
        backgroundColor: Colors.background,
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.secondary,
        flex: 0.95,
        alignItems: "center",
        height: hp("6%"),
    },
    searchBar: {
        paddingHorizontal: 15,
        color: Colors.text,
        height: hp("6%"),
    },
    favoriteIconContainer: {
        marginHorizontal: 15,
        color: Colors.text,
        paddingVertical: 10,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    listText: {
        color: Colors.text,
        textAlign: "center"
    }
})