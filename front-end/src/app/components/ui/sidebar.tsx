"use client";

import Link from "next/link";
import { Settings } from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-white shadow-md flex flex-col justify-between p-4">
            <div>
                <nav className="flex flex-col gap-3">
                    <Link href="/meals" className="hover:text-blue-600">🍽️ Meals</Link>
                    <Link href="/cleaning" className="hover:text-blue-600">🧹 Cleaning</Link>
                    <Link href="/activities" className="hover:text-blue-600">📅 Activities</Link>
                    <Link href="/expenses" className="hover:text-blue-600">💸 Expenses</Link>
                </nav>
            </div>
            <div>
                <Link href="/settings" className="flex items-center gap-2 text-gray-500 hover:text-blue-600">
                    <Settings />
                </Link>
            </div>
        </aside>
    );
}
