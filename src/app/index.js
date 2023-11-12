import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "../pages/HomeScreen";
import SettingsScreen from "../pages/SettingsScreen";
import DetailScreen from "../pages/DetailScreen";
import {QueryClient, QueryClientProvider} from 'react-query'
import {selectLoading} from "./slice";
import {useSelector} from "react-redux";
import {OverlaySpinner} from "../packages/Components/OverlaySpinner";
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Index() {

    const queryClient = new QueryClient()
    const loading = useSelector(selectLoading)

    function Home() {
        return (
            <Tab.Navigator
                screenOptions={({route}) => ({
                    headerShown: false,
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        if (route.name === 'HomeScreen') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                    tabBarActiveTintColor: '#0000ff',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="HomeScreen">
                    {() => {
                        return (<QueryClientProvider client={queryClient}><HomeScreen/></QueryClientProvider>)
                    }}
                </Tab.Screen>
                <Tab.Screen name="Settings" component={SettingsScreen}/>
            </Tab.Navigator>
        );
    }

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Tabs">
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Details" component={DetailScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
            {(loading === true) ?
                <OverlaySpinner/> : null}
        </>

    )
}
