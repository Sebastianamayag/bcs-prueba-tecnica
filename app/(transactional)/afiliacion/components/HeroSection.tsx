import { Select } from '@/shared/components/Select/Select'
import { DOCUMENT_TYPE_OPTIONS } from '../../constants/data'

export const HeroSection = () => {
    return (
        <div>
            <Select
                options={DOCUMENT_TYPE_OPTIONS}
                placeHolder="Tipo de documento"
                onChange={(e) => console.log(e)}
                defaultValue={status}
                value={status}
                className="md:mt-6"
            />
        </div>
    )
}
