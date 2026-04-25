import { STEPS } from '../types/work.type';
import { step } from '../data/works';

export const WorksSection = () => {
  return (
    <section data-testid="requires" className="flex flex-col items-center">
        <h2 className='font-bold text-primary text-[1.3rem]' >¿Como funciona?</h2>
        <h3 className='font-semibold'>Asi de facil es obtener su cuenta corriente</h3>
        <div className='flex flex-col md:flex-row gap-4 mt-10'>
            {
                STEPS.map(({Icon, title, description}: step) => (
                    <div key={title} className="flex flex-col items-center">
                        <Icon size={60} color="#0063a7" />
                        <p className="font-semibold">{title}</p>
                        <span className="w-3/4 block text-center text-gray-700 text-[14px]">{description}</span>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
