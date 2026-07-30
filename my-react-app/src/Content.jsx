import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent
} from "@/components/ui/tabs"

import { ThemeToggle } from "./components/ui/themetoggle"

//Tabs Content
import AboutTab from "./components/AboutTab";
import ProjectsTab from "./components/ProjectsTab";
import RequirementsTab from "./components/RequirementsTab";

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
                    <RequirementsTab />
                </TabsContent>

                {/* Tab 3: Projects - Constrained to max-w-2xl */}
                <TabsContent value="projects">
                    <ProjectsTab />
                </TabsContent>

            </Tabs>
        </div>
    )
}