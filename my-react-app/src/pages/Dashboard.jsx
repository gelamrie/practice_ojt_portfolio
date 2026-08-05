import { useEffect, useState } from "react";
import { getAbout } from "@/lib/about";

export default function Dashboard() {
    const [about, setAbout] = useState(null);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await getAbout();
                setAbout(data);
            } catch (err) {
                console.error(err);
            }
        }

        loadData();
    }, []);

    if (!about) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold">
                {about.title}
            </h1>

            <p className="mt-4">
                {about.description}
            </p>
        </div>
    );
}