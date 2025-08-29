"use client";

import { useRouter } from "next/navigation";
import { Menu, Bell, Settings, Home, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function Header({ onToggleSidebar }: { onToggleSidebar: () => void }) {
    const router = useRouter();

    async function handleLogout() {
        await fetch("https://localhost:8080/auth/logout", {
            method: "POST",
            credentials: "include",
        });
        router.push("/login");
    }

    return (
        <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Button variant="ghost" size="sm" className="lg:hidden mr-2" onClick={onToggleSidebar}>
                            <Menu className="h-6 w-6" />
                        </Button>
                        <div className="flex items-center space-x-3">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                                <Home className="h-6 w-6 text-white" />
                            </div>
                            <h1 className="text-xl font-bold text-slate-900 dark:text-white">RoomieHub</h1>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm">
                            <Bell className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="sm">
                            <Settings className="h-5 w-5" />
                        </Button>

                        {/* Avatar Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar className="h-8 w-8 cursor-pointer">
                                    <AvatarImage src="/placeholder.svg" />
                                    <AvatarFallback>YU</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-40">
                                <DropdownMenuItem onClick={handleLogout}>
                                    <LogOut className="h-4 w-4 mr-2" />
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    );
}
