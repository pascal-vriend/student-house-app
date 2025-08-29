// src/components/dashboard/NoticesCard.tsx
"use client";

import { Calendar } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Activity = {
    id: number;
    title: string;
    time: string;
    attendees: string[];
};

export default function NoticesCard({ activities }: { activities: Activity[] }) {
    return (
        <Card className="col-span-1 lg:col-span-2 xl:col-span-1 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-slate-900 dark:text-white">
                    <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                    Notices
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <>
                {activities.length > 0 ? (
                    activities.map(activity => (
                        <div key={activity.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/30 transition-all duration-200">
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <h4 className="font-semibold text-slate-900 dark:text-white">{activity.title}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{activity.time}</p>
                                </div>
                                <Badge variant="secondary" className="ml-3">
                                    {activity.attendees?.join(", ") ?? "No attendees"}
                                </Badge>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                        No planned activities today.
                    </div>
                )}</>
            </CardContent>
        </Card>
    );
}
