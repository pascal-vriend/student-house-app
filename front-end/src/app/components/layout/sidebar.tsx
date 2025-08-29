// src/components/layout/Sidebar.tsx
"use client";

import { Calendar, ChefHat, Home, Users } from "lucide-react";

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
    return (
        <aside className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 h-screen bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-r border-slate-200 dark:border-slate-700 transition-transform duration-300 ease-in-out`}>
            <nav className="mt-8 px-4">
                <div className="space-y-2">
                    <a href="#" className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 group flex items-center px-3 py-2 text-sm font-medium rounded-lg">
                        <Home className="h-5 w-5 mr-3" />
                        Dashboard
                    </a>
                    <a href="#" className="text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors">
                        <Users className="h-5 w-5 mr-3" />
                        Roommates
                    </a>
                    <a href="#" className="text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors">
                        <Calendar className="h-5 w-5 mr-3" />
                        Calendar
                    </a>
                    <a href="#" className="text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors">
                        <ChefHat className="h-5 w-5 mr-3" />
                        Cooking Schedule
                    </a>
                </div>
            </nav>
        </aside>
    );
}
