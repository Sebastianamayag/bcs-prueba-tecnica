import { Fetch } from "@/shared/fetch/Fetch"
import { detailResponse, eventsResponse } from "./type";
import { Detail, Events } from "./components";

export default async function EventsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // fetch 
    const [detalle, eventos] = await Promise.all([
        Fetch<detailResponse>(`/api/aplications/${id}`, process.env.NEXT_PUBLIC_API_APPLICATIONS_ID ?? ''),
        Fetch<eventsResponse>(`/api/aplications/${id}/events`, process.env.NEXT_PUBLIC_API_EVENTS ?? ''),
    ]);

    return (
        <div className="bg-gray md:px-[15rem] px-[2rem] space-y-2 pb-5 h-[calc(100vh-64px)]">
            <Detail {...detalle.data} />
            <Events eventos={eventos.data} />
        </div>
    )
}