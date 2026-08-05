import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState(null);

    useEffect(() => {
        async function getSession() {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            setSession(session);
            setLoading(false);
        }

        getSession();
    }, []);

    if (loading) {
        return <div className="p-10 text-center">Loading...</div>;
    }

    if (!session) {
        return <Navigate to="/login" replace />;
    }

    return children;
}