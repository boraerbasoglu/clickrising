import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "../pages/HomeScreen";
import SettingsScreen from "../pages/SettingsScreen";
import {QueryClient, QueryClientProvider} from 'react-query'

const Tab = createBottomTabNavigator();

export default function Index() {

    const queryClient = new QueryClient()

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home">
                    {() => {
                        return (<QueryClientProvider client={queryClient}><HomeScreen/></QueryClientProvider>)
                    }}
                </Tab.Screen>
                <Tab.Screen name="Settings" component={SettingsScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}
