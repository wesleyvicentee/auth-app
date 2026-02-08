import { View, Text, Button } from "react-native";
import { useAuth } from "@/contexts/AuthContext";

export default function Home() {
    const { signOut } = useAuth();
    return (
        <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
            <Text>Home</Text>
            <Button title="Sair" onPress={signOut} />
        </View>
    );
}
