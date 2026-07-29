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
import profilePic from './assets/profile.png'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

// Document Data Structures
const beforeOjtDocs = [
    { title: 'Cover Letter', downloadUrl: '#', viewUrl: '#' },
    { title: 'Internship Agreement', downloadUrl: '#', viewUrl: '#' },
    { title: 'Company Profile', downloadUrl: '#', viewUrl: '#' },
    { title: 'Memorandum of Agreement (MOA)', downloadUrl: '#', viewUrl: '#' },
    { title: 'Student Waiver', downloadUrl: '#', viewUrl: '#' },
    {
        title: 'Letter of Endorsement',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1wxS2glqkuNFUzP9WS8IgafcI3zg3ClcV',
        viewUrl: 'https://drive.google.com/file/d/1wxS2glqkuNFUzP9WS8IgafcI3zg3ClcV/view?usp=drive_link',
    },
    {
        title: 'Letter of Intent',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1qwoRBP3yfEGYJK3tR6srlUWCmwdCsUJQ',
        viewUrl: 'https://drive.google.com/file/d/1qwoRBP3yfEGYJK3tR6srlUWCmwdCsUJQ/view?usp=drive_link',
    },
    { title: 'Medical Certificate', downloadUrl: '#', viewUrl: '#' },
    { title: 'Consent Form', downloadUrl: '#', viewUrl: '#' },
    {
        title: 'Curriculum Vitae',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=178HiRcmAUMmr6cf_wvO_ljyOG0tzeukk',
        viewUrl: 'https://drive.google.com/file/d/178HiRcmAUMmr6cf_wvO_ljyOG0tzeukk/view?usp=drive_link',
    },
    { title: 'Insurance', downloadUrl: '#', viewUrl: '#' },
]

const duringOjtDocs = [
    { title: 'Weekly Report', downloadUrl: '#', viewUrl: '#' },
    { title: 'Weekly Documentation', downloadUrl: '#', viewUrl: '#' },
]

const afterOjtDocs = [
    { title: 'Evaluation for Supervisor', downloadUrl: '#', viewUrl: '#' },
    { title: 'Performance Evaluation Grading', downloadUrl: '#', viewUrl: '#' },
]

// Reusable Document Card Component
function DocumentCard({ title, downloadUrl, viewUrl }) {
    return (
        <div className="bg-black text-white p-6 rounded-2xl shadow-xl flex flex-col items-center justify-between min-h-[240px] text-center transition-transform hover:-translate-y-1">
            <div className="mt-2">
                <svg className="w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
            </div>
            <h4 className="text-lg font-bold my-4 tracking-tight px-2">{title}</h4>
            <div className="w-full space-y-2">
                <a
                    href={downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white text-black font-semibold py-2.5 px-4 rounded-xl block hover:bg-slate-100 transition-colors text-sm"
                >
                    Download {title.includes('CV') ? 'CV' : 'Document'}
                </a>
                <a
                    href={viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-slate-300 hover:text-white font-medium text-sm transition-colors pt-1"
                >
                    View Document
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default function Content() {
    return (
        // Expanded container for the OJT Requirements grid
        <div className="w-full max-w-5xl mx-auto my-6 px-4">
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
                                <img src={profilePic} alt="Profile Picture" />
                                <div className="text-center">
                                    <h2 className="text-lg font-semibold">Angela Marie De Juan</h2>
                                    <p className="text-sm text-muted-foreground">
                                        I am incoming 3rd year Computer Engineering student at Polytechnic University of the Philippines - Main Campus. Currently an intern at 7th Pillar Integrated System Corp.  Welcome to my OJT portfolio. Here you can track my deployment progress, requirements, and personal projects.
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
                            <h3 className="text-center text-xl font-bold text-slate-900">Before OJT</h3>
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
                            <h3 className="text-xl font-bold text-slate-900">During OJT</h3>
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
                            <h3 className="text-xl font-bold text-slate-900">After OJT</h3>
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