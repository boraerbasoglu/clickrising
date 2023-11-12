import {Provider, useSelector} from 'react-redux'
import {store} from './src/store'
import Index from "./src/app";
import axios from "axios";
import Toast from 'react-native-toast-message';

export default function App() {

    axios.interceptors.request.use(
        function (config) {
            config.headers['X-API-KEY'] = '7946e53a-48c2-4a4d-8238-941409ee8618'
            return config
        },
        function (error) {
            //console.log(error)
            return Promise.reject(error)
        }
    )

    axios.interceptors.response.use(
        function (response) {
            return response
        },
        function (error) {
            return Promise.reject(error)
        }
    )

    return (
        <Provider store={store}>
            <Index/>
        </Provider>
    );
}

