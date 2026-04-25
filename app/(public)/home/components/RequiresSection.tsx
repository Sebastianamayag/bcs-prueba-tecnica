import { CheckCircle, ClipboardList } from 'lucide-react';
import { REQUIREMENTS } from '../data/requirement';
import { Requirement } from '../types/home.type';

export const RequiresSection = () => {
  return (
    <section data-testid="requires" className="rounded-[6px] py-10 px-5 mx:px-5 mx-6 flex bg-[linear-gradient(120deg,#f0f6ff_55%,#dbeafe_100%)] flex-row justify-between lg:justify-around items-center">
        <div className='flex flex-col gap-4'>
            <h2 className="font-bold text-primary text-[1.3rem]">Lo que necesita para abrir su CTA</h2>
            <ul className='flex flex-col gap-2'>
                {
                    REQUIREMENTS.map((requirement: Requirement) => (
                        <li key={requirement.id} className='flex flex-row gap-x-2'><CheckCircle size={24} color="#6366f1" strokeWidth={2} className="text-primary" />{requirement.text}</li>
                    ))
                }
            </ul>
        </div>
        <div className="md:block hidden md:mr-[10rem] lg:mr-0 " >
            <ClipboardList size={150} color="#6366f1" strokeWidth={2} />
        </div>
    </section>
  )
}
