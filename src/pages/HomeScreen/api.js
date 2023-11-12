import axios from 'axios'
import config from '../../config'

export const ListPokemons = async (page) => {
    let url = '/v2/cards'
    return await axios.get(`${config.API_URL}${url}?pageSize=` +config.PAGE_SIZE + '&page=' +page)
}

export const GetPokemon = async (id) => {
    let url = '/v2/cards'
    return await axios.get(`${config.API_URL}${url}/${id}`)
}
