import axios from 'axios'
import config from '../../config'

export const ListPokemons= async () => {
    const payload = {
        q: '',
        page: 1,
        pageSize: `${config.PAGE_SIZE}${url}`,
    }
    let url = '/v2/cards'

    return await axios.post(`${config.API_URL}${url}`, payload,{
        headers: {
            'X-Api-Key': '7946e53a-48c2-4a4d-8238-941409ee8618'
        }
    })
}
