import DocumentCard from "./DocumentCard";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import {
    beforeOjtDocs,
    duringOjtDocs,
    afterOjtDocs,
} from "../data/documents";

export default function RequirementsTab() {
    return (
        <>
            {/* Before OJT Section */}
            < div >
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
            </div >

            {/* During OJT Section */}
            < div >
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
            </div >

            {/* After OJT Section */}
            < div >
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
            </div >
        </>
    )
}