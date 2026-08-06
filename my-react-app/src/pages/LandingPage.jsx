import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Eye, Briefcase } from "lucide-react";
import { ThemeToggle } from "@/components/ui/themetoggle";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import landingImage from "@/assets/image.jpg";

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
        <main className="relative min-h-screen bg-background grid lg:grid-cols-2">

            {/* Left Side */}
            <section className="hidden lg:flex items-center justify-center bg-sky-100">

                {/* Illustration goes here */}
                <img
                    src={landingImage}
                    alt="Landing"
                    className="w-full h-full object-cover object-top"
                />

            </section>

            {/* Right Side */}
            <section className="flex items-center justify-center px-6 py-12">

                <div className="max-w-3xl w-full text-center">

                    {/* Hero Section */}
                    <div className="text-center mb-8">

                        <div className="flex justify-center mb-5">
                            <div className="rounded-full bg-primary/10 p-5">
                                <Briefcase className="w-12 h-12 text-primary" />
                            </div>
                        </div>

                        <h1 className="text-5xl font-bold tracking-tight">
                            OJT Portfolio
                        </h1>

                        <p className="mt-4 text-md text-muted-foreground mx-auto">
                            Welcome! Explore my internship portfolio, projects,
                            and OJT requirements by continuing as a Guest.
                            <br />
                            For the creator, log in to manage and update the content.
                        </p>

                    </div>

                    {/* Cards */}
                    <div className="grid gap-6 md:grid-cols-2">

                        {/* Creator Card */}
                        <Card className="rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                            <CardContent className="p-6">

                                <User className="w-12 h-12 text-primary mb-4 mx-auto" />

                                <h2 className="text-2xl font-semibold text-center">
                                    Creator
                                </h2>

                                <p className="text-muted-foreground mt-2 mb-6 text-center">
                                    Log in to manage and update your portfolio.
                                </p>

                                <ul className="space-y-1 text-sm text-muted-foreground mb-8 py-1 text-center">
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

                                <Eye className="w-12 h-12 text-primary mb-4 mx-auto" />

                                <h2 className="text-2xl font-semibold text-center">
                                    Viewer
                                </h2>

                                <p className="text-muted-foreground mt-2 mb-6 text-center">
                                    Continue as a guest to explore the portfolio.
                                </p>

                                <ul className="space-y-2 text-sm text-muted-foreground mb-8 py-3 text-center">
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

            </section>

            {/* Theme Toggle */}
            <div className="absolute top-6 right-6">
                <ThemeToggle />
            </div>

        </main>
    );
}