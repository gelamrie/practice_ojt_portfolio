import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";

export default function ProjectsTab() {
    return (<div className="max-w-2xl mx-auto">
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

    )
}