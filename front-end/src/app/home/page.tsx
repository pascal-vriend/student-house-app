// src/app/home/page.tsx
import Header from "../components/Header";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Header />
            <section className="p-6">
                <h2 className="text-xl font-semibold mb-4">Welcome to the Student House</h2>
                <ul className="space-y-2">
                    <li className="bg-white p-4 rounded-lg shadow">🍽️ Meal planning</li>
                    <li className="bg-white p-4 rounded-lg shadow">🧹 Cleaning tasks</li>
                    <li className="bg-white p-4 rounded-lg shadow">🎉 Activities and events</li>
                </ul>
            </section>
        </main>
    );
}
