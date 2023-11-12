import {View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity} from 'react-native';
import {useQuery} from 'react-query'
import {useSelector, useDispatch} from 'react-redux'
import {GetPokemon, ListPokemons} from "./api";
import {selectLoading, startLoading, stopLoading} from "../../app/slice";
import {useEffect, useMemo, useRef, useState} from "react";
import {styles} from "../../styles/global";
import {LoadMoreFlatlist,} from 'react-native-load-more-flatlist';
import {useNavigation} from '@react-navigation/native';

function HomeScreen() {

    const dispatch = useDispatch()
    const [page, setPage] = useState({current: 1})
    const [pokemons, setPokemons] = useState([])
    const navigation = useNavigation();

    const {
        isLoading,
        data,
        isFetching,
    } = useQuery({
        queryKey: ['pokemon', page.current],
        queryFn: () => ListPokemons(page.current),
        keepPreviousData: true
    })

    function nextPage() {
        let newPage = page.current;
        setPage({current: newPage + 1})
    }

    useEffect(() => {
        let lastPokemons = pokemons;
        if (data?.data?.data) {
            setPokemons(lastPokemons.concat(data?.data?.data))
        }

    }, [data]);

    async function getPokemonDetails(id) {
        dispatch(startLoading())
        try {
            const result = await GetPokemon(id)
            dispatch(stopLoading())
            console.log(result.data.data.name);
            navigation.navigate('Details', {
                name: result.data.data.name,
                supertype: result.data.data.supertype,
                image: result.data.data.images.small,
                convertedRetreatCost: result.data.data.convertedRetreatCost
            })
            console.log(result);
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(stopLoading())
        }
    }

    return (
        <>
            <View>
                <LoadMoreFlatlist
                    contentContainerStyle={{flexGrow: 1, zIndex: 1}}
                    data={pokemons}
                    onEndReached={() => {
                        if (!isFetching && pokemons.length > 0) {
                            nextPage();
                        }
                    }}
                    isLoading={isFetching && isLoading === false}
                    renderItem={({item}) => <TouchableOpacity onPress={() => getPokemonDetails(item.id)}><View
                        style={styles.cardContainer}><Image
                        style={styles.tinyLogo}
                        source={{uri: item.images.small}}/><Text
                        style={styles.text}>{item.name}</Text></View></TouchableOpacity>}
                />
            </View>
        </>
    );
}

export default HomeScreen
