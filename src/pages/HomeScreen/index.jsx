import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import {useQuery} from 'react-query'
import {useSelector, useDispatch} from 'react-redux'
import {ListPokemons} from "./api";
import {selectLoading, startLoading, stopLoading} from "../../app/slice";
import {useEffect, useMemo, useRef, useState} from "react";
import {styles} from "../../styles/global";
import  {LoadMoreFlatlist,} from 'react-native-load-more-flatlist';
function HomeScreen() {

    const dispatch = useDispatch()
    const loading = useSelector(selectLoading)
    const [page, setPage] = useState({current: 1})
    const [pokemons, setPokemons] = useState([])

    const {
        isLoading,
        data,
        isFetching,
    } = useQuery({
        queryKey: ['pokemon', page.current],
        queryFn: () =>  ListPokemons(page.current),
        keepPreviousData : true
    })


    if (isLoading) {
        dispatch(startLoading())
    } else {
        dispatch(stopLoading())
    }

    function nextPage() {
        let newPage = page.current;
        setPage({current: newPage + 1})
    }

    useEffect(() => {
        console.log(page.current)
    }, [page.current]);

    useEffect(() => {
        let lastPokemons = pokemons;
        if (data?.data?.data) {
            setPokemons(lastPokemons.concat(data?.data?.data))
        }
    }, [data]);

    return (
        <>
            <View >
                <LoadMoreFlatlist
                    contentContainerStyle={{flexGrow:1}}
                    data={pokemons}
                    onEndReached={() => {
                        if (!isFetching) {
                            nextPage();
                        }
                    }}
                    onEndReachedThreshold={0.2}
                    isLoading={isFetching}
                    renderItem={({item}) => <View style={styles.cardContainer}><Image
                        style={styles.tinyLogo}
                        source={{uri: item.images.small}}/><Text style={styles.text}>{item.name}</Text></View>}
                />

            </View>

        </>
    );
}

export default HomeScreen
