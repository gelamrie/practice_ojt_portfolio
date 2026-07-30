import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent
} from "@/components/ui/tabs"

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
} from "@/components/ui/card"

import profilePic from './assets/profile.jpg'

import {
    beforeOjtDocs,
    duringOjtDocs,
    afterOjtDocs,
} from "./data/documents";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from "@/components/ui/avatar"

import { Badge } from "@/components/ui/badge";

import DocumentCard from "./components/ui/DocumentCard";

import { ThemeToggle } from "./components/ui/themetoggle"

export default function Content() {
    return (
        <div className="w-full max-w-5xl mx-auto my-6 px-4">

            {/* Theme Toggle */}
            <div className="flex justify-end mb-4">
                <ThemeToggle />
            </div>

            <Tabs defaultValue="about" className="w-full">

                {/* Tab Selection Bar - Constrained back to max-w-2xl to match original look */}
                <div className="max-w-2xl mx-auto">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                        <TabsTrigger value="about">About</TabsTrigger>
                        <TabsTrigger value="requirements">OJT Requirements</TabsTrigger>
                        <TabsTrigger value="projects">Projects</TabsTrigger>
                    </TabsList>
                </div>

                {/* Tab 1: About - EXACT original code, constrained to max-w-2xl */}
                <TabsContent value="about">
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
                </TabsContent>

                {/* Tab 2: OJT Requirements - New Grid Layout */}
                <TabsContent value="requirements" className="space-y-12">
                    {/* Before OJT Section */}
                    <div>
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-foreground">Before OJT</h3>
                            <p className="text-center text-sm text-muted-foreground">Documents to prepare before deployment</p>
                        </div>
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full max-w-6xl mx-auto"
                        >
                            <CarouselContent>
                                {beforeOjtDocs.map((doc, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="basis-full sm:basis-1/2 lg:basis-1/3"
                                    >
                                        <DocumentCard {...doc} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>

                    {/* During OJT Section */}
                    <div>
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-foreground">During OJT</h3>
                            <p className="text-sm text-muted-foreground">Ongoing submissions while deployed</p>
                        </div>
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full max-w-6xl mx-auto"
                        >
                            <CarouselContent>
                                {duringOjtDocs.map((doc, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="basis-full sm:basis-1/2 lg:basis-1/3"
                                    >
                                        <DocumentCard {...doc} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>

                    {/* After OJT Section */}
                    <div>
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-foreground">After OJT</h3>
                            <p className="text-sm text-muted-foreground">Final requirements upon completion</p>
                        </div>
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full max-w-6xl mx-auto"
                        >
                            <CarouselContent>
                                {afterOjtDocs.map((doc, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="basis-full sm:basis-1/2 lg:basis-1/3"
                                    >
                                        <DocumentCard {...doc} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </TabsContent>

                {/* Tab 3: Projects - Constrained to max-w-2xl */}
                <TabsContent value="projects">
                    <div className="max-w-2xl mx-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle>Featured Work</CardTitle>
                                <CardDescription>Recent applications built</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    • Practice Portfolio (React + Tailwind + shadcn/ui)
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

            </Tabs>
        </div>
    )
}