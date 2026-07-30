import { Badge } from "@/components/ui/badge";


// Reusable Document Card Component
export default function DocumentCard({
    title,
    status,
    downloadUrl,
    viewUrl,
}) {
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
