import { createContext, useContext, useState, ReactNode } from "react";

type AuthContextData = {
    isAuthenticated: boolean;
    signIn: () => void;
    signOut: () => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function signIn() {
        setIsAuthenticated(true);
    }

    function signOut() {
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
