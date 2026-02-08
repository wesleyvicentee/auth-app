import { View, Text, Button } from "react-native";
import { useAuth } from "@/contexts/AuthContext";

export default function Login() {
    const { signIn } = useAuth();

    return (
        <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
            <Text>Login</Text>
            <Button title="Entrar" onPress={signIn} />
        </View>
    );
}
