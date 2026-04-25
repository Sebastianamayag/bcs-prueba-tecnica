import { Detail } from "./components"
import { Events } from "./components/Events"
import { detail, event } from "./type"

export const Event = ({ detalle, eventos }: { detalle: detail, eventos: event[] }) => {
  return (
    <div className="bg-gray md:px-[15rem] px-[2rem] space-y-2 pb-5">
        <Detail {...detalle} />
        <Events eventos={eventos} />
    </div>
  )
}
