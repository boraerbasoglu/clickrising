import {View, Text, Image} from 'react-native';
import {styles} from "../../styles/global";
import {useRoute} from "@react-navigation/native";

function Index() {

    const route = useRoute();

    return (
        <View style={styles.detailScreen}>
            <Image   style={styles.tinyLogo} source={{uri:route.params.image}}/>
            <Text style={styles.detailScreenTitle}>Details Screen</Text>
            <Text style={styles.detailScreenBody}>Item Name: {route.params.name}</Text>
            <Text style={styles.detailScreenBody}>Super Type: {route.params.supertype}</Text>
            <Text style={styles.detailScreenBody}>RetreatCost: {route.params.convertedRetreatCost}</Text>
        </View>
    );
}

export default Index
