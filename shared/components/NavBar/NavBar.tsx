"use client";
import { Activity, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from '@/public/logo.png';

export const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="sticky bg-white top-0 left-0 w-full z-50 shadow-lg text-center  mb-0.5 flex flex-row items-start justify-between lg:justify-around px-20  ">
      <div className="flex items-center">
        
        <Link href="/home" data-testid="home_link" >
            <Image src={Logo} alt="Logo" className="w-[200px] h-[60px] " />
        </Link>
      </div>
      <nav className="flex items-center h-[60px] justify-end">
        {/* Desktop menu*/}
        <Link href="/consulta-afiliacion" data-testid="consulta_afiliacion_link" className="hidden md:flex bg-brand text-[#00253d] px-5 py-2.5 text-sm font-semibold hover:bg-brand-dark transition ">
            Solicitudes
        </Link>


        {/* Burger button */}
        <button onClick={toggleMenu} className="md:hidden text-[#00253d]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </nav>

      {/* Menu mobile devices*/}
      <Activity mode={openMenu ? "visible" : "hidden"}>
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 md:hidden" data-testid="hamburguer_menu">
            <Link href="/consulta-afiliacion" data-testid="consulta_afiliacion_mobile_link" className="block w-full hover:bg-gray-100 text-left p-6 py-2 text-[#00253d] hover:text-[#003e6c]">
                Solicitudes
            </Link>
            <button className="mb-4 text-[#00253d] hover:text-[#003e6c] hover:cursor-pointer p-6" onClick={toggleMenu}>Cerrar</button>
        </div>
      </Activity>
    </header>
  );
};
