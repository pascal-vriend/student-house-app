'use client';

import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

    async function handleLogout() {
        await fetch('http://localhost:8080/auth/logout', {
            method: 'POST',
            credentials: 'include',
        });
        router.push('/login');
    }


    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h1 className="text-lg font-bold">🏡 Student House</h1>
            <nav className="flex items-center gap-6">
                <ul className="flex gap-4">
                    <li><a href="/home" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">Meals</a></li>
                    <li><a href="#" className="hover:underline">Tasks</a></li>
                    <li><a href="#" className="hover:underline">Events</a></li>
                    <li>
                        <button
                            onClick={handleLogout}
                            className="bg-amber-500 hover:bg-amber-600 px-3 py-1 rounded text-white focus:outline-none"
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
