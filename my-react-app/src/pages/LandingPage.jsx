import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Eye, Briefcase } from "lucide-react";
import { ThemeToggle } from "@/components/ui/themetoggle";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

export default function LandingPage() {
    const navigate = useNavigate();

    async function continueAsGuest() {
        const { error } = await supabase.auth.signInAnonymously();

        if (error) {
            alert(error.message);
            return;
        }

        navigate("/portfolio");
    }

    return (
        <main className="relative min-h-screen bg-background flex items-center justify-center px-6">

            {/* Theme Toggle */}
            <div className="absolute top-6 right-6">
                <ThemeToggle />
            </div>

            <div className="max-w-6xl w-full">

                {/* Hero Section */}
                <div className="text-center mb-14">

                    <div className="flex justify-center mb-5">
                        <div className="rounded-full bg-primary/10 p-5">
                            <Briefcase className="w-12 h-12 text-primary" />
                        </div>
                    </div>

                    <h1 className="text-5xl font-bold tracking-tight">
                        OJT Portfolio
                    </h1>

                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Welcome! Explore my internship portfolio, projects, and OJT
                        requirements, or sign in to manage and update the content.
                    </p>

                </div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2">

                    {/* Creator Card */}
                    <Card className="rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <CardContent className="p-8">

                            <User className="w-12 h-12 text-primary mb-4" />

                            <h2 className="text-2xl font-semibold">
                                Creator
                            </h2>

                            <p className="text-muted-foreground mt-2 mb-6">
                                Sign in to manage and update your portfolio.
                            </p>

                            <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                                <li>✓ Update About Me</li>
                                <li>✓ Manage Projects</li>
                                <li>✓ Upload OJT Requirements</li>
                            </ul>

                            <Button
                                className="w-full"
                                onClick={() => navigate("/login")}
                            >
                                Sign In
                            </Button>

                        </CardContent>
                    </Card>

                    {/* Viewer Card */}
                    <Card className="rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <CardContent className="p-8">

                            <Eye className="w-12 h-12 text-primary mb-4" />

                            <h2 className="text-2xl font-semibold">
                                Viewer
                            </h2>

                            <p className="text-muted-foreground mt-2 mb-6">
                                Continue as a guest to explore the portfolio.
                            </p>

                            <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                                <li>✓ View Projects</li>
                                <li>✓ Browse OJT Requirements</li>
                                <li>✓ Read About Me</li>
                            </ul>

                            <Button
                                variant="outline"
                                className="w-full"
                                onClick={continueAsGuest}
                            >
                                Continue as Guest
                            </Button>

                        </CardContent>
                    </Card>

                </div>

            </div>
        </main>
    );
}