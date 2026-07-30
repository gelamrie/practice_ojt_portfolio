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

//Tabs Content
import AboutTab from "./components/AboutTab";
import ProjectsTab from "./components/ProjectsTab";

import { Badge } from "@/components/ui/badge";

import DocumentCard from "./components/DocumentCard.jsx";

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
                    <AboutTab />
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
                    <ProjectsTab />
                </TabsContent>

            </Tabs>
        </div>
    )
}