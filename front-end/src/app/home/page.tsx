"use client";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { useState, useEffect } from "react";
import NoticesCard from "@/components/dashboard/noticesCard";
import RoommateStatusCard from "@/components/dashboard/roommateStatusCard";
import CookingCard from "@/components/dashboard/cookingCard";
import {useApi} from "@/lib/useApi";

export default function Index() {
    const { apiFetch } = useApi();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [expenses, setExpenses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch expenses on mount
    useEffect(() => {
        async function fetchExpenses() {
            try {
                const res = await apiFetch("https://localhost:8080/api/protected", { method: "GET" });
                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                const data = await res.json();
                setExpenses(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchExpenses();
    }, []);


    // 🧪 Mock data for dashboard
    const plannedActivities = [
        { id: 1, title: "Groceries pickup", time: "Today 16:00", attendees: ["You", "Bob"] },
        { id: 2, title: "Movie night", time: "Tonight 20:30", attendees: ["Alice", "Charlie"] },
        { id: 3, title: "House cleaning", time: "Saturday 10:00", attendees: ["Everyone"] },
    ];

    const roommateStatus = [
        { name: "Alice", home: true, avatar: "/avatars/alice.png", status: "Studying in her room" },
        { name: "Bob", home: false, avatar: "/avatars/bob.png", status: "At work" },
        { name: "Charlie", home: true, avatar: "/avatars/charlie.png", status: "Cooking in the kitchen" },
    ];

    const cookingToday = {
        cook: "Charlie",
        meal: "Pasta with pesto",
        time: "18:30",
        avatar: "/avatars/charlie.png",
    };

    const dinnerAttendees = [
        { name: "You", avatar: "/avatars/you.png", status: "Joining" },
        { name: "Bob", avatar: "/avatars/bob.png", status: "Maybe" },
        { name: "Charlie", avatar: "/avatars/charlie.png", status: "Cooking" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <div className="flex">
                <Sidebar isOpen={sidebarOpen} />
                <main className="flex-1 p-4 lg:p-8">
                    <div className="grid grid-cols-3 grid-rows-3 gap-6">
                        {/* CookingCard */}
                        <div className="col-span-2 row-span-2">
                            <CookingCard cookingToday={cookingToday} attendees={dinnerAttendees} />
                        </div>

                        {/* NoticesCard */}
                        <div className="col-span-1">
                            <NoticesCard activities={plannedActivities} />
                        </div>

                        {/* RoommateStatusCard */}
                        <div className="col-span-1">
                            <RoommateStatusCard roommates={roommateStatus} />
                        </div>
                    </div>

                    {/* Expenses Section */}
                    <div className="mt-8 p-4 bg-white dark:bg-slate-800 shadow rounded-2xl">
                        <h2 className="text-lg font-semibold mb-3">Expenses</h2>
                        {loading && <p>Loading...</p>}
                        {error && <p className="text-red-500">Error: {error}</p>}
                        {!loading && !error && (
                            <ul className="space-y-2">
                                {JSON.stringify(expenses)}
                            </ul>
                        )}
                    </div>
                </main>
            </div>

            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
}
