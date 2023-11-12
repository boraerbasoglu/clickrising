import {View, Text} from 'react-native';
import {useQuery} from 'react-query'
import {useSelector, useDispatch} from 'react-redux'
import {ListPokemons} from "./api";
import {selectLoading, startLoading} from "../../app/slice";
import {useEffect, useMemo} from "react";

function HomeScreen() {

    const loading = useSelector(selectLoading)

    const {isLoading, data} = useQuery([], () => ListPokemons(), {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
    })

    const rowNumber = useMemo(() => {
        console.log(data);
        try {
            return data.data.length
        } catch (error) {
            return 0
        }
    }, [data])

    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    );
}

export default HomeScreen
