import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{ headerShown: false,}}

            // screenOptions={{
            //     headerStyle: {
            //         backgroundColor: '#f4511e',
            //     },
            //     headerTintColor: '#fff',
            //     headerTitleStyle: {
            //         fontWeight: 'bold',
            //         fontSize: 30
            //     },
            // }}
        >
            <Tabs.Screen
                name="data"
                options={{
                    title: 'data',
                    // tabBarIcon: ({ color }) => <FontAwesome size={28} name="signal" color={color} />,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="bar-chart" color={color} />,
                }}
            />

            <Tabs.Screen
                name="index"
                options={{
                    title: 'Index',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />

            <Tabs.Screen
                name="config"
                options={{
                    title: 'config',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
        </Tabs>
    );
}
