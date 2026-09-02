import { router } from "@inertiajs/react";

export function Profile() {
    return (
        <button type="button" onClick={() => router.get("/profile")}>
            Profile
        </button>
    );
}

export function Logout() {
    return (
        <button type="button" onClick={() => router.post(route("logout"))}>
            Logout
        </button>
    );
}

export default function AuthMenu() {
    return (
        <div className="flex items-center gap-4">
            <Profile />
            <Logout />
        </div>
    );
}
