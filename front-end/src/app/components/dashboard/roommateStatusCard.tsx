// src/components/dashboard/RoommateStatusCard.tsx
"use client";

import { Users } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Roommate = {
    name: string;
    home: boolean;
    avatar: string;
    status: string;
};

export default function RoommateStatusCard({ roommates }: { roommates: Roommate[] }) {
    return (
        <Card className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-slate-900 dark:text-white">
                    <Users className="h-5 w-5 mr-2 text-green-500" />
                    Roommate Status
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <>
                {roommates.map((person, index) => (
                    <div key={index} className={`p-4 rounded-xl border transition-all duration-200 hover:scale-[1.02] ${
                        person.home
                            ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-100 dark:border-green-800/30'
                            : 'bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-red-100 dark:border-red-800/30'
                    }`}>
                        <div className="flex items-center space-x-3">
                            <Avatar className="h-10 w-10 ring-2 ring-white dark:ring-slate-700 shadow-md">
                                <AvatarImage src={person.avatar} />
                                <AvatarFallback>{person.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold text-slate-900 dark:text-white">{person.name}</span>
                                    <span className="text-lg">{person.home ? "🏠" : "❌"}</span>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{person.status}</p>
                            </div>
                        </div>
                    </div>
                ))}</>
            </CardContent>
        </Card>
    );
}
