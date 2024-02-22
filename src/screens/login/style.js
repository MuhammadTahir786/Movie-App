import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from "../../assets/color";
import { RFPercentage } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background
    },
    title: {
        fontSize: RFPercentage(5),
        fontWeight: 'bold',
        marginVertical: hp(2),
        color: Colors.text
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: Colors.text,
        borderRadius: 5,
        width: wp(80),
        height: hp(6),
        padding: 10,
        margin: 10,
        alignItems: "center",
        flexDirection: "row"
    },
    input: {
        paddingHorizontal: wp(2),
        width: wp(64),
        height: hp(6),
        color: Colors.text
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 10,
        margin: 10,
        borderRadius: 5,
        width: wp(80),
        alignItems: 'center',
    },
    btnText: {
        color: Colors.text,
        fontWeight: 'bold'
    },
    error: {
        color: Colors.red,
        textAlign: "left",
        width: wp(80),
    }
})
