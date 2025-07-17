// src/components/Header.tsx
export default function Header() {
    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h1 className="text-lg font-bold">🏡 Student House</h1>
            <nav>
                <ul className="flex gap-4">
                    <li><a href="/home" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">Meals</a></li>
                    <li><a href="#" className="hover:underline">Tasks</a></li>
                    <li><a href="#" className="hover:underline">Events</a></li>
                </ul>
            </nav>
        </header>
    );
}
