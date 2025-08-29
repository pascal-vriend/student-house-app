// app/contexts/AuthContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type AuthContextType = {
    accessToken: string | null;
    setAccessToken: (token: string | null) => void;
    refreshAccessToken: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [accessToken, setAccessToken] = useState<string | null>(null);

    // Restore access token from localStorage on mount
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) setAccessToken(token);
        else refreshAccessToken();
    }, []);

    // Persist token to localStorage
    useEffect(() => {
        if (accessToken) localStorage.setItem('accessToken', accessToken);
        else localStorage.removeItem('accessToken');
    }, [accessToken]);

    // Refresh access token using refresh token cookie
    async function refreshAccessToken(): Promise<string | null> {
        try {
            const res = await fetch('https://localhost:8080/auth/refresh', {
                method: 'POST',
                credentials: 'include',
            });
            if (!res.ok) {
                console.log("failed to refresh token");
                setAccessToken(null);
                return null;
            }
            const body = await res.json();
            setAccessToken(body.accessToken);
            return body.accessToken as string;
        } catch {
            setAccessToken(null);
            return null;
        }
    }


    return (
        <AuthContext.Provider value={{ accessToken, setAccessToken, refreshAccessToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
}
