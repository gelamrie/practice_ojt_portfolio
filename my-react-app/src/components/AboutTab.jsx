import {
    Card,
    CardContent,
} from "@/components/ui/card";

import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import profilePic from "../assets/profile.jpg";
export default function AboutTab() {
    return (
        <div className="max-w-2xl mx-auto">
            <Card>
                <CardContent className="flex flex-col items-center gap-3 pt-6">
                    <Avatar className="h-50 w-50">
                        <AvatarImage src={profilePic}
                            className="object-contain"
                        />
                        <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-foreground">
                            Angela Marie De Juan
                        </h2>

                        <div className="flex flex-wrap justify-center gap-2 mt-3 mb-4">
                            <Badge>Incoming 3rd Year</Badge>

                            <Badge variant="secondary">
                                BS Computer Engineering
                            </Badge>

                            <Badge variant="outline">
                                Intern
                            </Badge>
                        </div>

                        <p className="text-md text-muted-foreground">
                            I am an incoming 3rd year Computer Engineering student at
                            Polytechnic University of the Philippines - Main Campus.
                            Currently an intern at 7th Pillar Integrated System Corp.
                            Welcome to my OJT portfolio.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}