import {useAuth} from "@/contexts/AuthContext";

export function useApi() {
    const { accessToken, refreshAccessToken } = useAuth();

    async function apiFetch(url: string, options: RequestInit = {}) {
        let token = accessToken;

        // get a token if we don't have one
        if (!token) {
            console.log("no access token: refreshing");
            token = await refreshAccessToken(); // ← use returned token
            console.log("finished refreshing");
        }

        const headers: HeadersInit = {
            'Content-Type': 'application/json',
            ...(options.headers ?? {}),
        };
        if (token) headers['Authorization'] = `Bearer ${token}`;
        console.log("Fetching with token:", token);

        const first = await fetch(url, {
            ...options,
            headers,
            credentials: 'include',
        });

        // Optional: auto-retry once on 401
        if (first.status === 401) {
            const newToken = await refreshAccessToken();
            if (newToken) {
                const retryHeaders: HeadersInit = {
                    ...headers,
                    Authorization: `Bearer ${newToken}`,
                };
                return fetch(url, {
                    ...options,
                    headers: retryHeaders,
                    credentials: 'include',
                });
            }
        }

        return first;
    }

    return { apiFetch };
}
