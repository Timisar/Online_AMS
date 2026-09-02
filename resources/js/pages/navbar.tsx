import { router } from "@inertiajs/react";
import Search from "./search";

export default function Navbar() {
    return (
        <nav className="flex h-16 w-full items-center justify-between bg-gray-300 px-6">
            <div className="text-xl font-bold">My App</div>

            <Search />

            <div className="flex items-center gap-4">
                <button type="button" onClick={() => router.get("/profile")}>
                    Profile
                </button>

                <button
                    type="button"
                    onClick={() => router.post(route("logout"))}
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}
