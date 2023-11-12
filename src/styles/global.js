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
        height: 100,
        maxHeight:250
    },
    spinnerView: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,255,255,0.33)",
    },
    detailScreen: {
        flex:1,
        padding:10
    },
    detailScreenTitle: {
        fontWeight:'bold',
        fontSize:16,
        marginBottom:10,
        marginTop:20
    },
    detailScreenBody: {

        fontSize:15,
        marginBottom:5

    }
});
export {styles}
