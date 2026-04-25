import React from 'react'
import person from '@/public/persona.png';
import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section data-testid='hero_section' className="flex py-10 flex-row gap-x-20 lg:gap-0 lg:px-10 justify-between lg:justify-evenly items-center bg-[linear-gradient(120deg,#f0f6ff_55%,#dbeafe_100%)]">
        <div className='px-20 space-y-6 md:pl-20 md:pr-0'>
            <h1 className='font-bold text-primary text-[2.2rem] md:text-[2.5rem] '>Cuenta Ahorros Digital</h1>
            <h2 className='font-semibold w-3/4 ' >Abre tu cuenta de ahorros, sin cuota de manejo, retiros, transferencias de forma gratuita y más</h2>
            <Link href="/consulta-afiliacion" data-testid="consulta_afiliacion" className='rounded-lg text-white bg-primary inline-block px-6 py-3 ' >
                Iniciar solicitud
            </Link>
        </div>
        <div className='hidden md:block max-w-[320px] max-h-[290px]'>
            <Image src={person} alt='persona' />
        </div>
    </section>
  )
}
