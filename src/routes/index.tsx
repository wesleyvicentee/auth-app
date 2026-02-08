import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "@/routes/AuthStack";
import AppStack from "@/routes/AppStack";
import { useAuth, AuthProvider } from "../contexts/AuthContext";

function Routes() {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <AppStack /> : <AuthStack />;
}

export default function RootRoutes() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </AuthProvider>
    );
}
