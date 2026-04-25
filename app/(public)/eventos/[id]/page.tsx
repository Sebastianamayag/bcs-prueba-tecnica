import { Fetch } from "@/shared/fetch/Fetch"
import { Event } from "./Event"
import { detailResponse, event, eventsResponse } from "./type";

export default async function EventsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const paramsDetail = new URLSearchParams({
        scenario: process.env.NEXT_PUBLIC_API_APPLICATIONS_ID ?? ''
    })
    const paramsEvents = new URLSearchParams({
        scenario: process.env.NEXT_PUBLIC_API_EVENTS ?? ''
    })
    const [detalle, eventos] = await Promise.all([
        Fetch<detailResponse>(`/api/aplications/${id}?${paramsDetail}`),
        Fetch<eventsResponse>(`/api/aplications/${id}/events?${paramsEvents}`),
    ])
    console.log(eventos);
    return <Event detalle={detalle.data} eventos={eventos.data} />
}