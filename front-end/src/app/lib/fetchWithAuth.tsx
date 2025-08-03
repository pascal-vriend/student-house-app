'use client';

import {useAuth} from '../contexts/AuthContext';

export function useFetchWithAuth() {
    const { accessToken, setAccessToken } = useAuth();

    return async function fetchWithAuth(
        input: RequestInfo,
        options: RequestInit = {},
        retry = true
    ): Promise<Response> {
        const headers = new Headers(options.headers || {});
        if (accessToken) {
            headers.set('Authorization', `Bearer ${accessToken}`);
        }
        headers.set('Content-Type', 'application/json');

        const updatedOptions: RequestInit = {
            ...options,
            headers: Object.fromEntries(headers.entries()),
            credentials: 'include',
        };

        const response = await fetch(input, updatedOptions);
        if (response.status === 401 && retry) {
            const newAccessToken = await tryRefreshToken(setAccessToken);
            if (newAccessToken) {
                const retryHeaders = new Headers(updatedOptions.headers || {});
                retryHeaders.set('Authorization', `Bearer ${newAccessToken}`);

                return fetch(input, {
                    ...updatedOptions,
                    headers: Object.fromEntries(retryHeaders.entries()),
                });
            }
        }

        return response;
    };
}

async function tryRefreshToken(
    setAccessToken: (token: string | null) => void
): Promise<string | false> {
    try {
        const res = await fetch('http://localhost:8080/auth/refresh', {
            method: 'POST',
            credentials: 'include',
        });

        if (!res.ok) {
            setAccessToken(null);
            return false;
        }

        const body = await res.json();
        if (body.accessToken) {
            setAccessToken(body.accessToken);
            return body.accessToken;
        }

        return false;
    } catch (e) {
        console.error('Refresh token request failed:', e);
        setAccessToken(null);
        return false;
    }
}
