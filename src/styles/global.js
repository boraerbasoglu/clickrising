import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        padding: 15,
        flexDirection: 'row',
        backgroundColor:'white',
        marginBottom:5
    },
    text: {
        flex: 4,
        paddingLeft: 10, fontWeight: 'bold',
    },
    tinyLogo: {
        flex: 1,
        resizeMode:'cover',
        width: 50, height: 100,
    },
    spinnerView: {
        position: "absolute",
        zIndex: 1,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5FCFF88",
    }
});
export {styles}
