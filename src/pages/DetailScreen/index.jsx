import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import {styles} from "../../styles/global";
import {useRoute} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

function Index() {

    const route = useRoute();

    async function storeData(itemName) {
        try {
            let items = JSON.parse(await AsyncStorage.getItem('pokemons'));

            if (items === null) {
                items = []
            }
            if (!items.includes(itemName)) {
                items.push(itemName)
            }
            await AsyncStorage.setItem('pokemons', JSON.stringify(items));

            alert('Pokemon Successfully Added')

        } catch (e) {
            console.log(e);
        }
    }

    async function removeData(itemName) {
        try {
            let items = JSON.parse(await AsyncStorage.getItem('pokemons'));
            if (items === null) {
                return;
            }
            if (items.includes(itemName)) {
                items =  items.filter(item => item != itemName)
            }
            await AsyncStorage.setItem('pokemons', JSON.stringify(items))

            alert('Pokemon Successfully Removed')

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <View style={styles.detailScreen}>
            <Image style={styles.tinyLogo} source={{uri: route.params.image}}/>
            <Text style={styles.detailScreenTitle}>Details Screen</Text>
            <Text style={styles.detailScreenBody}>Item Name: {route.params.name}</Text>
            <Text style={styles.detailScreenBody}>Super Type: {route.params.supertype}</Text>
            <Text style={styles.detailScreenBody}>RetreatCost: {route.params.convertedRetreatCost}</Text>
            <View style={{ flexDirection: 'row',marginTop:10,position:'absolute',bottom:0,width:'100%',flex:1}}>
                <TouchableOpacity
                    onPress={() => storeData(route.params.name)}
                    title="Save Card"
                    style={{backgroundColor: '#3773c2',width:'50%'}}
                    color="#841584"
                    accessibilityLabel="Save Card Now!"
                ><Text style={{color:'#fff',padding:20,textAlign:'center',borderRadius:5,flex:1}}>Save Card</Text></TouchableOpacity>
                <TouchableOpacity
                    onPress={() => removeData(route.params.name)}
                    title="Save Card"
                    style={{backgroundColor: '#b40f0f',width:'60%'}}
                    color="#841584"
                    accessibilityLabel="Save Card Now!"
                ><Text style={{color:'#fff',padding:20,textAlign:'center',borderRadius:5,flex:1}}>Remove Card</Text></TouchableOpacity>
            </View>
        </View>
    );
}

export default Index
