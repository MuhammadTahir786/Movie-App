import { Platform, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from "../../assets/color";
import { RFPercentage } from "react-native-responsive-fontsize";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1
    },
    image: {
        height: hp("35%"),
        width: wp('100%'),
    },
    backIcon: {
        marginHorizontal: 20,
        zIndex: 1,
        top: hp('7%'),
        position: "absolute"
    },
    title: {
        color: Colors.text,
        fontSize: RFPercentage(3),
        fontWeight: "bold",
        marginTop: 15

    },
    infoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },
    rating: {
        marginHorizontal: 5,
        top: 1,
        color: Colors.text
    },
    date: {
        marginHorizontal: 5,
        color: Colors.text
    },
    btnContainer: {
        alignItems: "center",
        justifyContent: "flex-end",
        height: hp("15%"),

    },
    btnText: {
        color: "white",
        fontSize: RFPercentage(2),
        fontWeight: "bold",
        paddingVertical: 10,
        backgroundColor: Colors.primary,
        width: wp("80%"),
        borderRadius: 10,
        overflow: "hidden",
        textAlign: "center",
        marginBottom: hp("5%")
    },
    detailContainer: {
        margin: 10,
        flex: 1,
        paddingHorizontal: 10
    },
    tagline: {
        color: Colors.text
    },
    genreHeader: {
        color: Colors.text,
        fontSize: RFPercentage(3),
        fontWeight: "bold",
        marginTop: 20
    },
    genreContainer: {
        flexDirection: "row",
        marginVertical: 20,
        flexWrap: "wrap"
    },
    genreSubContainer: {
        backgroundColor: Colors.primary,
        margin: 5,
        padding: 2,
        borderRadius: 50
    },
    genreText: {
        marginHorizontal: 5,
        color: Colors.text
    },
    overviewHeader: {
        color: Colors.text,
        fontSize: RFPercentage(3),
        fontWeight: "bold",
        marginTop: 5
    },
    overviewText: {
        color: Colors.text,
        textAlign: "justify",
        marginVertical: 10
    }
})
