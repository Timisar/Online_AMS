import { Head } from "@inertiajs/react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />

            <Navbar />

            <div className="flex">
                <Sidebar />

                <main className="flex-1 p-6">
                    <h1 className="text-2xl font-bold"></h1>
                    
                </main>
            </div>
        </>
    );
}
