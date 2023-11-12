import {ActivityIndicator, View} from "react-native";
import {styles} from "../../styles/global";

export const OverlaySpinner = () => {
    return (
        <View style={styles.spinnerView}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};
