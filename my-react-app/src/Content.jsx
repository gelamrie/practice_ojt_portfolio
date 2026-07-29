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

import { Badge } from "@/components/ui/badge"

import { ThemeToggle } from "./components/ui/themetoggle"
// Document Data Structures
const beforeOjtDocs = [
    {
        title: "Cover Letter",
        status: "In Progress",
        downloadUrl: "#",
        viewUrl: "#",
    },
    {
        title: "Internship Agreement",
        status: "In Progress",
        downloadUrl: "#",
        viewUrl: "#",
    },
    {
        title: "Company Profile",
        status: "In Progress",
        downloadUrl: "#",
        viewUrl: "#",
    },
    {
        title: "Memorandum of Agreement (MOA)",
        status: "In Progress",
        downloadUrl: "#",
        viewUrl: "#",
    },
    {
        title: "Student Waiver",
        status: "In Progress",
        downloadUrl: "#",
        viewUrl: "#",
    },
    {
        title: "Letter of Endorsement",
        status: "Completed",
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1wxS2glqkuNFUzP9WS8IgafcI3zg3ClcV',
        viewUrl: 'https://drive.google.com/file/d/1wxS2glqkuNFUzP9WS8IgafcI3zg3ClcV/view?usp=drive_link',
    },
    {
        title: 'Letter of Intent',
        status: "Completed",
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1qwoRBP3yfEGYJK3tR6srlUWCmwdCsUJQ',
        viewUrl: 'https://drive.google.com/file/d/1qwoRBP3yfEGYJK3tR6srlUWCmwdCsUJQ/view?usp=drive_link',
    },
    {
        title: 'Medical Certificate',
        status: "In Progress",
        downloadUrl: "#",
        viewUrl: "#",
    },
    {
        title: 'Consent Form',
        status: "In Progress",
        downloadUrl: "#",
        viewUrl: "#",
    },
    {
        title: 'Curriculum Vitae',
        status: "Completed",
        downloadUrl: 'https://drive.google.com/uc?export=download&id=178HiRcmAUMmr6cf_wvO_ljyOG0tzeukk',
        viewUrl: 'https://drive.google.com/file/d/178HiRcmAUMmr6cf_wvO_ljyOG0tzeukk/view?usp=drive_link',
    },
    {
        title: 'Insurance',
        status: "In Progress",
        downloadUrl: "#",
        viewUrl: "#",
    },
]

const duringOjtDocs = [
    {
        title: 'Weekly Report',
        status: "In Progress",
        downloadUrl: "#",
        viewUrl: "#",
    },
    {
        title: 'Weekly Documentation',
        status: "In Progress",
        downloadUrl: "#",
        viewUrl: "#",
    },
]

const afterOjtDocs = [
    {
        title: 'Evaluation for Supervisor',
        status: "Not Submitted",
        downloadUrl: '#', viewUrl: '#'
    },
    {
        title: 'Performance Evaluation Grading',
        status: "Not Submitted",
        downloadUrl: '#',
        viewUrl: '#'
    },
]

// Reusable Document Card Component
function DocumentCard({ title, status, downloadUrl, viewUrl }) {
    return (
        <div className="bg-card text-card-foreground border p-6 rounded-2xl shadow-xl flex flex-col items-center justify-between min-h-[240px] text-center transition-transform hover:-translate-y-1">

            {/* Document Icon */}
            <div className="mt-2">
                <svg
                    className="w-8 h-8 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                </svg>
            </div>

            {/* Title and Status */}
            <div className="flex flex-col items-center gap-2 my-4">
                <h4 className="text-lg font-bold tracking-tight px-2">
                    {title}
                </h4>

                <Badge
                    className={
                        status === "Completed"
                            ? "bg-green-600 hover:bg-green-700 text-white"
                            : status === "In Progress"
                                ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                                : "bg-red-600 hover:bg-red-700 text-white"
                    }
                >
                    {status}
                </Badge>
            </div>

            {/* Buttons */}
            <div className="w-full space-y-2">
                <a
                    href={downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary text-primary-foreground font-semibold py-2.5 px-4 rounded-xl block hover:opacity-90 transition-colors text-sm"
                >
                    Download {title.includes("CV") ? "CV" : "Document"}
                </a>

                <a
                    href={viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-muted-foreground hover:text-foreground font-medium text-sm transition-colors pt-1"
                >
                    View Document

                    <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                    </svg>
                </a>
            </div>
        </div>
    )
}

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
                                <p className="text-sm text-slate-600">
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