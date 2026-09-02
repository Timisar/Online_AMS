import { Link } from "@inertiajs/react";

export default function Sidebar() {
    return (
        <aside className="flex min-h-[calc(100vh-4rem)] w-60 flex-col gap-2 border-r p-4">
            <Link href="/dashboard">Dashboard</Link>

            <Link href="/weather">Weather</Link>

            <Link href="/information">Information</Link>

            <Link href="/contacts">Contacts</Link>
        </aside>
    );
}
