import { Provider,useSelector } from 'react-redux'
import { store } from './src/store'
import Index from "./src/app";

export default function App() {

    return (
        <Provider store={store}>
            <Index/>
        </Provider>
    );
}

