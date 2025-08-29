// src/components/dashboard/CookingCard.tsx
"use client";

import { ChefHat, Users } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type CookingToday = {
    cook: string;
    meal: string;
    time: string;
    avatar: string;
};

type Attendee = {
    name: string;
    avatar: string;
    status: string;
};

export default function CookingCard({
                                        cookingToday,
                                        attendees
                                    }: {
    cookingToday: CookingToday | null;
    attendees: Attendee[];
}) {
    return (
        <Card className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-slate-900 dark:text-white">
                    <ChefHat className="h-5 w-5 mr-2 text-orange-500" />
                    Who's Cooking Today?
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <>{cookingToday ? (
                    <>
                        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-4 rounded-xl border border-orange-100 dark:border-orange-800/30 hover:from-orange-100 hover:to-yellow-100 dark:hover:from-orange-900/30 dark:hover:to-yellow-900/30 transition-all duration-200">
                            <div className="flex items-center space-x-3">
                                <Avatar className="h-12 w-12 ring-2 ring-white dark:ring-slate-700 shadow-md">
                                    <AvatarImage src={cookingToday.avatar} />
                                    <AvatarFallback>{cookingToday.cook.slice(0, 2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-slate-900 dark:text-white">{cookingToday.cook} is cooking</h4>
                                    <p className="text-slate-700 dark:text-slate-300 font-medium">{cookingToday.meal}</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Ready at {cookingToday.time}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-4 rounded-xl border border-amber-100 dark:border-amber-800/30">
                            <h5 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                                <Users className="h-4 w-4 mr-2" />
                                Joining for dinner
                            </h5>
                            <div className="space-y-2">
                                {attendees.map((person, index) => (
                                    <div key={index} className="flex items-center justify-between p-2 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                                        <div className="flex items-center space-x-2">
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage src={person.avatar} />
                                                <AvatarFallback className="text-xs">{person.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                                            </Avatar>
                                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{person.name}</span>
                                        </div>
                                        <Badge
                                            variant={person.status === "Cooking" ? "default" : person.status === "Joining" ? "secondary" : "outline"}
                                            className="text-xs"
                                        >
                                            {person.status}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                        No one is cooking today.
                    </div>
                )}</>
            </CardContent>
        </Card>
    );
}
