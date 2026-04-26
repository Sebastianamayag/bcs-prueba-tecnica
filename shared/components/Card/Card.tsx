import { card } from "./card.type"

export const Card = ({ children: childern }: card) => {
    return (
        <div data-testid='card' className="bg-white rounded-xl border-1 border-gray-100 p-3 md:p-5 lg:p-10 xl:p-15">
            {childern}
        </div>
    )
}
