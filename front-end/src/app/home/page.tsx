'use client';

import { useState } from 'react';
import Header from "../components/Header";
import { useFetchWithAuth } from '../lib/fetchWithAuth';

export default function HomePage() {
    const [message, setMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fetchWithAuth = useFetchWithAuth();

    async function fetchProtected() {
        setLoading(true);
        setError(null);
        try {
            const res = await fetchWithAuth('http://localhost:8080/api/protected', {
                method: 'GET',
            });

            if (!res.ok) {
                throw new Error('Failed to fetch protected data');
            }

            const data = await res.json();
            setMessage(data.message);
        } catch (err: any) {
            setError(err.message || 'Unknown error');
            setMessage(null);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <Header />
            <section className="p-6">
                <h2 className="text-xl font-semibold mb-4">Welcome to the Student House</h2>
                <ul className="space-y-2 mb-6">
                    <li className="bg-white p-4 rounded-lg shadow">🍽️ Meal planning</li>
                    <li className="bg-white p-4 rounded-lg shadow">🧹 Cleaning tasks</li>
                    <li className="bg-white p-4 rounded-lg shadow">🎉 Activities and events</li>
                </ul>

                <button
                    onClick={fetchProtected}
                    disabled={loading}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    {loading ? 'Loading...' : 'Fetch Protected Data'}
                </button>

                {message && <p className="mt-4 text-green-700 font-semibold">{message}</p>}
                {error && <p className="mt-4 text-red-700 font-semibold">{error}</p>}
            </section>
        </main>
    );
}
