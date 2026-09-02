import { Head } from "@inertiajs/react";
import Weather from "./weather";

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <div>
                <Weather />
            </div>
        </>
    );
}
